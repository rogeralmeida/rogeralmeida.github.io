---
layout: page
title: "Regor - Programming Language"
comments: true
categories:
---
## Name
It is my name backwards :/

## Objective
Compiled multiplatform language with moderm features enabling OOP and functional programming features while keeping the pleasure of coding to the developer.

## Syntax

### Overview

`var name String //Variable declaration`

Statically typed. The type declaration comes after the variable name

#### Array

```javascript

  var myArray []
  myArray[0] = 1
  myArray[1] = "Text" //Arrays can hold objects of different types

  //In place initialization
  var anotherArray [] = [1, "other"] //shorter form for above code
  var thirdWay = [1, "yet another"]
  var forthWay = Array.new(1, "and now?")

```

Array must have a reach API:

* `array.map`
* `array.slice`
* `array.reduce`
* `array.join`
* _etc..._

### String
* Interpolation `"#{variable}"`

### Block
Simple syntax: `() => {//code block}`
```javascript
  [1, 2, 3].each((item) => {
    System.PrintLn("Number: #{item}")
  })

  [1, 2, 3].each((item, index) => {
    System.PrintLn("Number: #{item}, Index: #{index}")
  })
```
### Module
Methods static
Constants

### Class
```javascript
  class Person {
    weight Decimal //private field, no external access to this field
    @Readable firstName, lastName String // personObject.firstName  and personObject.lastName are available outside this class for reading
    @Writable videoGame String // personObject.videoGame = "Nothing works". But, you cannot read the attribute
    @Accessible maccasOrderNumber Integer // Read and Write

    dateOfBirth Date //private property

    getFirstName(){
      "Sr #{self.firstName}" //interceptor to do computation for firstName. set<Attribute Name> should work as well
    }

    New(){
      //contructor
    }

    New(firstName, lastName, videoGame String, maccasOrderNumber Integer, dateOfBirth Date){
      self.firstName = firstName
      //etc..
    }

    Walk(){
      //public method
    }
  }

  @Accessible //getter/setters methods available automatically
  class DTOClass {
    name String
  }
```

### Modules
```javascript
  module Math {
    PI = 3.14161721 //Immutable
    Sqrt(number Decimal){
      2// at least it works for 4
    }

    Add(a, b Decimal){
      a + b
    }
  }
```

### Optional parentheses
```javascript
  add 1, 2 //add(1, 2)
  reduce((number, total) => number + total)
  reduce (number, total) => number + total
```
