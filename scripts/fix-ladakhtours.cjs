const fs = require('fs');

const ladakhFile = fs.readFileSync('src/pages/country/ladakh.astro', 'utf8');
const lines = ladakhFile.split('\n');

// The <section id="journeys"> starts exactly at line 80
// Wait, in my previous read it was around line 79. Let's find exactly the `<section id="journeys">`.
let startIndex = lines.findIndex(line => line.includes('<section class="py-24 lg:py-32 bg-[#0a0a0a]" id="journeys">'));
let endIndex = startIndex;
// find the matching closing tag </section>
let depth = 0;
for (let i = startIndex; i < lines.length; i++) {
  if (lines[i].includes('<section')) depth++;
  if (lines[i].includes('</section>')) {
    depth--;
    if (depth === 0) {
      endIndex = i;
      break;
    }
  }
}

const carouselLines = lines.slice(startIndex, endIndex + 1).join('\n');

const newLadakhToursContent = `---
---

${carouselLines}
`;

fs.writeFileSync('src/components/ladakh/LadakhTours.astro', newLadakhToursContent);
console.log("Successfully fixed LadakhTours.astro to only include the carousel section.");
