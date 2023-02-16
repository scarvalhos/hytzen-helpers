# 📌 hytzen-helpers

[![npm version](https://badge.fury.io/js/hytzen-helpers.svg)](https://badge.fury.io/js/hytzen-helpers) [![Download Count](https://img.shields.io/npm/dm/hytzen-helpers.svg)](https://www.npmjs.com/package/hytzen-helpers) [![Bundle size](https://badgen.net/bundlephobia/minzip/hytzen-helpers)](https://bundlephobia.com/package/hytzen-helpers)

Helper functions for react projects.

## 🚀 Getting started

npm:

```
npm install hytzen-helpers
```

yarn:

```js
yarn add hytzen-helpers
```

## 📃 Documentation

##### Helpers

- `money`: Format a value to a currency shape.
- `percent`: Format a value to a percentage shape.
- `date`: Format a date string to specific shape.
- `isValidateEmail`: Check if the input is valid email.
- `isValidateCPF`: Check if the input is valid CPF.
- `numonly`: Returns numeric characters only.
- `numtostr`: Transform a number to a string.
- `strtonum`: Transform a string to a number.
- `randonfy`: Randomly change the order of an array.
- `generateArrayOfNumbers`: Generate an array from x to y.
- `generateArrayWithXPositions`: Generate an array with x positions.
- `generateMongoObjectId`: Generate a random mongo object ID.
- `getFirstLetters`: Return the two first letters of a string.
- `getFirstName`: Return the first name of a string.
- `ctc`: concat tailwind classNames.
- `makePrismaFilter`: Generate a string filter for prisma queries.
- `px2num`
- `convertPXToREM`
- `convertPXToVH`

##### Hooks

- `useBreakpoint`
- `useSkipFirstRender`
- `useLocalStorage`
- `useToggle`
- `useFetch`
- `useKeyPress`
- `useDebounce`
- `useOnScreen`

## 💻 Examples

#### money()

```js
money(100)

// result: R$100,00

money(100, {
  locale: 'en-US',
  currency: 'USD',
})

// result: $100.00
```

#### percent()

```js
percent(100)

// result: 100%

percent(0.2525, {
  locale: 'pt-BR',
  maximumFractionDigits: 2,
})

// result: 0.25%
```

#### date()

```js
date(new Date().toString())

// result: 01/01/2023

date(new Date().toString(), {
  locale: 'pt-BR',
  dateStyle: 'short' // 'full' | 'long' | 'medium' | 'short'
  withHour: true
  onlyHour: false
})

// result: 01/01/2023 às 12:00
```

#### isValidateEmail()

```js
isValidateEmail('johndoe@mail.com')

// result: true

isValidateEmail('johndoe')

// result: false
```

#### isValidateCPF()

```js
isValidateCPF('123.456.789-00')

// result: false
```

#### numonly()

```js
numonly('123.456.789-09')

// result: 12345678909
```

#### numtostr()

```js
numtostr(123)

// result: '123'
```

#### strtonum()

```js
strtonum('123')

// result: 123
```

#### randonfy()

```js
randonfy([1, 2, 3, 4, 5])

// result: [3, 5, 1, 4, 2]
```

#### generateArrayOfNumbers()

```js
generateArrayOfNumbers(1, 4)

// result: [1, 2, 3, 4]
```

#### generateArrayWithXPositions()

```js
generateArrayOfNumbers(4)

// result: [0, 1, 2, 3]
```

#### generateMongoObjectId()

```js
generateMongoObjectId()

// result: 63e2ab7da20f7c26aaab97e9
```

#### getFirstLetters()

```js
getFirstLetters('John Doe')

// result: JD

getFirstLetters('John')

// result: JO
```

#### getFirstName()

```js
getFirstName('John Doe')

// result: John
```

#### ctc()

```xml
<div className={c('w-full', 'bg-black')} />
```

#### makePrismaFilter()

```js
const filterString = JSON.stringify({
  ...makePrismaFilter('johndoe', {
    OR: ['username'],
  }),
})
```

#### px2num()

```js
px2num('16px')

// result: 16
```

#### convertPXToREM()

```js
convertPXToREM('16px')

// result: 1rem
```

#### convertPXToVH()

```js
convertPXToVH('16px')

// result: 1.62vh
```

## ⭐ Contributing

Each PR should be specific and isolated to the issue you're trying to fix. Please do not stack features/chores/refactors/enhancements in one PR. Describe your feature/implementation in the PR. If you're unsure its useful or if it is a major change, please open an issue first and get feedback.

- Comment your code
- Write [clean](https://github.com/ryanmcdermott/clean-code-javascript) code

## 🤝 License

MIT

Made with ❤️ by Samara Carvalho

👋🏽 [Entre em contato!](https://www.linkedin.com/in/samcarvalhos/)
