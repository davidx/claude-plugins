#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const puppeteer = require('puppeteer-core');

const prompt = process.argv.slice(2).join(' ');
if (!prompt) {
  console.error('Usage: run-aura.js <prompt>');
  process.exit(1);
}

const CDP_PORT = 9222;
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  fs.mkdirSync('./mockups', { recursive: true });

  // Check if CDP running
  let cdpRunning = false;
  try {
    execSync(`curl -s http://localhost:${CDP_PORT}/json/version`, { stdio: 'pipe' });
    cdpRunning = true;
  } catch {}

  if (!cdpRunning) {
    console.log('Restarting Brave with debugging...');
    execSync('pkill -9 "Brave Browser" 2>/dev/null || true');
    await sleep(1000);

    spawn('/Applications/Brave Browser.app/Contents/MacOS/Brave Browser', [
      `--remote-debugging-port=${CDP_PORT}`,
      `--user-data-dir=${process.env.HOME}/Library/Application Support/BraveSoftware/Brave-Browser`,
      '--restore-last-session'
    ], { detached: true, stdio: 'ignore' }).unref();

    // Wait for CDP
    for (let i = 0; i < 30; i++) {
      await sleep(500);
      try {
        execSync(`curl -s http://localhost:${CDP_PORT}/json/version`, { stdio: 'pipe' });
        break;
      } catch {}
    }
  }

  console.log('Connecting to browser...');
  const browser = await puppeteer.connect({
    browserURL: `http://localhost:${CDP_PORT}`
  });

  console.log('Opening Aura.build...');
  const page = await browser.newPage();
  await page.goto('https://www.aura.build/create', { waitUntil: 'networkidle2', timeout: 30000 });

  console.log('Filling prompt...');
  await page.waitForSelector('textarea', { timeout: 10000 });
  await page.type('textarea', prompt);
  await sleep(500);

  console.log('Submitting...');
  await page.click('button[type="submit"]');

  console.log('Waiting for generation...');
  await page.waitForFunction(
    () => document.body.innerText.includes('Export'),
    { timeout: 120000 }
  );
  console.log('Done!');

  console.log('Exporting...');
  await sleep(1000);

  // Click Export button
  const exportBtn = await page.$x("//button[contains(text(), 'Export')]");
  if (exportBtn.length) await exportBtn[0].click();
  await sleep(1000);

  // Click Download HTML
  const downloadBtn = await page.$x("//*[contains(text(), 'Download')]");
  if (downloadBtn.length) await downloadBtn[0].click();
  await sleep(3000);

  // Find and move downloaded file
  const dl = `${process.env.HOME}/Downloads`;
  const files = fs.readdirSync(dl)
    .filter(f => f.endsWith('.html'))
    .map(f => ({ name: f, time: fs.statSync(`${dl}/${f}`).mtime.getTime() }))
    .sort((a, b) => b.time - a.time);

  if (files.length && Date.now() - files[0].time < 60000) {
    const ts = new Date().toISOString().slice(0, 19).replace(/[:.]/g, '-');
    const dest = `./mockups/aura-${ts}.html`;
    fs.renameSync(`${dl}/${files[0].name}`, dest);
    console.log(`Saved: ${dest}`);
  }

  await browser.disconnect();
}

main().catch(e => {
  console.error(e.message);
  process.exit(1);
});
