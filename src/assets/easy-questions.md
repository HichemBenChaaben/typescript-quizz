---
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

Since ```javascript never` is a bottom type, it will be ignored in the union type, so x effectively has the type number. The value 42 will be logged.

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
---

###### 23. What's the type of this recursive conditional type?

```typescript
type Recurse<T> = T extends Array<infer U> ? Recurse<U> : T
type Result = Recurse<number[][][]>
```

- A: `number[][][]`
- B: `number[][]`
- C: `number[]`
- D: `number`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

The recursive conditional type `Recurse` will keep unwrapping array types until it reaches the base type. For `number[][][]`, it will recursively unwrap three levels of arrays to get to `number`.

</p>
</details>

---

###### 24. What's the output of this mapped type transformation?

```typescript
type RemoveReadonly<T> = {
    -readonly [P in keyof T]: T[P]
}
type Original = { readonly a: number; readonly b: string }
type Result = RemoveReadonly<Original>
```

- A: `{ a: number; b: string }`
- B: `{ readonly a: number; readonly b: string }`
- C: `{ -readonly a: number; -readonly b: string }`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `-readonly` modifier in the mapped type removes the readonly modifier from all properties. The resulting type will have mutable properties.

</p>
</details>

---

###### 25. What's the type of `result` in this example?

```typescript
type Paths<T> = T extends object
  ? { [K in keyof T]: [K, ...Paths<T[K]>] }[keyof T]
  : [];

type User = {
  name: string;
  address: {
    street: string;
    city: string;
  };
};

type Result = Paths<User>;
```

- A: `["name"] | ["address"] | ["address", "street"] | ["address", "city"]`
- B: `string[]`
- C: `never`
- D: `unknown[]`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This is a recursive type that generates all possible property paths in a nested object type. For the User type, it creates a union of tuples representing each possible path through the object.

</p>
</details>

---

###### 26. What will this code output?

```typescript
type IsNever<T> = [T] extends [never] ? true : false;
type Result1 = IsNever<never>;
type Result2 = IsNever<any>;
type Result3 = IsNever<unknown>;
```

- A: `true, false, false`
- B: `false, true, false`
- C: `never, any, unknown`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The `[T] extends [never]` pattern is necessary because `never` behaves specially in conditional types. Without the tuple wrapper, the condition would never be true. This pattern correctly identifies the never type.

</p>
</details>

---

###### 27. What's the type of this template literal manipulation?

```typescript
type CamelToSnake<S extends string> = S extends `${infer T}${infer U}`
  ? U extends Uncapitalize<U>
    ? `${Uncapitalize<T>}${CamelToSnake<U>}`
    : `${Uncapitalize<T>}_${CamelToSnake<Uncapitalize<U>>}`
  : S;

type Result = CamelToSnake<"thisIsATest">;
```

- A: `"this_is_a_test"`
- B: `"thisIsATest"`
- C: `"this-is-a-test"`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This recursive type converts camelCase strings to snake_case using template literal types. It identifies capital letters and adds underscores before them while converting everything to lowercase.

</p>
</details>

---

###### 28. What's the result of this distributive conditional type?

```typescript
type BoxedValue<T> = { value: T };
type BoxedArray<T> = { array: T[] };
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;

type Result1 = Boxed<string>;
type Result2 = Boxed<number[]>;
type Result3 = Boxed<string | number[]>;
```

- A: `BoxedValue<string>, BoxedArray<number>, BoxedValue<string> | BoxedArray<number>`
- B: `BoxedValue<string>, BoxedArray<number>, BoxedArray<string | number>`
- C: `BoxedArray<string>, BoxedValue<number[]>, BoxedValue<string | number[]>`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This is a distributive conditional type. When given a union type, it distributes over the union. For `string | number[]`, it evaluates each type separately and then unions the results.

</p>
</details>

---

###### 29. What's the output of this inferred tuple type?

```typescript
type Last<T extends any[]> = T extends [...any[], infer L] ? L : never;
type Push<T extends any[], V> = [...T, V];
type ShiftToLast<T extends any[]> = T extends [infer F, ...infer R]
  ? Push<R, F>
  : T;

type Result = ShiftToLast<[1, 2, 3]>;
```

- A: `[2, 3, 1]`
- B: `[1, 2, 3]`
- C: `[3, 1, 2]`
- D: `never`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This type manipulation takes the first element of a tuple and moves it to the end. It uses tuple type inference to break apart the tuple and reconstruct it in the desired order.

