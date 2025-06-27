const FileSystem = require("./FileSystem");
const Account = require("./Account");

beforeEach(() => {
  jest.restoreAllMocks();
});

describe("#deposit", () => {
  test("It adds money to the account", async () => {
    // 1: Create an account with a name and initial balance
    const startingBalance = 5;
    const amount = 100;
    const account = await createAccount("asad", startingBalance);
    const spy = jest
      .spyOn(FileSystem, "write")
      .mockReturnValue(Promise.resolve());
    // 2: Call the deposit method
    await account.deposit(amount);
    // 3: Check the balance of the account
    expect(account.balance).toBe(amount + startingBalance);

    expect(spy).toHaveBeenCalledWith(
      account.filePath,
      amount + startingBalance
    );
    // spy.mockRestore();
  });
});

describe("#withdraw", () => {
  test("It removes money from the account", async () => {
    const startingBalance = 10;
    const amount = 5;
    const account = await createAccount("asad", startingBalance);
    const spy = jest
      .spyOn(FileSystem, "write")
      .mockReturnValue(Promise.resolve());
    await account.withdraw(amount);
    expect(account.balance).toBe(startingBalance - amount);
    expect(spy).toHaveBeenCalledWith(
      account.filePath,
      startingBalance - amount
    );
  });
});

describe("#With not enough money in the account", () => {
  test("It should throw an error", async () => {
    const startingBalance = 10;
    const amount = 15;
    const account = await createAccount("asad", startingBalance);
    const spy = jest.spyOn(FileSystem, "write");

    await expect(account.withdraw(amount)).rejects.toThrow();
    expect(account.balance).toBe(startingBalance);
    expect(spy).not.toHaveBeenCalled();
  });
});

async function createAccount(name, balance) {
  const spy = jest
    .spyOn(FileSystem, "read")
    .mockReturnValueOnce(Promise.resolve(balance));
  const account = await Account.find(name);

  spy.mockRestore();
  return account;
}
