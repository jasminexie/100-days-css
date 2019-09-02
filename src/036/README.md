# 036

Time taken: ~30mins

Things I learnt:

* I'm getting better at this. This challenge is an anti-pattern: if it weren't
for the fact that I refuse to use Javascript unless absolutely necessary, I
wouldn't write like this. CSS selectors are limited...

* What I should have done to position a fixed header and a flexible content
is `flexbox`.

* Again - different animations for different states: 
    
    ```css
    section > div {
      transition: all .5s ease-in;
    }

    #tab-1:checked ~ section .block-1,
    #tab-2:checked ~ section .block-2,
    #tab-3:checked ~ section .block-3,
    #tab-4:checked ~ section .block-4 {
      transition: all .5s ease-out .4s;
    }
    ```

* What `include` does is actually include (or compile) your file as plain
text (or filtered plain text) and put it where the `include` expression is.
   ```pug
   style
     include index.css
   ```
   This doesn't link a CSS file - it complies the file and inserts `index.css`
   right there as inline CSS between a `<style>` tag. Same for everything else -
   you can include inline Javascript. It's kust putting plain text somewhere in
   the file.
   
   Simple but strangely powerful.
