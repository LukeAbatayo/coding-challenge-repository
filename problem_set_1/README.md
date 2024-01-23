# Problem Set X: Palindrome Pairs

## Problem Description

Given a list of unique words, your task is to find all pairs of distinct indices (i, j) in the list so that the concatenation of the two words, i.e., words[i] + words[j], forms a palindrome.

## Solution Overview

In the "isPalindrome" function, I have implemented code that returns true if the argument is a palindrome, while false if not. This function will be used by the "palindromePairs" function.

In the "palindromePairs" function, I have initialized a new empty array that will be used to collect pairs of palindrome indexes. With 2 nested for loops, the "isPalindrome" function is called to check if the concatenation of two words forms a palindrome pair.

For each identified palindrome pair, the pair's indexes are added to the array. The return value of "palindromePairs" function is a list of arrays representing pairs of palindromes based on their respective indexes.

## Instructions to Run the Code

From a linux command line, navigate to ".\coding-challenge-repository\problem_set_1", then run "node palindrome_pairs.js"
