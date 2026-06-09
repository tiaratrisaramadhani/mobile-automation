# Mobile Automation Testing Framework

This project is a Mobile Automation Testing framework using Appium and WebdriverIO with TypeScript.

---

## Tech Stack

- Appium  
- WebdriverIO  
- TypeScript  
- Node.js  
- Mocha (Test Runner)
- Page Object Model (POM)
- Allure Report  

---

## Features

- Mobile automation testing using Appium
- WebdriverIO framework with TypeScript
- Page Object Model (POM) architecture
- Automated test execution
- Allure reporting integration
- Android native application testing

---

## Project Structure

```text
mobile-automation/
│
├── test/
│   ├── pageobjects/
│   └── specs/
├── ApiDemos-debug.apk
├── wdio.conf.ts
├── tsconfig.json
├── package.json
└── package-lock.json
```

---

## Prerequisites

Before running this project, ensure you have installed:

- Node.js
- Java JDK
- Android Studio
- Appium
- Android Emulator or Physical Device

---

## How to Run 

Install dependencies:

```bash
npm install
```

Start Appium server:

```bash
appium
```

Run test:

```bash
npm run test
```

---

## Test Coverage

- App Navigation Testing
- UI Element Interaction
- Input Field Validation
- Mobile Gesture Testing
- Android Native App Testing
- Page Object Model (POM) Implementation 

---

## Reporting

Generate and open Allure Report:

```bash
npx allure generate allure-results --clean
npx allure serve allure-results
```
---

## Purpose

This project demonstrates QA Automation skills including:

- Mobile UI automation using Appium and WebdriverIO
- Page Object Model (POM) implementation
- Test framework design with TypeScript and Mocha
- Automated test execution
- Test reporting with Allure

The objective of this project is to improve application quality through automated mobile testing.

---

## Application Under Test

- ApiDemos-debug.apk (Android sample application)


