# 072

Time taken: ~15mins

Things I learnt:

* `animation-delay` tells you how much time to delay before an animation.
It does not tell you how much time to delay between animations. This does
not work:
    
    ```css
    @for $i from 1 to 10 {
      #circle-$i {
        animation: circle-$i calc(5s - 0.2s * $i) ease-in-out 0.2s * $i infinite;
      }
    }
    ```

    That would only work for the first iteration - subsequent iterations are
    all screwed.
    
    Stackoverflow <https://stackoverflow.com/questions/13887889/css-animation-delay-in-repeating>
    says that one workaround is to fake an animation delay by having static
    keyframe states at the beginning or end.
