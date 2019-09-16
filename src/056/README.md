# 056

Time taken: ~1hr

Things I learnt:

* I've tried and tried with `postcss-for` and `postcss-simple-vars` and
`postcss-calc`, but I simply could not get this code to work:
    
    ```css
    @for $i from 1 to 15 {
      $angle: calc(360deg * $i / 15);
      .petal-$i {
        transform: rotate($angle);
        animation: petal-$i 7s ease-in-out infinite;
      }
      $percentIn: calc(( $i * (45 / 15) ) + 10);
      $percentOut: calc(( $i * (10 / 15) ) + 65);
    
      @keyframes petal-1 {
        0%, 100% {
          transform: rotate(calc(360deg * 1 / 15)) scale(0.3);
        }
        $(percentIn)%, $(percentOut)% {
          transform: rotate(calc(360deg * 1 / 15)) scale(1);
        }
      }
    }
    ```
    
    The postprocessed result is:
    ```css
    @keyframes petal-1 {
      0%, 100% {
        transform: rotate(calc(360deg * 1 / 15)) scale(0.3);
      }
      calc(1 * (45 / 15) + 10)%, calc(1 * (10 / 15) + 65)% {
        transform: rotate(calc(360deg * 1 / 15)) scale(1);
      }
    }
    ```
    
    `calc` is not reduced.
    
    Okay, so I'll look at the source code - `postcss-calc` uses 
    `postcss-selector-parser` and `postcss-value-parser` to parse stuff.
    Neither parses `keyframe`, which is an
    [at rule](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule).
    
    Looks like something I could start writing myself... but then again -
    you have SCSS, people, which does that job perfectly - you don't need
    PostCSS for this.