</p>
</details>

---

###### 30. What's the type of this computed property?

```typescript
type PropType<T, Path extends string> = Path extends keyof T
  ? T[Path]
  : Path extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? PropType<T[K], R>
    : never
  : never;

type User = {
  info: {
    name: {
      first: string;
      last: string;
    };
  };
};

type Result = PropType<User, "info.name.first">;
```

- A: `string`
- B: `never`
- C: `unknown`
- D: `{ first: string; last: string }`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This type recursively traverses an object type using a dot-notation string path. It uses template literal types and conditional types to parse the path and access nested properties.

</p>
</details>

[Previous questions 1-30 remain the same...]

---

###### 31. What's the type of this deep partial utility type?

```typescript
type DeepPartial<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

type Complex = {
  data: {
    user: {
      name: string;
      age: number;
    }[];
  };
};

type Result = DeepPartial<Complex>;
```

- A: `{ data?: { user?: { name?: string; age?: number; }[]; }; }`
- B: `{ data?: { user?: { name: string; age: number; }[]; }; }`
- C: `{ data: { user: { name?: string; age?: number; }[]; }; }`
- D: `{ data?: { user?: { name?: string; age?: number; }; }; }`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

DeepPartial recursively makes all properties optional, including those in nested objects and arrays. The Function check prevents trying to make function parameters optional.

</p>
</details>

---

###### 32. What's the result of this type-level arithmetic?

```typescript
type BuildTuple<L extends number, T extends any[] = []> = T['length'] extends L 
  ? T 
  : BuildTuple<L, [...T, unknown]>;

type Add<A extends number, B extends number> = [...BuildTuple<A>, ...BuildTuple<B>]['length'];
type Subtract<A extends number, B extends number> = BuildTuple<A> extends [...BuildTuple<B>, ...infer R] 
  ? R['length'] 
  : never;

type Result = Add<3, 2>;
type Result2 = Subtract<5, 3>;
```

- A: `5, 2`
- B: `never, never`
- C: `number, number`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This implements type-level arithmetic using tuple length manipulation. BuildTuple creates a tuple of specified length, which is then used to perform addition and subtraction through tuple concatenation and extraction.

</p>
</details>

---

###### 33. What's the output of this string manipulation type?

```typescript
type Split<S extends string, D extends string> = 
  string extends S ? string[] :
  S extends '' ? [] :
  S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] :
  [S];

type TrimLeft<S extends string> = S extends ` ${infer R}` ? TrimLeft<R> : S;
type TrimRight<S extends string> = S extends `${infer R} ` ? TrimRight<R> : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;

type Result = Split<Trim<"  hello  world  ">, " ">;
```

- A: `["hello", "world"]`
- B: `["", "hello", "", "world", ""]`
- C: `["hello", "", "world"]`
- D: `string[]`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This combines string trimming with splitting. The Trim types remove spaces from both ends, then Split breaks the string into parts. Empty strings between delimiters are removed in this implementation.

</p>
</details>

---

###### 34. What does this discriminated union transformation produce?

```typescript
type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type LastInUnion<U> = 
  UnionToIntersection<U extends any ? () => U : never> extends () => infer R ? R : never;

type UnionToTuple<U, Last = LastInUnion<U>> = 
  [U] extends [never] ? [] : [...UnionToTuple<Exclude<U, Last>>, Last];

type Result = UnionToTuple<'a' | 'b' | 'c'>;
```

- A: `['a', 'b', 'c']`
- B: `['c', 'b', 'a']`
- C: `string[]`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This complex type converts a union type to a tuple by using UnionToIntersection and function inference. It maintains the order of the union members in the resulting tuple.

</p>
</details>

---

###### 35. What's the type of this curried function type?

```typescript
type Curry<F> = F extends (...args: infer A) => infer R
  ? A extends [infer First, ...infer Rest]
    ? (arg: First) => Curry<(...args: Rest) => R>
    : R
  : never;

type CurriedFn = Curry<(a: number, b: string, c: boolean) => string>;
```

- A: `(a: number) => (b: string) => (c: boolean) => string`
- B: `(a: number, b: string, c: boolean) => string`
- C: `(...args: [number, string, boolean]) => string`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This type transforms a function type into its curried form, where each argument is taken one at a time. It recursively builds up the chain of single-argument functions.

</p>
</details>

---

###### 36. What will this type-safe event emitter type produce?

```typescript
type EventMap = {
  click: { x: number; y: number };
  change: { value: string };
};

type TypedEventEmitter<T> = {
  on<K extends keyof T>(event: K, handler: (data: T[K]) => void): void;
  emit<K extends keyof T>(event: K, data: T[K]): void;
};

declare const emitter: TypedEventEmitter<EventMap>;
emitter.on('click', (data) => data.value);
```

- A: Valid code
- B: Error: Property 'value' does not exist on type '{ x: number; y: number; }'
- C: Error: Type 'string' is not assignable to type 'number'
- D: No type checking performed

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

The TypedEventEmitter ensures type safety between event names and their data types. The error occurs because the click event data has x and y properties, not value.

</p>
</details>

---

###### 37. What's the result of this recursive required type?

```typescript
type DeepRequired<T> = T extends Function
  ? T
  : T extends object
  ? { [P in keyof T]-?: DeepRequired<T[P]> }
  : T;

type NestedObj = {
  a?: {
    b?: {
      c?: string;
    };
  };
};

type Result = DeepRequired<NestedObj>;
```

- A: `{ a: { b: { c: string; }; }; }`
- B: `{ a?: { b?: { c: string; }; }; }`
- C: `{ a: { b?: { c?: string; }; }; }`
- D: `{ a?: { b?: { c?: string; }; }; }`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

DeepRequired recursively removes optional modifiers (-?) from all properties at all levels of the object, making every property required.

</p>
</details>

---

###### 38. What's the type of this template literal pattern matching?

```typescript
type ParseRouteParams<T extends string> = 
  T extends `${infer Start}:${infer Param}/${infer Rest}`
    ? { [K in Param]: string } & ParseRouteParams<Rest>
    : T extends `${infer Start}:${infer Param}`
      ? { [K in Param]: string }
      : {};

type Route = ParseRouteParams<"/users/:id/posts/:postId">;
```

- A: `{ id: string; postId: string; }`
- B: `{ id: string; } & { postId: string; }`
- C: `{ [key: string]: string; }`
- D: `{}`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This type extracts route parameters from a URL pattern, converting each :param into a property of an object type. The result is a merged intersection of all parameter types.

</p>
</details>

---

###### 39. What's the output of this conditional type distribution?

```typescript
type IsUnion<T, U = T> = T extends U
  ? [U] extends [T]
    ? false
    : true
  : never;

type Result1 = IsUnion<string | number>;
type Result2 = IsUnion<string>;
type Result3 = IsUnion<string & number>;
```

- A: `true, false, false`
- B: `false, true, false`
- C: `true, true, false`
- D: `never, never, never`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This type checks if T is a union type by using conditional type distribution. The [U] extends [T] check prevents distribution and allows detecting genuine unions.

</p>
</details>

---

###### 40. What's the type of this immutable deep freeze utility?

```typescript
type DeepReadonly<T> = T extends ((...args: any[]) => any) | primitive
  ? T
  : T extends Map<infer K, infer V>
  ? ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
  : T extends Set<infer U>
  ? ReadonlySet<DeepReadonly<U>>
  : { readonly [P in keyof T]: DeepReadonly<T[P]> };

type Result = DeepReadonly<{
  arr: number[];
  obj: { x: string };
  map: Map<string, number>;
}>;
```

- A: `{ readonly arr: readonly number[]; readonly obj: { readonly x: string; }; readonly map: ReadonlyMap<string, number>; }`
- B: `{ arr: number[]; obj: { x: string; }; map: Map<string, number>; }`
- C: `{ readonly arr: number[]; readonly obj: { x: string; }; readonly map: Map<string, number>; }`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This utility type recursively makes all properties readonly, including nested objects, arrays, Maps, and Sets. It handles all possible nested structures while preserving their original types.

</p>
</details>

[Previous questions 1-40 remain the same...]

---

###### 41. What's the result of this variadic tuple manipulation?

```typescript
type Repeat<T, N extends number, A extends any[] = []> = A['length'] extends N 
  ? A 
  : Repeat<T, N, [...A, T]>;

type ZipTuples<T extends any[], U extends any[]> = 
  T extends [infer TFirst, ...infer TRest]
    ? U extends [infer UFirst, ...infer URest]
      ? [[TFirst, UFirst], ...ZipTuples<TRest, URest>]
      : []
    : [];

type Result = ZipTuples<Repeat<number, 3>, Repeat<string, 3>>;
```

