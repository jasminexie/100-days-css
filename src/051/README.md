# 051

Time taken: ~1hr

Things I learnt:

1. At first I wanted to animate each individual digit's opacity. Except that would require either creating 10 
separate animations, or setting an animation delay for a million different elements. I *could* loop through with the
iteration syntax, but then it occurred to me that instead of animating 40 elements, I could animate 4. 

2. I've just learnt how to make CSS triangles!
    
    ```
    The distances from:
         ____
        |\  /|
        | \/ |
        | /\ |
        |/__\|
     
    left side to intersection: border-left
    top side to intersection: border-top
    etc.
    
    If you want the left triangle to be filled, set the border color to something,
    and set all remaining border colors to transparent.
    
    border-width: 5px 0 5px 10px;
    border-color: transparent transparent transparent red;
    ```
