# 012

Time taken: ~1.5hrs

This code is inspired by `100ants` on codepen. They did an amazing job at
this challenge; it may not be the most feature-rich entry, but it's the one
I love most. So elegant.

Things I learnt:

* You can access HTML attributes in CSS. Example: `content: attr(data-text)`.

* You cannot make structural changes with CSS - you cannot insert a tag using
`content`. You can, however, specify an array of strings as your content:
    
    ```css
    content: "+" attr(data-text)
    ```
    ```css
    content: "(" attr(href) ")"
    ```
    
    It's beautiful, really. The art of using HTML attributes and
    pseudo-elements. 

* This works:
    
    ```css
    .caption:hover:after, .caption:hover:before {
      
    }
    .caption:after, .caption:before {
      /* styles */
     transition: all .5s linear;
    }
    ```
    
    But this does not:
    
    ```css
    .caption:after, .caption:before {
      transition: all .5s linear;
    }
    .caption:hover:after, .caption:hover:before {
      /* styles */
    }
    ```
    Long story short: *always specify transition in the place you specify
    the rest of your styles.* Know what your transition is doing and which 
    new states it will transition into.

* Using Pug, you can prefix a line with the pipe operator (`|`) to break long
single-line texts. And then you can put tags between pipe operators. A pipe
with nothing behind it will generate a white space. This looks really elegant
and intuitive. You can also use tag interpolation in a plain text block, but
I prefer pipes. HTML structure is easier to read.

   ```jade
   p.
     Single line text here #[strong Twisty] Single line text here
     Single line text here Single line text here
   ```
   vs:
   ```jade
   p
     | Single line text here
     strong Twisty
     | Single line text here Single line text here
     | Single line text here
   ```

* I have no-idea what `filter` does, but `drop-shadow` creates a drop shadow
of the whole element. MDN:
    
    <quote>A drop shadow is effectively a blurred, offset version of the
    input image's alpha mask, drawn in a specific color and composited below
    the image.</quote>
    
    Box-shadow creates a shadow of the element box. `drop-shadow` creates a
    shadow of the shape.
    
    The drop-shadow filter takes into account the addition of pseudo-elements,
    such as :before and :after. Box-shadow doesn't. If I had put a
    drop-shadow on the entire caption class in this challenge, both the word
    "existence" and the popup will have a shadow, and both will have shadows
    that surround the entire word and entire popup. It's quite beautiful.
    
    The only complaint I had was that I didn't want a shadow around my word.
    I used it in the way you'd use `box-shadow`, taking advantage of the dark
    background of the popup body, set the shadow to a similar shade of the
    popup body color, and set the popup head's z-index to something greater.
    Here, it will appear as if the entire popup is shadowed as in `drop-shadow`,
    when in fact two separate elements are shadowed. You can't see it because
    the shadow of the first element blends in to the background of the second.
    You may notice that the popup doesn't look as whole and natural: that's
    because there are overlapping shadows at their intersection, and the white
    header stands out due to the extra contrast.
    
    As I said, you can't get too much styling and functionality with
    pseudo-elements alone. You can't get that nice little triangle that
    comes with most speech bubbles. You can't get a triangle-shaped shadow
    either (but you can do it with `drop-shadow` and another real element!)
    and you can't get bold text or a volume icon because HTML structure
    cannot be changed with CSS.
    
    But using `content: attr(data)` is some of the best code I've read this
    whole *week*. At least, the idea of using `data-*` attributes is great. 
    It's search-engine friendly, self-contained, does not require a million
    server requests, minimal javascript, and all-out elegant. If I were to
    design something like this I would use data attributes with 30-something
    lines of javascript to render a popup. This is just beautiful, really.
    
    Modern front-end frameworks actually use `data-*`.
    
    
