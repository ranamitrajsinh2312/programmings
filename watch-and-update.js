const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('🔍 Starting file watcher for Java programs...');
console.log('📁 Watching folder: DS');
console.log('✨ Any changes to .java files will automatically update the documentation');

// Initial generation
console.log('🚀 Generating initial problems data...');
generateProblemsData();

// Watch for changes in .java files
const watchFolder = __dirname;
fs.watch(watchFolder, { recursive: false }, (eventType, filename) => {
    if (filename && filename.endsWith('.java')) {
        console.log(`📝 Detected ${eventType} in: ${filename}`);
        console.log('🔄 Regenerating problems data...');
        
        // Add a small delay to ensure file operations are complete
        setTimeout(() => {
            generateProblemsData();
        }, 500);
    }
});

function generateProblemsData() {
    exec('node generate-problems.js > problems-data.js', (error, stdout, stderr) => {
        if (error) {
            console.error('❌ Error generating problems data:', error);
            return;
        }
        if (stderr) {
            console.error('⚠️ Warnings:', stderr);
        }
        
        // Count the number of problems
        const problemsContent = fs.readFileSync('problems-data.js', 'utf8');
        const problemCount = (problemsContent.match(/problem\d+:/g) || []).length;
        
        console.log(`✅ Problems data updated successfully! (${problemCount} programs)`);
        console.log(`📄 File: problems-data.js`);
        console.log('---');
    });
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 File watcher stopped. Documentation is up to date!');
    process.exit(0);
});

console.log('\n📖 Instructions:');
console.log('1. Add new .java files to the DS folder');
console.log('2. Modify existing .java files');
console.log('3. Changes will be automatically detected and applied');
console.log('4. Refresh your HTML page to see updates');
console.log('5. Press Ctrl+C to stop the watcher');
console.log('\n🎯 Ready! Make changes to your Java files...\n');