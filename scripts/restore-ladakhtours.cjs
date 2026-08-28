const fs = require('fs');

const ladakhFile = fs.readFileSync('src/pages/country/ladakh.astro', 'utf8');
const lines = ladakhFile.split('\n');

// Find the line that starts the <section id="journeys">
// It is at the end of line 79 in my previous inspection.
// So the real carousel content starts at line 80 and ends around 183.
const startIndex = 79; // Line 80 is index 79
const endIndex = 184; // Line 185 is index 184

const carouselLines = lines.slice(startIndex, endIndex).join('\n');

const newContent = `---
---

<section class="py-24 lg:py-32 bg-[#0a0a0a]" id="journeys">
${carouselLines}
`;

fs.writeFileSync('src/components/ladakh/LadakhTours.astro', newContent);
console.log("Successfully rebuilt LadakhTours.astro");
