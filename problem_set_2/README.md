# Problem Set X: Valid Parentheses

## Problem Description

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

## Solution Overview

In the "isValid" function, I implemented a code, I have created a variable named "sequence" to keep track of the opening bracket encountered. It goes through every character in the string, pushing the opening brackets and popping the matching one when it comes across a closing bracket. The function returns false if there are mismatched closing brackets or if the brackets are not correctly nested. In the end, it checks if there are any remaining opening brackets in the "sequence" and returns true if the "sequence" is empty.

## Instructions to Run the Code

From a linux command line, navigate to ".\coding-challenge-repository\problem_set_2", then run "node valid_parentheses.js"
