# Random Number Generator

## Intro

Today I'll show you how to make a simple number generator from 1 to 100 using ```Math.random```. This could 
be useful if you are trying to make a game, or a random password generator. The code
is adjustable and its really easy to change the limit.

## Math.floor

```Math.random``` is a function that generates a random decimal from 0 to 1(but does not include the 
limiting numbers). If we mutipply these numbers we can get numbers larger than one, and then use 
```Math.floor``` to round the number to a whole. If you dont wan't a zero in your number pull, add onet to the equasion
```javascript

function makeNumber() {
    x = Math.floor((Math.random() * 100) + 1);
    number.innerText = x;
}

```
### Equation

So the easies way to modify it is to look at it as an equation Math.floor((Math.random() * x) + y), where x is the largest 
number you wanna get, and y is the lowest.
