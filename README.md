# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  Unhandled promise rejections can lead to unexpected application behavior and crashes. This example shows how to reproduce the error and how to fix it using proper error handling.

## Setup

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to run the buggy code.  Observe the unhandled promise rejection error.
5. Run `node bugSolution.js` to observe the fixed code and how the error is handled gracefully.

## Reproducing the Error

The `bug.js` file contains code that simulates an asynchronous operation that might reject a promise without proper handling.  When you run it, you'll see an unhandled promise rejection warning in your console.

## Solution

The `bugSolution.js` file demonstrates how to properly handle promise rejections using `.catch()`.  By adding a `.catch()` block, you gracefully handle potential errors, preventing unhandled rejections.