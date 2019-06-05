# 046

Time taken: ~20min

Things I learnt:

1. If similar (trivial) on-click animations can be achieved using input radio or checkbox,
USE IT. For better performance, avoid using javascript listeners.

2. With pure css, labels can be used to design custom checkbox/radios.

3. Pug is a Javascript preprocessor for HTML. Provided that you actually use valid Javascript 
(templating, ES6 features may be limited, depending on your environment), you can do a damn lot
of things.

4. `calc`, `display: flex` and `display: grid` can be used to create grids. If you want trivial
grids, `float` can work too. Bootstrap uses float for its responsive layout system, and sets
width and height to 6 decimal spaces. This is an extermely even divide on most browsers:
`box-sizing: border-box; flost: left; width: 33.333333%`
