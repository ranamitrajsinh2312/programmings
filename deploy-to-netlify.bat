@echo off
echo.
echo ================================================
echo   🚀 Prepare for Netlify Deployment
echo ================================================
echo.

echo 📦 Creating deployment package...
echo.

REM Create a deployment folder
if exist "netlify-deploy" rmdir /s /q netlify-deploy
mkdir netlify-deploy

REM Copy essential files for web deployment
echo Copying files for Netlify deployment...
copy "index.html" "netlify-deploy\" >nul
copy "index-dynamic.html" "netlify-deploy\" >nul
copy "problems-data.js" "netlify-deploy\" >nul
copy "script-complete.js" "netlify-deploy\" >nul
copy "styles-simple.css" "netlify-deploy\" >nul

REM Copy README for documentation
copy "README-Dynamic.md" "netlify-deploy\" >nul

echo.
echo ✅ Netlify deployment package ready!
echo 📁 Folder: netlify-deploy
echo.
echo 🌐 Next steps:
echo 1. Go to netlify.com
echo 2. Sign up/login (free)
echo 3. Drag & drop the 'netlify-deploy' folder
echo 4. Get instant live URL!
echo.
echo 💡 Your site will be live at: https://[random-name].netlify.app
echo.
echo Opening netlify-deploy folder...
start netlify-deploy
echo.
echo Opening Netlify.com in browser...
start https://netlify.com
echo.
pause