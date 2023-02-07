# 🫰 hytzen-helpers

[![npm version](https://badge.fury.io/js/hytzen-helpers.svg)](https://badge.fury.io/js/hytzen-helpers) [![Download Count](https://img.shields.io/npm/dm/hytzen-helpers.svg)](https://www.npmjs.com/package/hytzen-helpers) [![Bundle size](https://badgen.net/bundlephobia/minzip/hytzen-helpers)](https://bundlephobia.com/package/hytzen-helpers)

Helper functions for react projects.

## 🚀 Getting started

npm:

```
npm install hytzen-helpers
```

yarn:

```
yarn add hytzen-helpers
```

## 📚 Examples

#### money()

```
money(100, {
  locale: 'pt-BR',
  currency: 'BRL'
})

result: R$100,00
```

---

#### date()

```
date(new Date().toString(), {
  type: 'digit'
  withHour: true
  onlyHour: false
})

result: 01/01/2023 às 12:00
```

```
date(new Date().toString(), {
  onlyHour: true
})

result: 12:00
```

```
date(new Date().toString(), {
  type: 'digit'
})

result: 01/01/2023
```

```
date(new Date().toString(), {
  type: 'long'
})

result: 01, Janeiro de 2023
```

```
date(new Date().toString(), {
  type: 'long-short'
})

result: 01, jan/2023
```

---

#### numonly()

```
numonly('123.456.789-09')

result: 12345678909
```

---

#### randonfy()

```
randonfy([1,2,3,4,5])

result: [3,5,1,4,2]
```

---

#### generateArrayOfNumbers()

```
generateArrayOfNumbers(0, 4)

result: [1,2,3,4]
```

## ⭐ Contributing

Each PR should be specific and isolated to the issue you're trying to fix. Please do not stack features/chores/refactors/enhancements in one PR. Describe your feature/implementation in the PR. If you're unsure its useful or if it is a major change, please open an issue first and get feedback.

- Follow eslint provided
- Comment your code
- Write [clean](https://github.com/ryanmcdermott/clean-code-javascript) code

## 🤝 License

MIT

Feito com ❤️ Samara Carvalho 👋🏽 [Entre em contato!](https://www.linkedin.com/in/scarvalhos/)
