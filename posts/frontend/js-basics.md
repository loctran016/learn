---
title: 'JavaScript Basics'
tag: 'JavaScript'
category: 'Front End'
---

## Data types

```js
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {
    firstName:"John",
    lastName:"Doe"
};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
```

## let, const

```js
let age = 30;
age = 31;
// Works - Data can be changed

let now, birthYear;
now = 2025;
birthYear = 2001;
// Works
```

```js
const birthYear = 2005;
birthYear = 2001;
// Error - Data can't be changed

const name;
// Error - Should use
```

It's good practice to avoid variable mutation so you should use 'const', unless the variable is supposed to be changed later

You should always declare variables, avoid doing this:

```js
lastName = 'Tran';
console.log(lastName)
// Still works, but should be avoided
```

## Basic operators

Transform, combine, ... work with values

### Math

```js
const now = 2025;
const ageUser = now - 1994;
// 31

console.log(ageUser * 2, ageUser / 10);

console.log(2 ** 3);
// 2^3 = 8
```

`+` can be used to concat variables:

```js
let x = "Volvo" + 16 + 4;
// Volvo164
x = 16 + 4 + "Volvo";
// 20Volvo
```

### Assignment

```js
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 2; // x = x*2 = 50

x++; // x = x + 1
x--; // x = x - 1
```

### Comparision

Produce boolean

```js
const birthYear = 2006;
const isAdults = 2025  - birthYear >= 18 // true
console.log(2025  - birthYear > 2025  - 2020) // true
// Operators: >,<,>=,<=
```

### Equality

### Precedence

Check [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

## Strings & Template Literals

```js
const name = 'Loc'
const university = 'UMP'

console.log("I'm" + " " + name + ", who study at" + " " + university);
console.log(`I'm ${name}, who study at ${university}`);
// Same

console.log('String with \n\
multiple \n\
lines')
console.log(`String with
multiple
lines`)
// Sames, you should favor Template Literals
```

## if - else Statements

```js
let century;
const birthYear = 2001;
if (birthYear <=2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
```

## Type Conversion & Coercion

```js
// type conversion - manual conversion
const inputYear = '2000';
console.log(inputYear + 18); // 200018 - Doesn't work as expected
console.log(Number(inputYear) + 18); // 2018

console.log(Number('Loc')); // NaN - not a number

console.log(typeof NaN); // still type: number

console.log(String(23))
```

```js
// type coercion- automatic conversion
console.log("I'm " + 10 + "years old");
console.log("I'm " + '10' + "years old");
//  The same

console.log('23' - '10' + 5); // 18
console.log('23' + '10' + 5); // 23105

console.log('10' / '2'); // 5

let n = '1' + 1;
n = n - 1; // 10

console.log(2+3+4+'5'); // 95
```

## Truthy & Falsy values

5 falsy values: 0, '', undefined, null, NaN -> convert to false when convert to boolean

```js
console.log(Boolean(0), Boolean(undefined));
// false
console.log(Boolean('loc'), Boolean({}));
// true
```

```js
// Prefer type coercion
const money = 0;
if (money) {
console.log('Don\'t spend it all')
} else {
    console.log('You should get a job!')
}
```

```js
let height;
if (height) {
    console.log('Height is defined')
} else {
    console.log('You should define height')
}
// Going to bug when you set height = 0;
```

## Miscs

```js
'use strict'
```
