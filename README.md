**Js Testing using jest librarry**


**Testing in atm-cli Project(Unit and Integration testing)**

**✅ Unit Testing**
📄 File: Account.unit.test.js
Unit tests isolate and test individual functions in your app, mocking dependencies like the filesystem.

🧠 What’s being tested?
Behavior of the deposit() method:

Adds money to the account

Writes the updated balance to file

**💡 Mocks:**
File reads/writes are mocked to avoid real disk usage.

This makes the tests fast and focused on logic only.


**🔁 Integration Testing**

📄 File: Account.int.test.js
Integration tests check how multiple parts of the system work together, including real filesystem interaction.

🧠 What’s being tested?
The Account.create() method:

Creates a new account object

Initializes the file with balance 0

Ensures the file is created and contains correct data


📁 Real Filesystem
Integration tests use the actual filesystem (e.g., accounts/asad.txt) and clean it up after each test using:

