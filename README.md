# TypeScript-এর Interface এবং Type-এর পার্থক্য

TypeScript-এ আমরা interface এবং type ব্যবহার করি ডেটা কাঠামো বা অবজেক্টের টাইপ নির্ধারণের জন্য। যদিও উভয়ই একই উদ্দেশ্যে ব্যবহার করা যায়, তবুও কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে:

## ১. Declaration

=> Interface: নতুন প্রপার্টি বা মেথড অ্যাড করার জন্য পুনরায় ডিক্লেয়ার করা যায়।

=> Type: একবার ডিফাইন করলে নতুন প্রপার্টি অ্যাড করা যায় না।

```ts
interface Person {
  name: string;
}

interface Person {
  age: number; // allowed, merged
}

type User = {
  name: string;
};

// type User = { age: number } → Not allowed, redeclaration error

```

## ২. Extend বা Inheritance

=> Interface: অন্য interface-কে extends করে প্রসারিত করা যায়।

=> Type: অন্য type বা union/intersection ব্যবহার করে প্রসারিত করা যায়।
```ts
interface Employee extends Person {
  salary: number;
}

type Admin = User & { role: string }; // intersection type
```

## ৩. Use Case

=> Interface: সাধারণত অবজেক্টের গঠন নির্ধারণের জন্য ব্যবহৃত হয়।

=> Type: জটিল টাইপ, union, intersection, primitives ইত্যাদির জন্য বেশি ব্যবহার হয়।


# TypeScript-এ Enums ব্যবহার

Enum হল একটি ডেটা স্ট্রাকচার যা কনস্ট্যান্ট ভ্যালু গ্রুপ করার জন্য ব্যবহার করা হয়। এটি কোডকে আরও readable এবং maintainable করে।

## ১. Numeric Enum
```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}

const move: Direction = Direction.Up;
console.log(move); // 0


এখানে Up = 0, Down = 1 ইত্যাদি স্বয়ংক্রিয়ভাবে অ্যাসাইন করা হয়েছে।

২. String Enum
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}

const userStatus: Status = Status.Active;
console.log(userStatus); // "ACTIVE"
```

### String enum ব্যবহার করলে readable string ভ্যালু কোডে দেখা যায়।