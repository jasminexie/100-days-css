# 059

Time taken: ~45mins

Things I learnt:

* I discovered that one submission used only two elements - `::before` and `::after`,
and I wanted to give it a try. Thankfully this is not my first time using `clip-path`,
even though it is the first time I used it to clip out multiple polygons.

* Do not, do not, do not use CSS variables for your background image. My animation was
really choppy at first; used `translate` and `translate3d` and everything I knew of,
but there were huge flashes. Disabled some CSS on a whim and found out that if I took
out
    
    ```css
    :root {
      --image-1: url('.../../image-1.jpg')
    }
    .frame::before {
      background-image: var(--image-1);
    }
    ```
    
    Then everything will go really smooth. I think this has to do with browser cache;
    using CSS variables for images will prevent the browser from caching the loaded
    image? I don't know. Stackoverflow users say there was a bug in Chrome that prevented
    background images + CSS variables from working as planned:
    <https://bugs.chromium.org/p/chromium/issues/detail?id=618165> but I believe it's
    fixed now. Anyhow, I'd avoid doing this.
    
