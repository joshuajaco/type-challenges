/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math

  ### Question

  Given a number (always positive) as a type. Your type should return the number decreased by one.

  For example:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

// 0 1 2 3 4 5 6 7 8 9
type Map = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8];

type Reverse<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Reverse<Rest>}${First}`
  : S;

type ParseNumber<S extends string> = S extends `${infer N extends number}`
  ? N
  : never;

type _MinusOne<S extends string> = S extends `${infer First}${infer Rest}`
  ? Map[ParseNumber<First>] extends 9
    ? `9${_MinusOne<Rest>}`
    : `${Map[ParseNumber<First>]}${Rest}`
  : S;

type StripLeadingZero<S extends string> = S extends "0"
  ? S
  : S extends `0${infer Rest}`
    ? StripLeadingZero<Rest>
    : S;

type MinusOne<T extends number> = ParseNumber<
  StripLeadingZero<Reverse<_MinusOne<Reverse<`${T}`>>>>
>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
