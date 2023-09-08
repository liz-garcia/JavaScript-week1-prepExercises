import eurosFormatter from './euroFormatter.mjs';

function createWallet(name, cash = 0) {
  return {
    _name: name,
    _cash: cash,
    _dailyAllowance: 40,
    _dayTotalWithdrawals: 0,

    resetDailyAllowance: function () {
      this._dayTotalWithdrawals = 0;
    },

    setDailyAllowance: function (newAllowance) {
      this._dailyAllowance = newAllowance;
    },

    deposit: function (amount) {
      this._cash += amount;
    },

    withdraw: function (amount) {
    if (this._cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

    if (amount > this._dailyAllowance) {
      console.log(`Withdrawal amount exceeds the daily allowance amount.`);
      return 0;
    }

    if (this._dayTotalWithdrawals + amount > this._dailyAllowance) {
      console.log(`Total withdrawals today exceed the maximum daily allowance!`);
      return 0;
    }

      this._cash -= amount;
      return amount;
    },

    transferInto: function (wallet, amount) {
      console.log(
        `Transferring ${eurosFormatter.format(amount)} from ${
          this._name
        } to ${wallet.getName()}`
      );
      const withdrawnAmount = this.withdraw(amount);
      wallet.deposit(withdrawnAmount);
    },

    reportBalance: function () {
      console.log(
        `Name: ${this._name}, balance: ${eurosFormatter.format(this._cash)}`
      );
    },

    getName: function () {
      return this._name;
    },
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
