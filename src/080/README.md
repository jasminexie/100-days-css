# 080

Time taken: ~20min

Things I learnt:

* Setting `align-items: stretch` and `flex` sort of disregards your initial item width. Which is immensely
useful when animating things like this.

* From MDN: 
    
    ````
    The scale CSS property allows you to specify scale transforms individually and independently of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.
    ````
    Apparently it's an experimental property that doesn't work anywhere except on 60+ versions of Firefox.
    VSCode auto-completed this for me (and me, thinking that it's cool not to have to transform both the 
    translate and the scale, used it and found that it didn't work the way I expected).

    
