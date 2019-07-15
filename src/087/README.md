# 087

Time taken: ~1hr

Things I learnt:

* For me... this is harder than it looks. The triangles are trivial. Apparently <https://github.com/postcss/postcss-color-function/issues/49> PostCSS Color Functions cannot properly support custom properties, and setting
it up with parcel and `poscss.config.js` is harder than it looks. I should have stuck to good old `.postcssrc`,
but most packages are useing `*.config.js` files now and I don't want to fall back on something age-old... even
if it is more configurable.

* I love color functions. There is no way, I repeat, NO WAY I'm ever going back to hard-coding colors after this.
It's just sad that PostCSS Color Functions can't support them properly for root variables. You can change the root
variable `--color` in this stylesheet before compiling, and the gem will still be beautiful with most colors. I
even want to write a color selector for this, really. It's so beautiful.

* The flash - even with the gem container's overflow property set to hidden, its tail will show! The only way to
do this was to make the top-left triangle have an actual height and width, and set *its* overflow property to hidden,
too. It's actually a rectangle, not a triangle, because you can't make a triangle div with an actual width and
height greater than 0. You'll also have to set z-index for its two neighboring triangles, so they'll overlap the
rectangle and make it "look" like a triangle...
