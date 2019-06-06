# 047

Time taken: ~50min

Things I learnt:

1. You can transform things (and its children) as a whole in CSS. Kind of like what we
used to try to do in our Computer Graphics class: define a model, define its components,
position the components, and transform the entire model. The `transform-style` property
determines if that element's children are positioned in 3D space, or flattened; by 
default it is flattened. Add `transform-style: preserve3d` to preserve its children's
3D-space-ness. If flattened, the element's children will not exist on their own in the 
3D-space.

2. Setting perspective gives an element a 3D-space by affecting the distance between the 
Z plane and the user. If perspective is set to none, it's like infinity... the closer 
you get, the more dramatic the visual effect. It's like setting a vanishing point in art!
If there is no perspective, there is no vanishing point.

3. You can use `perspective` on a parent div, OR you can use something like
`transform: perspective(100px)` on a child div. Setting perspective on the parent makes 
all children share the same 3D-space and thus the same vanishing point. Ugh, I suck at CG.

4. The `perspecive-origin` sets the perspective origin. Duh. By default it is `center`, but
you can set the vanishing point to be anywhere you want.

4. In this challenge, you have to set perspective on the frame, not the cube. Because the cube
itself is transformed in 3D space, it's z-axis is already not pointing out of the screen
directly at you, so it's vanishing point will be skewed.

5. **Apparently IE has limited support for all these transformations**, but screw IE.

6. **Apparently Opera mini has no support for these transformations at all**, but screw
Opera mini too.

7. This example is so cool. You don't even need to do simple rotations; you can make the cube
visually spin in and out here. Add a tiny bit of JS, and you could simulate a random dice roll.
You could let the sides pop out or something for a more dramatic effect. With the `paused`
option in animation, you could add buttons to play-pause rotations along different axis,
with *absolutely no js*. **This** is a snippet worth saving.
