const Account = require("./Account");
const fs = require("fs");

// . is generally used when dealing with static methods or properties

beforeEach(() => {
  try {
    fs.mkdirSync("accounts");
  } catch {
    // Ignore error if directory already exists
  }
});

afterEach(() => {
  // Clean up the accounts directory after each test
  fs.rmSync("accounts", { recursive: true, force: true });
});

describe(".create", () => {
  test("It create a new account and file", async () => {
    //Create an account
    const name = "Asad";
    const account = await Account.create(name);
    // Check the name is correct
    expect(account.name).toBe(name);
    // Check the balance
    expect(account.balance).toBe(0);
    // Check to ensure a file was created
    expect(fs.readFileSync(account.filePath).toString()).toBe("0");
  });
});

describe(".find", () => {
  test("It returns the account", async () => {
    const name = "Asad";
    const balance = 100;
    fs.writeFileSync(`accounts/${name}.txt`, balance.toString());
    const account = await Account.find(name);
    expect(account.name).toBe(name);
    expect(account.balance).toBe(balance);
  });
});

describe("When there is no existing account", () => {
  test("It returns undefined", async () => {
    const name = "Asad";
    const account = await Account.find(name);
    expect(account).toBeUndefined();
  });
});
