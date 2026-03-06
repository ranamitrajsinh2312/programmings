@echo off
echo.
echo ================================================
echo   🌐 Java Problems - Live Web Server
echo ================================================
echo.

REM Check for Python
python --version >nul 2>&1
if not errorlevel 1 (
    echo ✅ Starting Python HTTP Server...
    echo 🌐 Your webpage will be available at: http://localhost:8080
    echo 📱 Access from other devices: http://[your-computer-ip]:8080
    echo.
    echo 💡 Instructions:
    echo    1. Keep this window open
    echo    2. Open browser and go to: http://localhost:8080
    echo    3. Click on index-dynamic.html
    echo    4. Press Ctrl+C to stop server
    echo.
    echo Starting server...
    python -m http.server 8080
    goto :end
)

REM Check for Node.js as fallback
node --version >nul 2>&1
if not errorlevel 1 (
    echo ✅ Starting Node.js HTTP Server...
    echo 🌐 Your webpage will be available at: http://localhost:8080
    echo.
    npx http-server . -p 8080 -o
    goto :end
)

echo ❌ Neither Python nor Node.js found!
echo.
echo Please install one of these:
echo 1. Python: https://python.org/downloads/
echo 2. Node.js: https://nodejs.org/
echo.
echo Alternative: Use VS Code Live Server extension
echo.

:end
pause