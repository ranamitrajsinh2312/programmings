# Java Programming Problems Documentation

## 📚 Overview

This is a comprehensive HTML/CSS/JavaScript documentation system for 70+ Java programming problems, organized into categories with interactive navigation, code highlighting, and expected outputs.

## 🚀 Features

- **Interactive Sidebar Navigation**: Browse through 5 main categories
- **Syntax Highlighted Code**: Professional Java code display with Prism.js
- **Expected Outputs**: See what each program should output
- **Complexity Analysis**: Time and space complexity for each algorithm
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional UI**: Modern design with gradients and animations

## 📁 File Structure

```
DS/
├── index.html              # Main HTML file
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality and problem data
├── extended-problems.js    # Additional problem definitions
├── README.md              # This documentation
├── launch.bat             # Windows launcher (optional)
└── Problem##_*.java       # 70+ Java source files
```

## 🎯 Categories

### 1. **Basic Programming (01-20)**
- Prime numbers, factorial, palindromes
- Armstrong numbers, perfect numbers
- Number theory and basic algorithms

### 2. **Array Operations (21-40)**
- Linear and binary search
- Sorting algorithms (Selection sort)
- Array manipulation and traversal

### 3. **String Operations (41-50)**
- Anagram detection
- String pattern matching
- Text processing algorithms

### 4. **Pattern Programs (61-70)**
- Geometric patterns with loops
- Star patterns, triangles, diamonds
- ASCII art generation

### 5. **Advanced Problems (71-80)**
- Complex algorithms
- Real-world applications
- Mathematical computations

## 🖥️ How to Use

### Method 1: Direct Browser Opening
1. Open `index.html` in any modern web browser
2. Navigate through the sidebar to explore different problems
3. Click on any problem to view code, output, and complexity

### Method 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```
Then visit `http://localhost:8000`

### Method 3: Windows Launcher (Included)
Double-click `launch.bat` to open in your default browser

## 🎨 Customization

### Adding New Problems
1. Edit `script.js` or `extended-problems.js`
2. Add new problem object with this structure:
```javascript
problemXX: {
    title: "Problem XX: Title",
    difficulty: "Easy/Medium/Hard",
    category: "Category Name",
    description: "Problem description",
    code: `// Java code here`,
    output: `Expected output`,
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)"
}
```

### Styling Changes
- Edit `styles.css` to modify colors, fonts, layout
- CSS variables at the top for easy theme customization
- Responsive breakpoints included for mobile devices

## 🌟 Key Features Explained

### Sidebar Navigation
- Expandable/collapsible sections
- Active state tracking for current problem
- Mobile-responsive with hamburger menu

### Code Display
- Syntax highlighting with Prism.js
- Copy-friendly formatting
- Language indicators

### Output Display
- Terminal-style output formatting
- Clear distinction between input/output
- Monospace font for consistency

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation

## 🔧 Technical Details

### Dependencies
- **Prism.js**: Syntax highlighting
- **Font Awesome**: Icons
- **Modern CSS**: Flexbox, Grid, CSS Variables
- **Vanilla JavaScript**: No framework dependencies

### Browser Support
- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- Mobile browsers supported

### Performance
- Lazy loading of problem content
- Optimized CSS with minimal repaints
- Smooth animations with CSS transforms

## 📱 Mobile Features

- Responsive sidebar that slides in/out
- Touch-friendly navigation
- Optimized font sizes for mobile reading
- Swipe gestures (future enhancement)

## 🚀 Future Enhancements

- [ ] Search functionality across all problems
- [ ] Bookmark favorite problems
- [ ] Export problems to PDF
- [ ] Dark/Light theme toggle
- [ ] Problem difficulty filtering
- [ ] Code execution in browser
- [ ] Interactive code editor

## 💡 Usage Tips

1. **Start with Basic Programming** if you're a beginner
2. **Use the complexity analysis** to understand algorithm efficiency
3. **Try to understand the logic** before looking at the code
4. **Practice writing the code yourself** after seeing the solution
5. **Use mobile version** for studying on-the-go

## 🤝 Contributing

To add more problems or improve the documentation:
1. Fork/clone this repository
2. Add your problem data to `extended-problems.js`
3. Test in browser
4. Submit improvements

## 📄 License

This documentation system is open-source and free to use for educational purposes.

## 🎓 Educational Use

Perfect for:
- **Computer Science Students**: Algorithm practice
- **Interview Preparation**: Coding interview problems
- **Programming Practice**: Hands-on learning
- **Teaching**: Classroom demonstrations

---

*Happy Coding! 🚀*