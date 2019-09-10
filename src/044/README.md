# 044

Time taken: ~15mins

Things I learnt:

* The weirdest thing: if you define an animation under, say, an element's id,
you can't set `animation-play-state` to its class with any effect. Like this:
    
    ```css
    .square {
      animation-play-state: paused;
    }
    #square-1 {
      animation: something 2s ease;
    }
    ```
    This won't work.
    
    Apparently the `animation-play-state` will be overwritten (cascaded) by
    whatever is defined in `#square-1`. So additional animation properties
    must be declared on at least the same (preferably higher) priority level
    of selectors in order to take effect.
    
    The `animation` meta property actually includes `animation-play-state`,
    in addition to everything else.
