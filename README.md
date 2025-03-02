# Flarum Better Code Block

> **⚠️ WORK IN PROGRESS**: This extension is currently under development and not fully functional. There are known issues with initialization that are being addressed.

A Flarum extension that adds a dedicated button for inserting code blocks with triple backticks in the editor.

## Current Status

This extension is currently experiencing initialization errors:
```
index.js:19 Uncaught TypeError: Cannot read properties of undefined (reading 'initializers')
    at index.js:19:23
```

We're actively working on resolving these issues.

## Features

- Adds a "Code Block (Triple Backticks)" button to the editor toolbar
- Inserts triple backticks around selected text
- Positions the cursor inside the code block for immediate typing
- Works with the standard Flarum editor

## Installation

```bash
composer require fakethinkpad85/flarum-better-codeblock
```

## Usage

1. Install the extension
2. In the Flarum editor, select text you want to convert to a code block (optional)
3. Click the "Code Block (Triple Backticks)" button in the toolbar
4. The text will be wrapped in triple backticks

## Development

### Prerequisites

- Node.js and npm

### Setup

```bash
cd js
npm install
```

### Building

```bash
cd js
npm run build
```

## License

MIT 