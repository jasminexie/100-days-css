# 055

Time taken: ~30mins

Things I learnt:

* `conic-gradient` is part of the CSS4 image module spec. What it does is
pretty straightforward: generates a conic gradient starting from 12 o'clock.

* Interesting stuff: I read through a bit of the CSS3 Image Module spec. One
of the biggest changes is the addition of `conic-gradient`, which not every
browser supports; the `image-resolution` property and the `image()` and
`element()` notation. With image resolutions you could specify a set of
different resolution images to be used according to the user's device
resolution... which is something like what iOS has done for years. This is
so cool, really.

* I honestly don't have a clear idea how `image()` is different to `url()`
- I think you can specify some image fragments, solid-color fallbacks that
don't actually work that well with the current `url()` spec, and change the
direction of images (flip it in the inline direction).

* The CSS4 spec also adds the `element()` notation - which shows the
background equal to some DOM element on some page. No more DOM-to-canvas
libraries! There are obviously a million issues concerning this spec
(visibility of elements? stacking context?), so I won't be surprised if this
will be on hold for a million years.
