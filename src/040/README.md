# 040

Time taken: ~1.5hr

Math is fun. Not.

I tried not to hard code any values in this challenge; seriously I did. But
apparently the CSS spec disallows using `calc` to divide two same-dimension
values:

```css
calc(400px / 129.33px)
```

This doesn't work.

I'm beginning to miss good ole' JavaScript. It might be a good idea to fork
`postcss-calc` and do this shit myself - except no-one actually needs this
functionality. Sane people use JavaScript.

And I suppose you can get away with `@for $i from 1 through ($n * $n)` in 
SCSS, but I can't do this with `postcss-for` or `postcss-each`. So despite
everything... everything's still hard-coded. Except the frame size, which
can be adjusted to whatever.

...And everything else is trivial.
