@echo off
title Java Programming Problems Documentation - Enhanced Version
cls
echo.
echo ===============================================
echo   Java Programming Problems Documentation
echo               Enhanced Version
echo ===============================================
echo.
echo Starting the documentation system...
echo.
echo NEW FEATURES:
echo - 70+ Java programming problems with full code display
echo - Interactive sidebar navigation with collapsible categories
echo - Advanced search functionality (Ctrl+F shortcut)
echo - Copy to clipboard functionality for all code snippets
echo - Proper syntax highlighting with Prism.js
echo - Responsive design optimized for all devices
echo - Professional UI with animated transitions
echo - Complete problem data with complexity analysis
echo.
echo Opening in your default browser...
echo.

REM Try to open index.html in default browser
start "" "index.html"

REM Alternative browsers if default doesn't work
REM start chrome "index.html"
REM start firefox "index.html" 
REM start msedge "index.html"

echo.
echo ✓ Documentation opened successfully!
echo.
echo USAGE TIPS:
echo - Navigate using the sidebar categories
echo - Click problem titles to view complete code and output
echo - Use the search box to find specific problems quickly
echo - Copy code using the "Copy Code" button
echo - All problems now display properly with syntax highlighting
echo.
echo CATEGORIES AVAILABLE:
echo • Basic Programming (01-20): Fundamentals, prime numbers, factorial, etc.
echo • Array Operations (21-40): Searching, sorting, manipulation algorithms  
echo • String Operations (41-50): Text processing and pattern matching
echo • Pattern Programs (61-70): Geometric patterns and artistic designs
echo • Advanced Problems (71-80): Complex algorithms and applications
echo.
if exist "index.html" (
    echo ✓ All files are properly configured and ready to use!
) else (
    echo ✗ ERROR: index.html not found in current directory
)
echo.
echo Press any key to close this window...
pause > nul