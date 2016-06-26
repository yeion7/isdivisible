# isDivisible
Curry function that return if a number is divisible

## API

### Basic
The function receive two arguments, the first is the dividend,
the second is the divisor.

```javascript
import isDivisible from 'isDivisible'

isDivisible(9, 3) //true
isDivisible(9, 2) //false
```

### Curry
You can compose new functions

```javascript
import isDivisible from 'isDivisible'
import { __ } from 'ramda'

const isDivisibleBy3 = isDivisible(__, 3)

isDivisibleBy3(9) //true
isDivisibleBy3(4) //false
```
