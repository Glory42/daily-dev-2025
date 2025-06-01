# JSON Formatter Web App

## Project Description

This project is a simple web application that allows users to easily format and beautify their JSON data.  
Users can paste or write JSON data into the textarea and click the "Format" button to see the pretty-printed version of their JSON. If the JSON is invalid, an explanatory error message is displayed.

---

## Features

- Displays JSON data in a readable, indented format.
- Alerts the user if the JSON input is invalid.
- User-friendly and clean interface.
- Works well on different screen sizes (not fully responsive).
- Simple and fast frontend application built with HTML, CSS, and JavaScript.

---

## Technologies

- HTML5  
- CSS3  
- Vanilla JavaScript

---

## Installation and Usage

1. Clone the repository or download the ZIP file.  
2. The project contains `index.html`, `style.css`, and `script.js` files.  
3. Open `index.html` in your web browser.  
4. Paste or type your JSON data into the textarea.  
5. Click the "Format" button.  
6. The formatted JSON will be displayed below.

---

## Usage Examples

### Valid JSON:

```json
{
  "name": "Görkem",
  "age": 25,
  "skills": ["JavaScript", "Node.js", "React"]
}
```

### Invalid JSON:

```json
{
  "name": "Görkem",
  "age": 25,
  "skills": ["JavaScript", "Node.js", "React"
}