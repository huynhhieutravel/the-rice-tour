const fs = require('fs');

const ladakhFile = fs.readFileSync('src/pages/country/ladakh.astro', 'utf8');
const lines = ladakhFile.split('\n');

// Get lines 79 to 185 (0-indexed 78 to 184)
const carouselLines = lines.slice(78, 185).join('\n');

const newLadakhToursContent = `---
---

${carouselLines}
`;

fs.writeFileSync('src/components/ladakh/LadakhTours.astro', newLadakhToursContent);
console.log("Successfully replaced LadakhTours.astro with carousel layout from ladakh.astro");