- A: `[[number, string], [number, string], [number, string]]`
- B: `[number, string][]`
- C: `[number | string, number | string, number | string]`
- D: `never[]`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This combines two advanced concepts: generating tuples of specified length and zipping them together. The Repeat type creates a tuple of N elements, while ZipTuples pairs elements from both tuples into a new tuple of tuples.

</p>
</details>

---

###### 42. What's the type of this higher-order type operator?

```typescript
type TypeOperator<F extends <T>(...args: any[]) => any> = 
  F extends <T>(...args: infer Args) => infer R
    ? <U>(...args: { [K in keyof Args]: Args[K] extends T ? U : Args[K] }) => 
        R extends T ? U : R
    : never;

type MapString = <T>(value: T) => T extends string ? number : T;
type Result = TypeOperator<MapString>;
```

- A: `<U>(value: U extends string ? U : string) => U extends string ? number : U`
- B: `<U>(value: U) => U`
- C: `<U>(value: U) => number`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This creates a higher-order type operator that transforms generic functions while preserving their type relationships. It maps type parameters and return types according to a pattern, maintaining type safety.

</p>
</details>

---

###### 43. What does this type-level state machine produce?

```typescript
type State = 'Idle' | 'Loading' | 'Success' | 'Error';
type Event = 'FETCH' | 'RESOLVE' | 'REJECT' | 'RESET';

type Transitions = {
  Idle: { FETCH: 'Loading' };
  Loading: { RESOLVE: 'Success'; REJECT: 'Error' };
  Success: { RESET: 'Idle' };
  Error: { RESET: 'Idle' };
};

type NextState<S extends State, E extends Event> = 
  S extends keyof Transitions
    ? E extends keyof Transitions[S]
      ? Transitions[S][E]
      : S
    : never;

type Result1 = NextState<'Idle', 'FETCH'>;
type Result2 = NextState<'Loading', 'RESET'>;
type Result3 = NextState<'Success', 'RESOLVE'>;
```

- A: `'Loading', 'Loading', 'Success'`
- B: `'Loading', never, 'Success'`
- C: `'Loading', 'Loading', never`
- D: `'Loading', 'Success', 'Success'`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

This implements a type-level state machine that enforces valid state transitions. Result2 is 'never' because 'RESET' is not a valid event in the Loading state, and Result3 is 'Success' because 'RESOLVE' isn't defined for Success state.

</p>
</details>

---

###### 44. What's the output of this recursive string manipulation?

```typescript
type StringToTuple<S extends string> = 
  S extends `${infer C}${infer R}`
    ? [C, ...StringToTuple<R>]
    : [];

type Reverse<T extends any[]> = 
  T extends [...infer Rest, infer Last]
    ? [Last, ...Reverse<Rest>]
    : [];

type Join<T extends any[], D extends string = ''> = 
  T extends []
    ? ''
    : T extends [infer F]
    ? F
    : T extends [infer F, ...infer R]
    ? `${F & string}${D}${Join<R, D>}`
    : string;

type Result = Join<Reverse<StringToTuple<'hello'>>, ''>;
```

- A: `'olleh'`
- B: `'hello'`
- C: `string`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This combines three type-level string manipulations: converting a string to a tuple of characters, reversing the tuple, and joining it back into a string. The result is a reversed string at the type level.

</p>
</details>

---

###### 45. What's the type of this advanced inference with conditional types?

```typescript
type InferPropType<T, P extends keyof any> = 
  T extends { [K in P]: infer U } ? U : never;

type UnionToIntersection<U> = 
  (U extends any ? (k: U) => void : never) extends 
  ((k: infer I) => void) ? I : never;

type ExtractField<T, P extends keyof any> = 
  UnionToIntersection<InferPropType<T, P>>;

interface A { x: string; }
interface B { x: number; }
interface C { x: boolean; }

type Result = ExtractField<A | B | C, 'x'>;
```

- A: `string & number & boolean`
- B: `string | number | boolean`
- C: `never`
- D: `unknown`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

This attempts to extract and intersect a field type from a union of objects. Since string & number & boolean is impossible (never), the result is never. The UnionToIntersection type converts a union to an intersection type.

</p>
</details>

---

###### 46. What's the result of this recursive mapped type?

