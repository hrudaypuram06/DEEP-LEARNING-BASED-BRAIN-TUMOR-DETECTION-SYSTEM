@echo off
echo ===================================================
echo      BRAIN TUMOR DETECTION APP LAUNCHER
echo ===================================================
echo.
echo 1. Stopping any old server instances...
taskkill /F /IM python.exe /T >nul 2>&1

echo 2. Installing/Verifying Dependencies...
pip install fastapi uvicorn python-multipart >nul 2>&1

echo 3. Starting Server...
echo.
echo    PLEASE WAIT... The server is starting.
echo    The browser will open automatically in 5 seconds.
echo.

:: Launch browser after 5 seconds in a separate minimized window
start "" /min cmd /c "timeout /t 5 >nul & start http://localhost:8000"

cd /d "%~dp0"
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload

echo.
echo SERVER CRASHED OR STOPPED.
pause
