@echo off
echo ===================================================
echo      BRAIN TUMOR DETECTION APP LAUNCHER
echo ===================================================
echo.
echo 1. Stopping any old server instances...
taskkill /F /IM python.exe /T >nul 2>&1

echo 2. Starting Server...
echo.
echo    PLEASE WAIT... The browser will open automatically.
echo.

start "" "http://localhost:8000"

cd /d "%~dp0"
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload

pause
