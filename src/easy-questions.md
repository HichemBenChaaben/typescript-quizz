###### 1. What's the type

```typescript
type Today = Date & undefined
const today: Today = new Date().toString()
```

- A: `Date`
- B: `undefined`
- C: `string`
- D: `Type 'string' is not assignable to type 'never'`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

Since Type union would never resolve into a valid type, Typescript would consider
`Today` to be typed as a `never` type, this would raise a type error

</p>
</details>

---

###### 2. What will the following code log?

```typescript
const x: number | never = 42
console.log(x)
```

- A: `42`
- B: `undefined`
- C: `never`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

Since never is a bottom type, it will be ignored in the union type, so x effectively has the type number. The value 42 will be logged.

</p>
</details>

---

###### 3. What is the output of the following code?

```typescript
const foo = (x?: string) => x ?? 'default'
console.log(foo(undefined))
```

- A: `undefined`
- B: `default`
- C: `null`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The ?? operator returns the right-hand operand when the left-hand operand is null or undefined. Since x is undefined, it evaluates to "default".

</p>
</details>
---

###### 4. What's the type of keyof any?

```typescript
type T = keyof any
```

- A: `string | number | symbol`
- B: `any`
- C: `unknown`
- D: `never`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The keyof any type represents the set of keys that can be used in any object, which are string, number, and symbol.

</p>
</details>
---

###### 5. What does this code output?

```typescript
const arr = [1, 2, 3] as const
const value = arr[3]
```

- A: `undefined`
- B: `Compile-time error`
- C: `3`
- D: `Index signature error`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Since arr is declared as a tuple with as const, trying to access an out-of-bounds index (like arr[3]) results in a compile-time error.

</p>
</details>
---

###### 6. What the output?

```typescript
type T = { readonly a: number }
const obj: T = { a: 10 }
obj.a = 20
```

- A: `20`
- B: `Compile-time error`
- C: `10`
- D: `Runtime error`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The readonly modifier on the property a prevents it from being reassigned. Trying to assign obj.a = 20 will result in a compile-time error.

</p>
</details>
---

###### 7. What the type of `typeof null`?

```typescript
const t = typeof null
```

- A: `null`
- B: `object`
- C: `undefined`
- D: `string`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

In JavaScript (and by extension, TypeScript), the typeof null is a well-known bug and returns 'object'.

</p>
</details>
---

###### 8. What's the type of `void` in TypeScript?

```typescript
type T = void
```

- A: `undefined`
- B: `null`
- C: `never`
- D: `no type`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

In TypeScript, void represents the absence of any value, but in practice, it is equivalent to undefined when used in function return types.

</p>
</details>
---

###### 9. What will the following code output?

```typescript
let x: string = '10'
let y: number = +x
console.log(y)
```

