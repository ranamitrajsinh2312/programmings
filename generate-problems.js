const fs = require('fs');
const path = require('path');

// Read all Java files from DS directory
const dsDirectory = './';
const javaFiles = fs.readdirSync(dsDirectory).filter(file => 
    file.endsWith('.java') && file.startsWith('Problem')
);

console.log('// Auto-generated problemsData from Java files');
console.log('this.problemsData = {');

javaFiles.sort().forEach((file, index) => {
    const filePath = path.join(dsDirectory, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract problem number from filename
    const problemMatch = file.match(/Problem(\d+)_(.+)\.java/);
    if (!problemMatch) return;
    
    const problemNum = problemMatch[1].padStart(2, '0');
    const problemName = problemMatch[2].replace(/([A-Z])/g, ' $1').trim();
    
    // Determine category based on problem number
    let category = "Basic Programming";
    let difficulty = "Easy";
    
    if (parseInt(problemNum) >= 21 && parseInt(problemNum) <= 40) {
        category = "Array Operations";
    } else if (parseInt(problemNum) >= 41 && parseInt(problemNum) <= 50) {
        category = "String Operations";
        difficulty = "Medium";
    } else if (parseInt(problemNum) >= 61 && parseInt(problemNum) <= 70) {
        category = "Pattern Programs";
    } else if (parseInt(problemNum) >= 71 && parseInt(problemNum) <= 80) {
        category = "Advanced Problems";
        difficulty = "Hard";
    }
    
    // Clean the code content
    const cleanCode = content
        .replace(/\/\/.*$/gm, '') // Remove single-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
        .replace(/^\s*$/gm, '') // Remove empty lines
        .split('\n')
        .filter(line => line.trim().length > 0)
        .join('\n');
    
    console.log(`    problem${problemNum}: {
        title: "Problem ${problemNum}: ${problemName}",
        difficulty: "${difficulty}",
        category: "${category}",
        description: "A Java program for ${problemName.toLowerCase()}.",
        code: \`${cleanCode}\`,
        output: \`Sample output for ${problemName}\`,
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    }${index < javaFiles.length - 1 ? ',' : ''}`);
});

console.log('};');