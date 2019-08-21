# 024

Time taken: ~1hr

Things I learnt:

* This has crazy animations. Reinforced my knowledge of `stroke-dasharray`.

* A circle's stroke begins at 3 o'clock. To have it appear to begin at 12,
you'll have to rotate the SVG -90 degrees.

* You can have different animations when transitioning between two different
states! Just specify them explicitly:
    
    ```css
    input[type="checkbox"] ~ label {
      /* styles here */
    }
    input[type="checkbox"]:checked ~ label {
      animation: button 2s ease-in-out;
      animation-fill-mode: both;
    }
    
    input[type="checkbox"]:not(:checked) ~ label {
      animation: button-reverse .5s ease-in-out;
      animation-fill-mode: both;
    }
    ```
    Interestingly enough, `animation-fill-mode` doesn't take effect when it's
    written separately (in `input[type="checkbox"] ~ label`, in this
    example).
    
    You can do the same thing with transitions.
    
    ```css
    input[type="checkbox"]:checked ~ label img {
      transition-delay: 1.8s;
      opacity: 1;
    }
    
    input[type="checkbox"]:not(:checked) ~ label img {
      transition-delay: 0s;
      opacity: 0;
    }
    ```
  
