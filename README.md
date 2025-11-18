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