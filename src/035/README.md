# 035

Time taken: ~15mins

Things I learnt:

* I'm getting the hang of this, seriously. It's actually quite simple.

* The total delta of the spin must be 360 degrees (or 360 * N) for it to
appear continuous.

* The total delta of the dashoffset must be 2*`dasharray` to appear to
draw and un-draw itself continuously.

* For a single full draw, the dashoffset delta must be 1*`dasharray`, with
an initial value of 1*`dasharray` decreasing to 0 or increasing to
2*`dasharray`.

