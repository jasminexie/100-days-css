# 049

Time taken: ~1.5hrs

This is tougher than I thought. I had the layout and animation pinned down in 20 minutes flat, but there were 
a few weird complexities. Or maybe it's just me sucking at HTML and CSS. This exercise creates a whole world of
anti-examples, most of which I found when looking at other people's entries.

Things I learnt:

1. It might not even make a difference on your nice, fast MacBook pro that is still nice and fast even if it was
from 20-freaking-15, but it makes a world of a difference on my 20-freaking-15 iPhone 6S Plus. Animating position
is visibly, notably and very obviously more choppy than animating `translate3d`. I've mentioned this in 
[046](./046/README.md) but I'll say it again: never animate position.

2. CSS does not have any previous sibling selectors. `~` selects all matching subsequent siblings, and `+` selects 
the immediate matching subsequent sibling. CSS may be powerful today but it is still a cascading, waterfall-like
stylesheet; you can't select a previous sibling.

3. Animating nth-child for 400 divs sucks balls. Visibly more choppy, even on my MacBook.

3. 4000 divs crashes iOS Safari. 400 divs is safe. This is a safety issue that was discovered ages ago: rendering
a ton of empty divs on iOS Safari can force your phone to crash, launch safety precautions and automatically turn off;
someone told be that it was because Safari is a native iOS app and is therefore given much, much more memory access and
stuff. Apparently Apple still hasn't fixed this.

4. The problem I was really stuck on was the fact that my hover animations weren't fluid. At first I thought that
there was anonymous whitespace between the divs, so that each time I hovered on the tiny, nonexistent space between
the divs, the dot would snap back to center position. Turns out that it had nothing to do with whitespace at all
(here's a lesson: **never assume.** Test thoroughly. You'll get stuck on your assumptions with no way out, simply 
because you were too stubborn to look at it from another point of view); instead, it happened every time I hovered
over the dot or its pseudo-element. So I needed to make the dot go **below** the grid; since CSS does not have
previous sibling selectors, the only way I could do this was to use `z-index`.

5. Different elements don't have different default values for positioning, they all start out as static.
Static doesn't mean much; it just means that the element will flow into the page as it normally would. **However, 
`z-index` does not work with static elements.** 

6. Relatively positioned elements are relative to itself; without a `top` and `left` set, they will flow on the HTML
document like a static element. However, once you've set an element to be anything other than static, it will be 
*higher* than any statically positioned elements, even if you haven't set a `z-index`. You can't fight it by setting 
a higher z-index value on a statically positioned element, because `z-index` doesn't really work with static elements.

7. So to solve what happened in 4., I had to relatively position all grid elements and set their z-index to 1. Which is
higher than the absolutely positioned dot (z-index not set).

8. Setting the z-index sets an element's level in its current stacking context. It also introduces a **local stacking 
context** in which its stack level is 0. This means that the z-indexes of descendants are not compared to the z-indexes 
of elements outside this element.

9. CSS `sticky` position is cool. Do NOT forget about it.

9. [Deprecation] Custom cursors with size greater than 32x32 DIP intersecting native UI is deprecated and will be 
removed in M75, around June 2019. What a shame.

10. Here's this really cool snippet I discovered on someone else's attempt (after I've completed my own, of course):

```css
:root {
    --x-position: 200px;
    --y-position: 200px;
}

.pointer {
    transform: translate(calc(var(--x-position) - 5px), calc(var(--y-position) - 5px));
}
```

```js
document.documentElement.style.setProperty('--x-position', event.clientX + 'px');
    document.documentElement.style.setProperty('--y-position', event.clientY + 'px');
})
```

Next-generation CSS. Changing the root css variables automatically takes effect, with animation. And it animates 
`translate`, not top or left, which shows how talented the author is. It's still javascript, but it's so cool.
