---
layout: post
title: "Euler's Journey Problem 1"
date: 2014-12-29 17:38:43 -0200
cover_picture: "/images/responsive/roman-mager-59976.png"
image: "/images/responsive/roman-mager-59976.png"
comments: true
tags: euler, java, javascript, python, ruby, scala
---

So I decided to start a project where I gonna implement the same problem in many languages. I always wanted to compare how different programming languages face some coding challenges. I don't want to prove that any language is better than other, althought I know that this kind of flame will happen.
To have a organized list of problems I gonna use the [Project Euler](http://projecteuler.net/) problems.
<!--more-->

# First Problem: Multiples of 3 and 5
So the first step of this jorney is the [Multiples of 3 and 5](https://projecteuler.net/problem=1).

>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
>Find the sum of all the multiples of 3 or 5 below 1000.

And here are the may implementations:
## Java 1.8

``` java
package com.github.rogeralmeida.eulersjourney;
/**
* Created by ralmeid on 12/25/14.
*/
public class SumMultiplesOf3And5 {
	public static void main(String... args){
		Integer sum = 0;
		for(int number=1; number < 1000; number++){
			if (number % 3 == 0 || number % 5 == 0){
				sum += number;
			}
		}
		System.out.printf("The sum of multiples of 3 and 5 below 1000 is %d", sum);
	}
}
```
Not much to say about the Java version. It is a little verbose, but still very easy to teach to programming students, as there's no hidden concept here. Everything is very explicit.

## Scala
``` scala
object Multiples {
	def main (args: Array[String]) {
		var number = 0;
		var sum = 0;
		for(number <- 1 to 999 if number % 3 == 0 || number % 5 == 0){
			sum += number;
		}
		printf("The sum of multiples of 3 and 5 bellow 1000 is %d", sum);
	}
}
```
I do not code in Scala, but have decided to add it to my toolbet in 2015. So I will make an effort to implement every problem in Scala as well.
I hope there's a less verbose way to do it in Scala, because I'm not happy with this code.
One point that I would like to highlight here is the way to create a [Range](http://www.scala-lang.org/api/current/index.html#scala.collection.immutable.Range) `1 to 999`. Also you can filter the for's enumerables without executing the for body.

---

Yes, I've found a better way of doing it in Scala. Check this out:

``` scala
object Multiples {
  def main (args: Array[String]) {
    val total = (1 to 999).toList.filter(number => number % 3 == 0 || number % 5 == 0).
      reduce[Int]((accumulator, number) => accumulator+number)
    printf("The sum of multiples of 3 and 5 bellow 1000 is %d", total);
  }

}
```
First create a Range from 1 to 999.
Then coarse it to a List.
Then filter the list to get just the multiples of 3 or 5.
Then reduce the list using a accumulator.
I do liked this version, very concise, but the syntax is not that clear yet.

## Javascript
``` javascript
var sum = 0;
for(number = 1; number < 1000; number++){
	if(number % 3 == 0 || number % 5 == 0){
		sum += number;
	}
}
console.log("The sum of multiples of 3 and 5 bellow 1000 is "+sum);
```
Not much to say here, very straightforward.

## Python 2
``` python
multiples = sum([number for number in range(1, 1000) if (number % 3 == 0) or (number % 5 == 0)])
print "The sum of multiples of 3 and 5 bellow 1000 is {}".format(multiples)
```
The more I touch Python, more I like it.
It uses the [range](https://docs.python.org/2/library/functions.html) function to generate the list of number from 1 to 999.
It uses [List Comprehension](https://docs.python.org/2/tutorial/datastructures.html) to generate a list with only the multiples `[number for number in range(1, 1000) if (number % 3 == 0) or (number % 5 == 0)]` then it uses the `sum()` function to sum up the multiples.

## Ruby

``` ruby
sum = (1..999).select{|number| number % 3 == 0 or number % 5 == 0}.reduce(:+)
puts "The sum of multiples of 3 and 5 is #{sum}"
```

My favorite version so far.
First I like the way to create the range `(1..999)`. Like the Scala way it stills a little bit magical but this is it, or you have a Global function like Python or you have some sintax to recognize that you are creating a range.
The `select` method is very useful to filter a collection. The `reduce` method receives a symbol with the method that should be called to reduce the list, and it understand that it has to accumulate the value.
