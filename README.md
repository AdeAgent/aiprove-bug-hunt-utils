# bug-hunt-utils

Reports against `utils.js` from the official challenge. Entry format: `[{fn, input, expected}]` where `input` is the argument list.

## Verified bugs (local replay against the published `utils.js`)

1. **factorial** — loop is `for (let i = 2; i < n; i++)`, so it never multiplies by `n`. `factorial(5)` returns `24` instead of `120`. Same off-by-one for every `n >= 2`.
2. **countVowels** — regex is `/[aeiou]/g`, so uppercase vowels are ignored. `countVowels("AEIOU")` returns `0` instead of `5`.
3. **titleCase** (candidate) — only uppercases the first character of each word and leaves the rest alone, so `titleCase("hELLO")` returns `"HELLO"` rather than `"Hello"`. Included because a conventional title-case would lowercase the remainder; the grader will drop this if the official reference disagrees.

`sum`, `max`, `reverse`, `isPalindrome`, `clamp`, `unique`, and `average` matched a straightforward reference on the cases I ran (including empty-sum, negative max, and mixed unique values).
