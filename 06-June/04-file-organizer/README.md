# 📁 File Organizer

## 🚀 Project Description

**File Organizer** is a lightweight command-line utility that organizes files in a given folder into subfolders based on their file extensions.  
It has two versions:

- **Vanilla** version: Pure Node.js without any external dependencies.
- **Advanced** version: Adds user-friendly CLI options and colored output using `commander` and `chalk`.

This tool helps keep directories tidy by categorizing files into folders such as `pdf/`, `jpg/`, `mp4/`, etc.

---

## ✨ Features

### ✅ Common Features
- Automatically scans and organizes files by extension.
- Creates subfolders only when necessary.
- Skips already organized files or folders.

### 🟤 Vanilla Version
- Built using only Node.js core modules (`fs`, `path`).
- Run directly without installing any dependencies.

### 🔵 Advanced Version
- Uses `commander` for command-line argument parsing.
- Uses `chalk` for colored terminal output.
- Optional `--verbose` flag for detailed logs.

---

## 🛠️ Technologies Used

- Node.js (v16+ recommended)
- For advanced version:
  - [commander](https://www.npmjs.com/package/commander)
  - [chalk](https://www.npmjs.com/package/chalk)

---

## 📦 Installation & Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/daily_dev_2025.git
   cd daily_dev_2025/06-June/04-file-organizer

2. **Directory Structure**:
    ````
    04-file-organizer/
    ├── vanilla/
    │   ├── organizer.js
    │   └── example_files/
    └── advanced/
        ├── organizer-advanced.js
        ├── package.json
        └── example_files/
    ````
3. **Using Vanilla Version**:
    * No dependencies needed.
    ```bash
    cd vanilla
    node organizer.js ./example_files

4. **Using Advanced Version**:
    * Install dependencies:
    ````
    cd advanced
    npm install
    ````

    * Run with optional --verbose:
    ````
    node organizer-advanced.js ./example_files --verbose
    ````

## ⚠️ Notes
* Only files (not directories) are organized.

* Existing files with the same name in destination folders will be overwritten.

* Avoid running on system or important directories.

