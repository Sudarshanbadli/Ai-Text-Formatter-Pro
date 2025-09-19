@echo off
echo Starting local server...
echo.
echo If you get an error, please install Python from https://www.python.org/downloads/
echo.
echo Once Python is installed, this script will start a local server at:
echo http://localhost:8000
echo.
echo Press any key to continue...
pause >nul
python -m http.server 8000
pause