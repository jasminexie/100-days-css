# 046

Time taken: ~2h

Things I learnt:

1. Do not use position and display for animations; use transform and opacity instead.
Apparently transform allows animations to perform on their own layer.
`translate3d` kickstarts GPU rendering and is generally faster and `translate`.
Similarly, some webpages add a `translate3d(0, 0, 0)` to their root components in order to
force GPU rendering.

2. [https://uigradients.com](https://uigradients.com) is a great site for gradient ideas.

3. IMPORTANT: Do not be scared of `transform`. CSS animations are easier than you think -
duh, you've just written your own.
