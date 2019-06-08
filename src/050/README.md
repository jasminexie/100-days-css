# 050

Time taken: ~30min

Things I learnt:

1. Do not be scared of animation. It's easier than you think.

2. This is the first time I've ever, ever heard of 8-value border radius. It's so cool, you can make so many custom
buttons and stuff using pure CSS! I think I could even draw a snake with this. Just. So. Cool. I've found a website
that explains this: <https://9elements.github.io/fancy-border-radius/>

3. Markdown supports automatic links for URLS and email addresses. Like this:
`<https://9elements.github.io/fancy-border-radius/>` will be converted to
    
    ```html
    <a href="https://9elements.github.io/fancy-border-radius/">
        https://9elements.github.io/fancy-border-radius/
    </a>
    ```

4. This is actually one of the easier challenges, because I knew exactly what was going on here and what I needed to 
do. The hard part was tuning values (making the egg look more like an egg; bouncing the egg realistically).

5. I learnt this from css-tricks: you can set animation-delay to a negative number, and it will push the playhead back 
in time, so that all animations are running when the viewer shows up. Set `animation-play-state: paused;` and then 
adjust the delay to different negative times. You'll see the animation in different paused states. This makes debugging 
keyframes a damn lot easier. Pseudo code here (I will have to make this into a reusable component/widget):
    
    ```html
    <div class="track">
      <div class="thing" id="thing"></div>
    </div>

    <input id="delay-slider" type="range" min="-2" max="0" step="0.1" />
    ``` 

    ```css
    .thing {
      animation: move 2s linear infinite alternate;
      animation-play-state: paused;
      animation-delay: -1s;
    }
    ```
    
    ```js
    var thing = $("#thing");
    var slider = $("#delay-slider");
    
    slider.on("change", function() {
      thing.css({
        "animation-delay": slider.val() + "s"
      })
    });
    ```

6. You can actually, actually chain animations. Like this:
    
    ```css
    animation: foo 3s ease-in-out, 
               bar 4s 3s ease-in-out, 
               brainz 6s 7s ease-in-out;
    ``` 
    But the obvious drawback is that once you've edited the animation time of one, you'll have to change all subsequent 
    animations. css-tricks tells me that I should switch to javascript animations if I need to chain more than three.
