# 054

Time taken: ~40min

These exercises are getting easier. Or maybe I'm getting better.
This one brushes up my knowledge of the `:nth-clid` selector, but that'a about it.

Things I learnt:

1. Custom properties can be overridden in selectors. It works the same way you'd expect with any other css
thing: cascading. According to [this issue here](https://github.com/postcss/postcss-custom-properties/issues/173),
PostCSS custom properties doesn't support this behavior 100%. But it works for me, apparently.

2. According to the docs, custom properties can have a fallback value:
    
    ````css
    div {
       --color: red;
       color: var(--color, red);
    }
    ````
