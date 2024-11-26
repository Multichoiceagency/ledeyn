// scripts/runLighthouse.mjs
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const runLighthouse = async (url) => {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };

  try {
    const runnerResult = await lighthouse(url, options);

    if (!runnerResult.lhr) {
      console.error('Lighthouse failed to return results');
      return;
    }

    console.log('\n-----------------------------------');
    console.log(`Lighthouse results for: ${url}`);
    console.log('-----------------------------------');
    console.log(`Performance: ${(runnerResult.lhr.categories.performance.score * 100).toFixed(2)}`);
    console.log(`Accessibility: ${(runnerResult.lhr.categories.accessibility.score * 100).toFixed(2)}`);
    console.log(`Best Practices: ${(runnerResult.lhr.categories['best-practices'].score * 100).toFixed(2)}`);
    console.log(`SEO: ${(runnerResult.lhr.categories.seo.score * 100).toFixed(2)}`);
    console.log('-----------------------------------\n');

  } catch (error) {
    console.error(`Error running Lighthouse for ${url}:`, error);
  } finally {
    await chrome.kill();
  }
};

const pages = [
  '/',
  '/about',
  '/contact',
  '/our-products',
  '/services',
  '/our-products/animal-feed-protein',
  '/our-products/cacao',
  '/our-products/coffee',
  '/our-products/cotton',
  '/our-products/edible-oils',
  '/our-products/grain-seeds',
  '/our-products/nuts-cashew-macadamia',
  '/our-products/rubber',
  '/our-products/spices'
];

(async () => {
  for (const page of pages) {
    await runLighthouse(`https://ledeyn.com${page}`);
  }
})();