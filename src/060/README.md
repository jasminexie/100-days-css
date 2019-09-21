# 060

Time taken: ~30mins

Things I learnt:

* `pointer-events` is a damn good property - also, elements with `visibility: hidden` will
not respond to pointer events.

* `transition: initial` sets the transition back to initial state - none. Setting transition
to none on hover creates a real-time (and realistic) cover. When the pointer hovers out of
all trigger elements, transition will be set again - a realistic bounce back.

* Tried animating scale on the plane, but apparently children elements will be affected.
Animating `height` is safe. This is a really interesting challenge; I think it shows well how
CSS programming forces people to think out of the box, to think in terms of CSS effects 
instead of visual (intuitive) effects.
