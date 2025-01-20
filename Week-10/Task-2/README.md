# Notes App

A modern and user-friendly note-taking application. Built with React, this app allows you to organize your notes in colorful cards with a clean interface.

## 🚀 [Live Demo](https://extraordinary-ganache-73c453.netlify.app/)

![Notes App Screenshot](/api/placeholder/800/400)

## Features

- 📝 Quick note creation and editing
- 🎨 Customizable note colors
- 🔍 Real-time note search
- 💾 Automatic local storage
- 🌓 Dark/Light theme support
- 📱 Responsive design

## Technologies

- React
- Context API (State management)
- Local Storage (Data persistence)
- CSS Custom Properties
- Modern JavaScript (ES6+)

## Installation

To run this application locally:

```bash
# Clone the repository
git clone https://github.com/username/notes-app.git

# Navigate to project directory
cd notes-app

# Install dependencies
npm install

# Start the application
npm run dev
```

## Project Structure

```
notes-app/
├── src/
│   ├── components/         # Application components
│   │   ├── ColorPicker.jsx
│   │   ├── NoteCard.jsx
│   │   ├── NoteForm.jsx
│   │   ├── NoteList.jsx
│   │   ├── SearchBar.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/           # Context API files
│   │   └── NoteContext.jsx
│   ├── utils/             # Utility functions and constants
│   │   └── constants.js
│   ├── App.jsx            # Main application component
│   ├── App.css            # Main stylesheet
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
```

## Feature Details

### Creating Notes
- Enter your text
- Select a color
- Click "Add Note" button

### Editing Notes
- Click on a note
- Enter edit mode
- Save or cancel changes

### Searching Notes
- Use the search bar to filter notes
- Real-time search updates

### Theme Switching
- Use the theme toggle button in the bottom right corner
- Theme preference is persisted in the browser

## Core Functionality

### Note Management
- Create, edit, and delete notes
- Each note includes:
  - Text content
  - Color selection
  - Creation/modification date
- Automatic saving to local storage

### Search Functionality
- Instant search across all notes
- Case-insensitive search
- Searches through note content

### Theme System
- Light and dark theme support
- Smooth transitions between themes
- System-wide color scheme
- Persistent theme preference

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Commit Guidelines

We follow conventional commits specification:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for code style changes
- `refactor:` for code refactoring
- `test:` for adding or updating tests

## Contact

For any questions or support, please email ahmet.sulu1993@gmail.com

