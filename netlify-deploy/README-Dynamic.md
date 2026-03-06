# 🎯 Dynamic Java Problems Documentation

A smart documentation system that **automatically** includes new Java programs and updates when you modify existing ones.

## ✨ Features

- **🔄 Auto-Discovery**: Add new `.java` files → automatically appear in documentation
- **⚡ Live Updates**: Modify Java code → changes reflect immediately  
- **📊 Smart Categorization**: Programs automatically organized by number ranges
- **🎨 Dynamic Sidebar**: Categories and problems generated based on actual files
- **🔍 File Monitoring**: Real-time detection of file changes

## 🚀 Quick Start

### Option 1: Easy Start (Recommended)
```bash
# Simply run the startup script
start-dynamic-docs.bat
```

### Option 2: Manual Steps
```bash
# 1. Generate problems data
node generate-problems.js > problems-data.js

# 2. Start file watcher (in separate terminal)
node watch-and-update.js

# 3. Open documentation
# Open index-dynamic.html in your browser
```

## 📁 How It Works

### File Structure
```
DS/
├── Problem01_PrimeNumber.java      ← Your Java programs
├── Problem02_Factorial.java        
├── ...more programs...
├── generate-problems.js            ← Reads Java files
├── watch-and-update.js            ← Monitors file changes  
├── problems-data.js               ← Auto-generated data
├── script-complete.js             ← Documentation logic
├── index-dynamic.html             ← Dynamic HTML page
└── start-dynamic-docs.bat         ← Easy startup
```

### Auto-Categorization Rules
- **01-20**: Basic Programming
- **21-40**: Array Operations  
- **41-50**: String Operations
- **61-70**: Pattern Programs
- **71-80+**: Advanced Problems

## 📝 Adding New Programs

1. **Create Java file** in DS folder:
   ```java
   // Problem25_NewAlgorithm.java
   public class Problem25_NewAlgorithm {
       public static void main(String[] args) {
           System.out.println("Hello World!");
       }
   }
   ```

2. **File watcher detects** the new file automatically

3. **Problems data regenerates** automatically  

4. **Refresh browser** to see the new program

## 🔧 Modifying Existing Programs

1. **Edit any `.java` file** in DS folder
2. **Save the file**
3. **File watcher regenerates** documentation automatically
4. **Refresh browser** to see changes

## 🎯 What Gets Auto-Extracted

From each Java file:
- ✅ **Class name** → Problem title
- ✅ **Full source code** → Code section
- ✅ **System.out.println()** → Expected output
- ✅ **Comments** → Problem description
- ✅ **Auto-categorization** → Based on number

## 🔍 File Watcher Console

When running `watch-and-update.js`, you'll see:
```
🔍 Starting file watcher for Java programs...
📁 Watching folder: DS
✨ Any changes to .java files will automatically update

📝 Detected change in: Problem25_NewAlgorithm.java
🔄 Regenerating problems data...
✅ Problems data updated successfully! (25 programs)
```

## 🎨 Customizing Categories

To add custom categories, modify the `categoryRanges` in `generate-problems.js`:
```javascript
const categoryRanges = {
    'Basic Programming': [1, 20],
    'Array Operations': [21, 40], 
    'String Operations': [41, 50],
    'Your Custom Category': [51, 60],  // Add here
    'Pattern Programs': [61, 70],
    'Advanced Problems': [71, 100]
};
```

## 📊 Benefits

### Before (Manual)
- ❌ Add Java file
- ❌ Manually update HTML
- ❌ Manually update JavaScript
- ❌ Manually add to sidebar
- ❌ Copy-paste code blocks

### After (Dynamic)  
- ✅ Add Java file
- ✅ **Everything else is automatic!**

## 🔧 Troubleshooting

**Q: File watcher not detecting changes?**
- Restart `watch-and-update.js`
- Check file is in DS folder
- Ensure filename follows `Problem##_*.java` pattern

**Q: New program not appearing?**  
- Refresh browser page
- Check console for errors
- Verify `problems-data.js` was updated

**Q: Browser not updating?**
- Hard refresh (Ctrl+F5)
- Check file watcher is running
- Wait 3-5 seconds for auto-refresh

---

🎉 **Enjoy your dynamic Java documentation system!** 

Add programs freely, modify existing ones, and watch the documentation update automatically.