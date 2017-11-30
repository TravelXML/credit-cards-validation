# credit-cards-validation
credit cards validation using javascript


Lets use a randomly generated Visa credit card number 4539300916139765

Step 1 : Remove the last number from the credit card number | 4 5 3 9 3 0 0 9 1 6 1 3 9 7 6

Step 2 : Reverse the numbers | 6 7 9 3 1 6 1 9 0 0 3 9 3 5 4

Step 3 : Multiply each odd number | 12 7 18 3 2 6 2 9 0 0 6 9 6 5 8

Step 4 : Each number over 9 needs to be subtracted by 9 |  3 7 9 3 2 6 2 9 0 0 6 9 6 5 8

Step 5 : Count all numbers together | 75

Step 6 : Add the last digit of the credit card (5) with the total sum (75) | 80

Step 7 : If the digit you have is a multiple of 10 than the credit card is valid 8 * 10 is 80
