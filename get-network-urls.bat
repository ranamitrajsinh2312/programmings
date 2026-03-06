@echo off
echo.
echo ================================================
echo   📱 Share Your Java Documentation on Network
echo ================================================
echo.

echo 🔍 Finding your computer's IP addresses...
echo.

REM Get IP addresses
for /f "tokens=2 delims=:" %%i in ('ipconfig ^| findstr /i "IPv4"') do (
    for /f "tokens=1" %%j in ("%%i") do (
        echo 🌐 Network IP: http://%%j:8080/index-dynamic.html
    )
)

echo.
echo 📋 Instructions to share:
echo 1. Make sure your web server is running (python -m http.server 8080)
echo 2. Share any of the above URLs with people on your WiFi
echo 3. They can access your Java documentation from their devices
echo.
echo 💡 For external internet access, consider:
echo    - GitHub Pages (free hosting)
echo    - Netlify.com (drag & drop deployment)
echo    - Vercel.com (instant deployment)
echo.
pause