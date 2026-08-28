const fs = require('fs');

const content = fs.readFileSync('src/components/ladakh/LadakhTours.astro', 'utf8');

// Find the section id="journeys"
const targetStr = '<section class="py-24 lg:py-32 bg-[#0a0a0a]" id="journeys">';
const idx = content.indexOf(targetStr);

if (idx !== -1) {
  const cleanContent = `---\n---\n\n` + content.substring(idx);
  fs.writeFileSync('src/components/ladakh/LadakhTours.astro', cleanContent);
  console.log("Successfully cleaned LadakhTours.astro");
} else {
  console.log("Could not find section journeys");
}

