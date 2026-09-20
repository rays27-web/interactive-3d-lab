/**
 * Master Builder: Assembles all 5 topics and writes modular question files to src/quiz/questions/
 */

const fs = require('fs');
const path = require('path');

const { generateFNL } = require('./generators/generate_fnl.cjs');
const { generateADG } = require('./generators/generate_adg.cjs');
const { generateGFP } = require('./generators/generate_gfp.cjs');
const { generateKLP } = require('./generators/generate_klp.cjs');
const { generateSEV } = require('./generators/generate_sev.cjs');

const outDir = path.resolve('src/quiz/questions');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Generating Topic 1: Fundamental & Newton\'s Universal Law...');
const fnl = generateFNL();
fs.writeFileSync(
  path.join(outDir, 'fundamentalNewtonLaw.js'),
  `// Topic 1: Fundamental & Newton's Universal Law\n// Total Questions: ${fnl.length}\n\nexport const questions = ${JSON.stringify(fnl, null, 2)};\n\nexport default questions;\n`
);
console.log(`✓ fundamentalNewtonLaw.js written: ${fnl.length} questions`);

console.log('Generating Topic 2: Acceleration Due to Gravity...');
const adg = generateADG();
fs.writeFileSync(
  path.join(outDir, 'accelerationDueToGravity.js'),
  `// Topic 2: Acceleration Due to Gravity\n// Total Questions: ${adg.length}\n\nexport const questions = ${JSON.stringify(adg, null, 2)};\n\nexport default questions;\n`
);
console.log(`✓ accelerationDueToGravity.js written: ${adg.length} questions`);

console.log('Generating Topic 3: Gravitational Field & Potential...');
const gfp = generateGFP();
// Ensure alias q-field-h03 points to GFP-H-001 for backward compatibility
const qFieldH03 = { ...gfp[140], id: 'q-field-h03' }; // First Hard question
gfp.push(qFieldH03);

fs.writeFileSync(
  path.join(outDir, 'gravitationalFieldPotential.js'),
  `// Topic 3: Gravitational Field & Potential\n// Total Questions: ${gfp.length}\n\nexport const questions = ${JSON.stringify(gfp, null, 2)};\n\nexport default questions;\n`
);
console.log(`✓ gravitationalFieldPotential.js written: ${gfp.length} questions`);

console.log('Generating Topic 4: Kepler\'s Laws of Planetary Motion...');
const klp = generateKLP();
fs.writeFileSync(
  path.join(outDir, 'keplerLaws.js'),
  `// Topic 4: Kepler's Laws of Planetary Motion\n// Total Questions: ${klp.length}\n\nexport const questions = ${JSON.stringify(klp, null, 2)};\n\nexport default questions;\n`
);
console.log(`✓ keplerLaws.js written: ${klp.length} questions`);

console.log('Generating Topic 5: Satellite & Escape Velocity...');
const sev = generateSEV();
fs.writeFileSync(
  path.join(outDir, 'satelliteEscapeVelocity.js'),
  `// Topic 5: Satellite & Escape Velocity\n// Total Questions: ${sev.length}\n\nexport const questions = ${JSON.stringify(sev, null, 2)};\n\nexport default questions;\n`
);
console.log(`✓ satelliteEscapeVelocity.js written: ${sev.length} questions`);

const total = fnl.length + adg.length + gfp.length + klp.length + sev.length;
console.log(`\n========================================`);
console.log(`ALL 5 TOPIC QUESTION FILES GENERATED!`);
console.log(`TOTAL QUESTIONS: ${total}`);
console.log(`========================================`);
