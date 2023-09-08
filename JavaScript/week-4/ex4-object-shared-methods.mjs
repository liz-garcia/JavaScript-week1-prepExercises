import eurosFormatter from './euroFormatter.mjs';

let dailyAllowance = 40;
let dayTotalWithdrawals = 0;

function resetDailyAllowance() {
  dayTotalWithdrawals = 0;
};

function setDailyAllowance(newAllowance) {
  dailyAllowance = newAllowance;
};

function deposit(amount) {
  this._cash += amount;
}

function withdraw(amount) {
  if (this._cash - amount < 0) {
    console.log(`Insufficient funds!`);
    return 0;
  }

  if (amount > dailyAllowance) {
    console.log(`Withdrawal amount exceeds the daily allowance amount.`);
    return 0;
  }

  if (dayTotalWithdrawals + amount > dailyAllowance) {
    console.log(`Total withdrawals today exceed the maximum daily allowance!`);
    return 0;
  }

  this._cash -= amount;
  return amount;
}

function transferInto(wallet, amount) {
  console.log(
    `Transferring ${eurosFormatter.format(amount)} from ${
      this._name
    } to ${wallet.getName()}`
  );
  const withdrawnAmount = this.withdraw(amount);
  wallet.deposit(withdrawnAmount);
}

function reportBalance() {
  console.log(
    `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
  );
}

function getName() {
  return this._name;
}

function createWallet(name, cash = 0) {
  return {
    _name: name,
    _cash: cash,
    deposit,
    withdraw,
    transferInto,
    reportBalance,
    getName,
    setDailyAllowance,
    resetDailyAllowance,
  };
}

function main() {
  const walletJack = createWallet('Jack', 100);
  const walletJoe = createWallet('Joe', 10);
  const walletJane = createWallet('Jane', 20);

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
