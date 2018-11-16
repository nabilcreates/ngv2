# NumGen v2

### Changes
-   better code
-   more features (going to be added soon!)

# Usage
## Declaring an instance
First of all, you have to create an instance of NumGen:
```javascript
let newgen = new NumGen()
```
then, you are ready to move on!

## Methods
### generate(length) - Generates a x digit number where x is specified by the user.
```javascript
newgen.generate(length)
```
-   length (Integer)
    -   the length of the number (length of 8 will produce an 8 digit number)

### filter(options) - filter only stuff that matches the requirements set by the user
```javascript
newgen.filter(options)
```
-   options (object)
    -   number (A return value from .generate()) [return value]
    -   start: (Number where you want it to start 'searching') [integer]
    -   end: (Number where you want it to end 'searching') [integer]
    -   requirement: (Requirement that needs to be met) [integer]
    -   errors: (true will console.log numbers that don't match) [boolean]

    