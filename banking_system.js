class BankAccount {
    constructor() {
        this.balance = 0;
    }

    async operate(action, promptMessage) {
        let amount;
        do {
            amount = parseFloat(prompt(promptMessage));
            if (amount === null) {
                return null;
            }
            try {
                const result = await action(amount);
                alert(result);
            } catch (error) {
                alert(error);
            }
        } while (isNaN(amount) || amount <= 0);
    }

    async deposit(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isNaN(amount) || amount <= 0) {
                    reject("Jumlah yang dimasukkan harus berupa angka positif dan lebih besar dari nol.");
                } else {
                    this.balance += amount;
                    resolve(`Saldo berhasil ditambahkan. Saldo sekarang: ${this.balance}`);
                }
            }, 2000);
        });
    }

    async withdraw(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isNaN(amount) || amount <= 0 || amount > this.balance) {
                    reject("Jumlah yang dimasukkan harus berupa angka positif dan tidak lebih besar dari saldo.");
                } else {
                    this.balance -= amount;
                    resolve(`Saldo berhasil dikurangi. Saldo sekarang: ${this.balance}`);
                }
            }, 2000);
        });
    }
}

class InteractiveBankAccount extends BankAccount {
    constructor() {
        super();
    }

    async deposit(amount) {
        return super.deposit(amount);
    }

    async withdraw(amount) {
        return super.withdraw(amount);
    }
}

async function main() {
    const myAccount = new InteractiveBankAccount();

    // Input deposit dari pengguna
    await myAccount.operate(amount => myAccount.deposit(amount), "Masukkan jumlah uang untuk deposit:");

    // Input withdraw dari pengguna
    await myAccount.operate(amount => myAccount.withdraw(amount), "Masukkan jumlah uang untuk withdraw:");
}

// Panggil fungsi main
main();