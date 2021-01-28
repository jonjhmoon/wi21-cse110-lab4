1. It will print out however long prices is as it is declared as a var.
2. It should print out prices[i] * (1 - discount)
3. finalPrice should print whatever discountedPrice was as it is being assigned that value in the for loop.
4. discounted = [100, 200, 300] and will go into the for loop and discountedPrice = 50, then finalPrice = 50, and discounted = [50], then loops again, for the next two and the console will print on line 11, 3, line 12, 150, and line 13 [50, 100, 150].

5. There will be an error as the scope of i is only in the for loop.
6. There will be an error as discountedPrice is only declared in the for loop with let.
7. It should be whatever was calcuated during the for loop.
8. discounted = [100, 200, 300] and will go into the for loop and discountedPrice = 50, then finalPrice = 50, and discounted = [50], then loops again, for the next two and the console will print on line 11 an error, line 12, an error, as both are not in the scope of the variable and line 13 [50, 100, 150].

9. There will be an error as the scope of i is only in the for loop.
10. There will be an error as discountedPrice is only declared in the for loop with const.
11. There should be an error as finalPrice was declared as a const so it cannot have it's value changed.
12. discounted = [100, 200, 300] and will go into the for loop and discountedPrice = 50, then finalPrice = 50, and discounted = [50], then loops again, for the next two and the console will print on line 11 an error, line 12, an error, and line 13 will also give an error as they are either declared in the loop, or declared with const variables so that the variable cannot be reassigned.