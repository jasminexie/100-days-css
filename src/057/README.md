# 057

Time taken: ~2hrs

Things I learnt:

* This is the hardest fucking challenge in this set. Really. I'm not a math whiz and all these values
were fine-tuned by pure instinct. And then I found that when I was rotating the entire polygon, the
transform center was clearly way out of the true shape center.

* What I should have done was rotate each polygon by some value on its axis - that's mathematically
correct. But I can't calculate the damn angles - so the polygon is broken up into four parts:
the 5-triangle top, the 5-triangle bottom, a 5-triangle side with all triangles pointing down,
a 5-triangle side with all triangles pointing up. Rotated and pushed each side out. Then adjusted
each part so the transform center won't be far too off the mark. I think I chose a really, really shitty
way of doing things (the original code is neat and pretty); but in my defense - this challenge is way
too math intensive, and I'm happy enough that I got so far all by myself. Without referencing any of
the author's original values.
