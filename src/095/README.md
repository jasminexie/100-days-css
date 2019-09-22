# 095

Time taken: ~25mins

Things I learnt:

* `transform: skew()`: skews an element on the 2D plane. It "distorts each point
within an element by a certain angle in the horizontal and vertical directions".
`skew()` takes a maximum of two parameters, `skew(ax, ay)` that define the angle
of the skew in x and y directions, respectively. Transform origin applies here.
So instead of rotating a 2D shape onto the 3D plane for a skew effect, consider
using this.

* `skew()` is a part of CSS Transforms Level 1 spec, which is currently a working
draft. Apparently many browsers support this and I had no idea! It says that:
    
    Internet Explorer 9 supports 2D but not 3D transforms.
    In version 9, mixing 2D and 3D transform functions invalidates the
    entire property.
    
    Firefox 14 removed experimental support for skew(), but it was reintroduced
    in Firefox 15.
    
    You can also use matrix transformation - great for people with CG backgrounds,
    not so great for people like myself.
