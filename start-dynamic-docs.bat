@echo off
echo.
echo ================================================
echo   🎯 Java Problems Dynamic Documentation 
echo ================================================
echo.
echo Starting dynamic Java documentation system...
echo.

REM Check if Node.js is available
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js not found! Please install Node.js first.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Generate initial problems data
echo 🔄 Generating problems data from Java files...
node generate-problems.js > problems-data.js
if errorlevel 1 (
    echo ❌ Failed to generate problems data
    pause
    exit /b 1
)

REM Count problems
for /f "tokens=*" %%i in ('findstr /c:"problem" problems-data.js') do set count=%%i
echo ✅ Generated problems data successfully!

REM Start file watcher in background
echo 🔍 Starting file watcher for automatic updates...
start "Java Problems File Watcher" /min node watch-and-update.js

REM Wait a moment for file watcher to start
timeout /t 2 /nobreak >nul

REM Open documentation in browser
echo 🌐 Opening documentation in browser...
start index-dynamic.html

echo.
echo ================================================
echo   📚 Dynamic Documentation is Ready!
echo ================================================
echo.
echo ✅ File watcher is running (minimized window)
echo ✅ Documentation opened in browser  
echo ✅ Add/modify .java files in DS folder for auto-updates
echo.
echo 💡 Tips:
echo    - Add new .java files to DS folder
echo    - Modify existing .java files  
echo    - Changes will appear automatically
echo    - Refresh browser to see updates
echo.
echo Press any key to stop file watcher...
pause >nul

REM Stop file watcher
taskkill /f /im node.exe /t >nul 2>&1
echo.
echo 👋 File watcher stopped. Documentation saved.
echo    You can restart anytime by running this script again.
echo.