```typescript
type DeepModify<T, Modifier> = T extends object
  ? T extends (infer U)[]
    ? DeepModify<U, Modifier>[]
    : {
        [P in keyof T]: T[P] extends Function
          ? T[P]
          : DeepModify<T[P], Modifier> extends infer DM
          ? DM & Modifier
          : never
      }
  : T & Modifier;

interface AddTimestamp {
  _timestamp: number;
}

type Result = DeepModify<{
  user: {
    name: string;
    addresses: { street: string; }[];
  };
}, AddTimestamp>;
```

- A: Complex type with _timestamp added at every level
- B: Complex type with _timestamp only at root
- C: Complex type with _timestamp only at leaves
- D: Error: Type 'AddTimestamp' does not satisfy constraint

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

DeepModify recursively applies the Modifier type to every object in the structure, including array elements. The result has _timestamp at every object level while preserving the original structure.

</p>
</details>

---

###### 47. What's the type of this advanced type inference system?

```typescript
type IsNeverType<T> = [T] extends [never] ? true : false;
type IsAnyType<T> = 0 extends (1 & T) ? true : false;
type IsUnknownType<T> = IsNeverType<T> extends false
  ? T extends unknown
    ? unknown extends T
      ? IsAnyType<T> extends false
        ? true
        : false
      : false
    : false
  : false;

type Result1 = IsUnknownType<any>;
type Result2 = IsUnknownType<never>;
type Result3 = IsUnknownType<unknown>;
```

- A: `false, false, true`
- B: `true, false, true`
- C: `false, true, false`
- D: `true, true, true`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This type system can differentiate between any, never, and unknown types using sophisticated type relationships. It uses multiple conditions to ensure accurate type detection even in edge cases.

</p>
</details>

---

###### 48. What's the output of this type-level parser?

```typescript
type ParseInt<T extends string> = 
  T extends `${infer Digit extends number}`
    ? Digit
    : never;

type BuildNumber<T extends string, Acc extends number = 0> = 
  T extends `${infer First}${infer Rest}`
    ? First extends `${number}`
      ? BuildNumber<Rest, Acc extends 0 
          ? ParseInt<First>
          : Add<Multiply<Acc, 10>, ParseInt<First>>>
      : never
    : Acc;

type Result = BuildNumber<'12345'>;
```

- A: `12345`
- B: `'12345'`
- C: `number`
- D: Compile-time error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This implements a type-level parser that converts string numbers into numeric literal types. It recursively builds up the number using type-level arithmetic operations while maintaining type safety.

</p>
</details>

---

###### 49. What's the type of this advanced discriminated union manipulation?

```typescript
type UnionToTuple<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer A
  ? [...UnionToTuple<Exclude<T, A>>, A]
  : [];

type ToIntersection<U> = (U extends any
  ? (k: U) => void
  : never) extends ((k: infer I) => void)
  ? I
  : never;

type UnionToOverloads<U> = UnionToTuple<U> extends (infer Tuple)[]
  ? Tuple extends [any, ...any[]]
    ? { [K in keyof Tuple]: (x: Tuple[K]) => void }[number]
    : never
  : never;

type Result = UnionToOverloads<string | number | boolean>;
```

- A: `((x: string) => void) & ((x: number) => void) & ((x: boolean) => void)`
- B: `(x: string | number | boolean) => void`
- C: `never`
- D: `{ (x: string): void } | { (x: number): void } | { (x: boolean): void }`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

This creates function overloads from a union type by first converting the union to a tuple, then mapping the tuple to function types, and finally converting back to an intersection type of overloads.

</p>
</details>

---

###### 50. What's the result of this type-level SQL query builder?

```typescript
type Table = {
  users: {
    id: number;
    name: string;
    age: number;
  };
  posts: {
    id: number;
    title: string;
    userId: number;
  };
};

type Select<T, K extends keyof T> = { [P in K]: T[P] };
type Join<T, U, ON extends string> = 
  ON extends `${infer TKey}.${infer UKey}`
    ? TKey extends keyof T
      ? UKey extends keyof U
        ? Select<T, keyof T> & Select<U, keyof U>
        : never
      : never
    : never;

type Query = Join<Table['users'], Table['posts'], 'users.id.posts.userId'>;
```

- A: Complex merged type with all fields
- B: Never
- C: Error in ON clause
- D: Runtime error

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

This attempts to implement a type-level SQL-like query builder. The error occurs because the ON clause format doesn't match the expected pattern (it has an extra segment). A correct ON clause would be 'users.id.userId'.
</p>
</details>
