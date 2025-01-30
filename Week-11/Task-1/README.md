# 🧠 General Knowledge Quiz App

## Overview
A multilingual React-based quiz application featuring 10 random trivia questions with dynamic timing and localization support.

## 🚀 [Live Demo](https://starlit-gnome-ba9ebd.netlify.app/)

## Features
- 10-question quiz with randomized order
- Multilingual support (Turkish and English)
- 30-second timer per question
- 4-second delay before options appear
- Detailed results and answer review
- Responsive design

## Tech Stack
- React
- Context API
- Custom Hooks
- CSS Variables
- Localization

## Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Steps
1. Clone the repository
```bash
git clone https://github.com/AhmetSulu/QuizApplication
cd Quiz-Application
```

2. Install dependencies
```bash
npm install
```

3. Run the application
```bash
npm run dev
```

## Project Structure
- `src/components/`: Reusable React components
- `src/Context/`: React context providers
- `src/hooks/`: Custom React hooks
- `src/locales/`: Internationalization JSON files
- `src/Utils/`: Utility functions and constants

## Quiz Mechanics
- Random question selection
- 30 seconds per question
- Options appear after 4-second countdown
- No going back to previous questions
- Immediate feedback at the end

## Localization
Currently supports:
- 🇹🇷 Turkish
- 🇬🇧 English

## Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## Contact
For any questions or support, please email ahmet.sulu1993@gmail.com
