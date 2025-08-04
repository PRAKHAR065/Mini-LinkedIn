@echo off
echo 🚀 Setting up Mini LinkedIn Community Platform...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

REM Backend setup
echo 📦 Setting up backend...
cd backend

REM Install dependencies
npm install

REM Create .env file if it doesn't exist
if not exist .env (
    echo 📝 Creating .env file...
    copy env.example .env
    echo ⚠️  Please update the .env file with your MongoDB connection string and JWT secret
)

echo ✅ Backend setup complete

REM Frontend setup
echo 📦 Setting up frontend...
cd ..\frontend

REM Install dependencies
npm install

echo ✅ Frontend setup complete

echo.
echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Update the .env file in the backend directory with your MongoDB connection string
echo 2. Start the backend server: cd backend ^&^& npm start
echo 3. Start the frontend: cd frontend ^&^& npm start
echo 4. Open http://localhost:3000 in your browser
echo.
echo Happy coding! 🚀
pause 