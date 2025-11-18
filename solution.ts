type FormatvalueType = string | number | boolean
const formatValue = (value: FormatvalueType): FormatvalueType => {

    if (typeof value === "string") return value.toUpperCase();
    if (typeof value === "number") return value * 10;
    if (typeof value === "boolean") return !value;

    return value;
}


const getLength = (input: string | any[]): number => {
    if (typeof input === "string") {
        return input.length;
    }
    if (Array.isArray(input)) {
        return input.length;
    }
    return input
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}';`;
    }
}

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);
person1.getDetails()
person2.getDetails()


type FilterByRatingType = { title: string, rating: number };

const filterByRating = (books: FilterByRatingType[]): FilterByRatingType[] => {
    return books.filter(book => book.rating >= 4);

}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
filterByRating(books)






interface activeUsers { id: number; name: string; email: string; isActive: boolean; }
const filterActiveUsers = (users: activeUsers[]): activeUsers[] => {
    return users.filter((user) => user.isActive === true);
};
const users = [
    { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
    { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
    { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];
filterActiveUsers(users)




interface Book { title: string; author: string; publishedYear: number; isAvailable: boolean; }
const printBookDetails = (book: Book): string => {
    const availability = book.isAvailable ? "Yes" : "No";
    const bookDetails = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
    return bookDetails;
};

const myBook: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    isAvailable: true,
};
printBookDetails(myBook)




type GetUniqueValues = number | string;

const getUniqueValues = (
    array1: GetUniqueValues[],
    array2: GetUniqueValues[]
): GetUniqueValues[] => {
    const result: GetUniqueValues[] = [];

    const isInArray = (arr: GetUniqueValues[], value: GetUniqueValues): boolean => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) return true;
        }
        return false;
    };

    const addUniqueItems = (arr: GetUniqueValues[]) => {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (!isInArray(result, item)) {
                result.push(item);
            }
        }
    };
    addUniqueItems(array1);
    addUniqueItems(array2);

    return result;
};


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
getUniqueValues(array1, array2)




type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) {
        return 0;
    }

    const totalProductMap = products.map((item) => {
        const totalPrice = item.price * item.quantity;
        if (!item.discount) {
            return totalPrice;
        } else {
            const discountPercentage = totalPrice * (item.discount / 100);
            return totalPrice - discountPercentage;
        }
    });

    const finalPrice = totalProductMap.reduce(
        (prevValue, currentValue) => prevValue + currentValue
    );

    return finalPrice;
};

const products = [
    { name: "Pen", price: 10, quantity: 2 },
    { name: "Notebook", price: 25, quantity: 3, discount: 10 },
    { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

calculateTotalPrice(products)





