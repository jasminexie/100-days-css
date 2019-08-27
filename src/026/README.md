# 026

Time taken: ~30mins

Things I learnt:

* Believe it or not it took me a bit of tweaking (from using transitions) to
finally get what I wanted. I've mentioned it in a previous challenge: define
styles in the main element block, then define animations based on state.
     
    ```css
    input[type=radio] {
      /* styles here */
    }
    input[type=radio]:not(checked) + .card {
      animation: not-checked .5s ease-in-out;
      animation-fill-mode: both;
    }
    input[type=radio]:checked + .card {
      animation: checked .6s ease-in-out .5s;
      animation-fill-mode: both;
    }
    ```

* The original used JS. But radios are cool.
