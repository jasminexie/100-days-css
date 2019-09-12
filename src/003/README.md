# 003

Time taken: ~1.5hrs

Things I learnt:

* The `clip-path` property, previously in SVGs but added to the CSS
Masking Module, allows clipping of HTML elements to show the clipped area.
Not all browsers support this, and probably ledd browsers support animating
`clip-path`.

* Any value other than the default none for the clip-path property results
in the creation of a stacking context on the element the same way the
opacity property does.

* Pointer events must not be dispatched on the clipped-out (non-visible)
regions of a shape. This can be useful... if you aren't trying to support
a million outdated browsers.