- A: `10`
- B: `NaN`
- C: `Compile-time error`
- D: `"10"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The unary + operator is used to convert a string to a number. If the string is a valid number ('10'), it will be converted to 10.

</p>
</details>
---

###### 10. What will this function return?

```typescript
function test(): never {
  throw new Error('Error!')
}
```

- A: `Error`
- B: `undefined`
- C: `never`
- D: `null`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

A function that always throws an error (or never returns) has the return type never, which represents unreachable code.

</p>
</details>
---

###### 11. What's the result of the following code?

```typescript
let a = 10 as const
a = 20
```

- A: `20`
- B: `Compile-time error`
- C: `undefined`
- D: `10`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Using as const makes a a constant with the value 10. Attempting to reassign a will result in a compile-time error.

</p>
</details>
---

###### 12. What will this code output?

```typescript
let x: unknown = 'Hello'
let y: string = x
console.log(y)
```

- A: `Hello`
- B: `undefined`
- C: `Compile-time error`
- D: `null`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The `unknown` type cannot be assigned directly to a string. This results in a compile-time error unless a type assertion or check is used.

</p>
</details>
---

###### 13. What's the result of the following?

```typescript
type A = { name: string } | { age: number }
const a: A = { name: 'Alice', age: 30 }
```

- A: `{name: 'Alice', age: 30}`
- B: `Compile-time error`
- C: `null`
- D: `{}`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The type `A` is a union type, meaning it can either have a name property or an `age` property, but not both at the same time. This results in a compile-time error.

</p>
</details>
---

###### 14. What's the output of this code?

```typescript
const foo = () => ({ a: 1, b: 2 }) as const
foo().a = 10
```

- A: `10`
- B: `Compile-time error`
- C: `1`
- D: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The `as` const modifier makes the return object immutable. Attempting to reassign any property results in a compile-time error.

</p>
</details>
---

###### 15. What will this function output?

```typescript
function test<T extends number>(x: T): T {
  return x + 1
}
```

- A: `T`
- B: `Compile-time error`
- C: `x + 1`
- D: `T + 1`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Generics with `extends number` cannot automatically perform arithmetic. This results in a compile-time error because TypeScript cannot infer that T is a literal number.

</p>
</details>
---

###### 16. What does this code output?

```typescript
let num: 10 | 20 = 10
num = 30
```

- A: `10`
- B: `30`
- C: `undefined`
- D: `Compile-time error`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

The type `10 | 20` restricts num to be either 10 or 20. Assigning 30 will result in a compile-time error.

</p>
</details>
---

###### 17. What does this code output?

```typescript
const arr = [1, 2, 3]
arr[3] = 4
console.log(arr[3])
```

- A: `undefined`
- B: `4`
- C: `Compile-time error`
- D: `null`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Even though arr initially has three elements, JavaScript allows extending the array. Assigning a value to arr[3] is valid and will output 4.

</p>
</details>
---

###### 18. What will this TypeScript code output?

```typescript
const a: [number, string] = [1, 'hello']
a.push(2)
console.log(a)
```

- A: `[1, "hello", 2]`
- B: `Compile-time error`
- C: `[1, "hello"]`
- D: `Runtime error`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

Tuples in TypeScript can still have elements pushed onto them at runtime, even though their length and types are restricted. This behavior may be unexpected but is allowed.

</p>
</details>
---

###### 19. What will this function return?

```typescript
function test(): string | undefined {
  return
}
```

- A: `undefined`
- B: `""`
- C: `null`
- D: `Compile-time error`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

Since the function return type is `string | undefined`, and no value is returned, it defaults to undefined.

</p>
</details>
---

###### 20. What is the result of the following?

```typescript
let value = 'TypeScript'
value = value.length > 5 && value
```

- A: `Typescript`
- B: `true`
- C: `false`
- D: `""`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `&&` operator will return the second operand if the first is truthy. Since "TypeScript".length > 5 is true, the result is the value "TypeScript" itself.

</p>
</details>
---

###### 21. What will the following code output?

```typescript
let arr: number[] = []
arr[-1] = 10
console.log(arr.length)
```

- A: `1`
- B: `0`
- C: `-1`
- D: `Compile-time error`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

Negative indices in arrays are treated as properties rather than valid indices. Therefore, `arr.length` remains 0, as no valid element was added to the array.

</p>
</details>
---

###### 22. What does the following function return?

```typescript
function foo(): string {
  return 42 as unknown as string
}
```

- A: `"42"`
- B: `42`
- C: `Compile-time error`
- D: `"undefined"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The double casting unknown to string bypasses TypeScript’s type safety, allowing `42` to be returned as a string.
However, it is still returned as the value `42` at runtime, not as a string.

</p>
</details>
---

###### 22. What does the following function return?

```typescript
function foo(): string {
  return 42 as unknown as string
}
```

- A: `"42"`
- B: `42`
- C: `Compile-time error`
- D: `"undefined"`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The double casting unknown to string bypasses TypeScript’s type safety, allowing `42` to be returned as a string.
However, it is still returned as the value `42` at runtime, not as a string.

</p>
</details>
---
