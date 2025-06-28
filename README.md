**Js Testing using jest librarry(Unit&Integration) and Cypress(E2E)**


**1: Testing in atm-cli Project(Unit and Integration testing)**

**✅ Unit Testing**
**📄 File: Account.unit.test.js**
Unit tests isolate and test individual functions in your app, mocking dependencies like the filesystem.

🧠 What’s being tested?
Behavior of the deposit() method:

Adds money to the account

Writes the updated balance to file

**💡 Mocks:**
File reads/writes are mocked to avoid real disk usage.

This makes the tests fast and focused on logic only.


**🔁 Integration Testing**

**📄 File: Account.int.test.js**
Integration tests check how multiple parts of the system work together, including real filesystem interaction.

🧠 What’s being tested?
The Account.create() method:

Creates a new account object

Initializes the file with balance 0

Ensures the file is created and contains correct data


📁 Real Filesystem
Integration tests use the actual filesystem (e.g., accounts/asad.txt) and clean it up after each test using:


**2: Testing in calculator Project(E2E testing)**

**📄 File: calculator.cy.js**
E2E (End-to-End) tests simulate real user behavior in the browser using Cypress, ensuring the entire app works as expected from the user's point of view.

**🧠 What’s being tested?**
**✅ Basic Calculation Flow**
User enters numbers and operators (e.g., 4.1 + 6)

Presses = and sees the correct result (10.1)

Checks that operation history is cleared after evaluation

**✅ All Clear**
User presses AC

All fields reset:
primaryOperand → 0, secondaryOperand → "", operation → ""

**✅ Delete**
User enters digits (e.g., 456)

Presses DEL and the last digit is removed (456 → 45)

**✅ Divide by Zero**
User enters a number (e.g., 8)

Presses ÷, then 0, then =
The calculator handles the operation safely
(shows "Infinity")

