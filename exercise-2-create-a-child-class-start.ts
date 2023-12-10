/**
 * START: Follow the instructions below.
 */

class Currency {
    private name: string;
    private code: string;
    private symbol: string;

    constructor(name: string, code: string, symbol: string) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }

    public getName(): string {
        return this.name;
    }

    public describe(): void {
        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;

        console.log(description);
    }
}

// Alter this class to extend the `Currency` class.

class DetailedCurrency extends Currency {
    // Define a private field named `banknotes`.
    // Set the field type so it can be used to store an array of numbers.
    private banknotes: number[];

    // Add a `banknotes` parameter with the same type as the `banknotes` field.
    constructor(name: string, code: string, symbol: string, banknotes: number[]) {
        // Fix this call to the parent constructor.
        super(name, code, symbol);

        // Store the value of the `banknotes` parameter in the corresponding field.
        this.banknotes = banknotes;
    }

    // Change the visibility modifier on this method so it can be called
    // by code outside of this class.

    public describeBankNotes(): void {
        
        // Access the protected `name` field of the parent class using the public method.
        let parentName = this.getName();

        let description = `The ${parentName} currency uses the banknotes `;

        // Replace `null` with the value of the `banknotes` field.
        description += this.banknotes.join(", ");

        console.log(description);
    }
}

const euroCurrency = new DetailedCurrency("Euro", "EUR", "€", [500, 200, 100, 50, 20, 10, 5]);

euroCurrency.describe();

euroCurrency.describeBankNotes();

// ----

export { };
