# Welcome to the Salas App

A simple React application displaying available meeting rooms. The application has one page -- a page with a floor view that lists the available rooms based on the floor selected. You can select a different floor from dropdown to view its available rooms

## Features

- React for building user interfaces
- Babel for transpiling modern JavaScript and JSX
- CSS support for styling

## Installation

1. **Clone the repository:**

   git clone https://github.com/martadelgado/salas
   cd salas

2. **Install dependencies:**

   npm install


## Development

For local development, run the following command to start the development server:
### `npm start`


## Configuration

- Environment Variables: You can configure environment variables using .env files or directly within Webpack's DefinePlugin.

- CSS and Assets: CSS files are handled using css-loader and style-loader. Assets like images can be added to the src directory and imported as needed.


## Architecture

```bash
.
├── src/
│   ├── components        # Common components used throughout app
│   ├── context           # Entry point for App Context
│   ├── pages             # Room page component
│   ├── views             # Floor view component
|   |── index.css         # Global styles
|   |── index.js          # Entry point for React application
│   ├── App.js            # Main application component
└── package.json          # Project metadata and dependencies
```

## Tech decisions

App Context for State Management:
- Centralized State: Provides a way to share state across the component tree without prop drilling.
- Simplicity: Easy to set up and manage for medium-sized applications.

Styled-Components for CSS:
- Dynamic Styling: Enables styling based on props and application state.
- Scoped Styles: Eliminates CSS conflicts by scoping styles to components.

