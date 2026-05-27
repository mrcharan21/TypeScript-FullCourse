# Installation & Setup — TypeScript

## TL;DR:
We will install:
* Node.js
* npm
* TypeScript
* VS Code
* Create first TS project

## What We Need
| Tool | Purpose |
|---|---|
| Node.js | Runs JavaScript outside browser |
| npm | Package manager |
| TypeScript | Type checker/compiler |
| VS Code | Code editor |

---

## Step 1 — Install Node.js

TypeScript depends on Node.js.

**Download:**
[Node.js Official Website](https://nodejs.org/)

**Install:**
LTS version recommended

**Verify Installation:**
Open terminal:

Windows
```cmd
node -v
npm -v
```

Mac/Linux
```bash
node -v
npm -v
```

Example output:
```text
v22.x.x
10.x.x
```

### What Got Installed?

**Node.js**
Runs JavaScript.
Example:
```bash
node app.js
```

**npm**
Node Package Manager.
Used to:
* install libraries
* install TypeScript
* manage dependencies

---

## Step 2 — Install VS Code

**Download:**
[VS Code](https://code.visualstudio.com/)

**Recommended VS Code Extensions**
Install these:

| Extension | Purpose |
|---|---|
| TypeScript Hero | Better TS support |
| ESLint | Code quality |
| Prettier | Formatting |
| Error Lens | Better error display |

---

## Step 3 — Install TypeScript

Open terminal.

Install globally:
```bash
npm install -g typescript
```

**Verify Installation**
```bash
tsc -v
```

Example output:
```text
Version 5.x.x
```

**What is tsc?**
`tsc` means: **T**ype**S**cript **C**ompiler.
It converts: `.ts` → `.js`

---

## Step 4 — Create First Project

**Create Folder**
```bash
mkdir typescript-course
```
**Enter Folder**
```bash
cd typescript-course
```
**Open VS Code**
```bash
code .
```

---

## Step 5 — Initialize npm

Run:
```bash
npm init -y
```

Creates: `package.json`

**What is package.json?**
Stores:
* project info
* dependencies
* scripts

Example:
```json
{
  "name": "typescript-course",
  "version": "1.0.0"
}
```

---

## Step 6 — Install TypeScript Locally

Recommended for projects.
```bash
npm install typescript --save-dev
```

**Difference**
* **Global Install** (`npm install -g typescript`): Used system-wide.
* **Local Install** (`npm install typescript --save-dev`): Used inside project only. Best practice.

---

## Step 7 — Initialize TypeScript Config

Run:
```bash
npx tsc --init
```
Creates: `tsconfig.json`

**What is tsconfig.json?**
Controls TypeScript compiler behavior.

**Important Settings**
Open `tsconfig.json`. Minimal important config:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

**Meaning of Each Option**
| Option | Meaning |
|---|---|
| target | JS version output |
| module | import/export system |
| strict | strict type checking |
| outDir | compiled JS folder |
| rootDir | source TS folder |

---

## Step 8 — Create Folder Structure

```text
typescript-course/
│
├── src/
├── dist/
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## Step 9 — Create First TypeScript File

Create: `src/index.ts`

**Add Code**
```typescript
const message: string = "Hello TypeScript"

console.log(message)
```

---

## Step 10 — Compile TypeScript

Run:
```bash
npx tsc
```

Generated: `dist/index.js`

**What Happened?**
TypeScript:
```typescript
const message: string = "Hello TypeScript"
```
became JavaScript:
```javascript
const message = "Hello TypeScript";
```
Types removed.

---

## Step 11 — Run JavaScript

```bash
node dist/index.js
```

Output:
```text
Hello TypeScript
```

---

## Step 12 — Watch Mode

Automatically recompiles on changes.

```bash
npx tsc --watch
```
OR
```bash
npx tsc -w
```

---

## Step 13 — Add Useful Scripts

Open `package.json`. Add:
```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsc -w"
  }
}
```

**Now You Can Run:**
* **Build:** `npm run build`
* **Start:** `npm run start`
* **Watch Mode:** `npm run dev`

---

## Understanding the Full Flow

```text
Write TypeScript
       ↓
Compile using tsc
       ↓
Generate JavaScript
       ↓
Run using Node.js
```

**Important Concept**
Browser cannot understand:
```typescript
let age: number = 20
```
Browser only understands:
```javascript
let age = 20
```
That is why compilation is required.

---

## Common Beginner Mistakes

**1. Forgetting Compilation**
*Wrong:*
```bash
node index.ts
```
*Correct:*
```bash
tsc
node dist/index.js
```

**2. Editing dist Files**
* Never edit: `dist/`
* Only edit: `src/`

---

## Final Folder Structure

```text
typescript-course/
│
├── src/
│   └── index.ts
│
├── dist/
│   └── index.js
│
├── node_modules/
├── package.json
├── package-lock.json
└── tsconfig.json
```