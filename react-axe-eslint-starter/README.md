# React Axe ESLint Starter

This project is a starter template for a React application that integrates ESLint for code quality and axe-core for accessibility testing. It is built with TypeScript and includes best practices for accessibility.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **axe-core**: An accessibility testing engine for automated checks.
- **Jest**: A testing framework for running unit tests.

## Project Structure

```
react-axe-eslint-starter
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── index.tsx          # Entry point of the application
│   ├── App.tsx            # Main App component
│   ├── App.test.tsx       # Tests for the App component
│   ├── setupTests.ts       # Testing environment setup
│   ├── axe-setup.ts       # axe-core setup for accessibility testing
│   ├── components
│   │   └── AccessibleButton.tsx  # Accessible button component
│   ├── styles
│   │   └── index.css      # CSS styles for the application
│   └── types
│       └── index.d.ts     # Type definitions
├── .eslintrc.js           # ESLint configuration
├── .eslintignore          # Files to ignore for ESLint
├── .gitignore             # Files to ignore for Git
├── package.json           # npm configuration
├── tsconfig.json          # TypeScript configuration
├── jest.config.js         # Jest configuration
├── .prettierrc            # Prettier configuration
├── .github
│   └── workflows
│       └── ci.yml         # GitHub Actions CI workflow
└── README.md              # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd react-axe-eslint-starter
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. **Run tests**:
   ```bash
   npm test
   ```

5. **Run ESLint**:
   ```bash
   npm run lint
   ```

## Accessibility Testing

This project includes axe-core for accessibility testing. You can run accessibility checks in your tests by importing the `axe-setup.ts` file and using the axe methods.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.