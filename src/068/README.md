# 068

Time taken: ~1hr 20min

The animations seem fancy but are actually trivial to write.

Things I learnt:

1. Initially, I didn't even write the microphone wrapper until I realized halfway that I had to animate the entire
thing. Thinking in CSS is a little different than, say, thinking in programming languages; you'll have to recognize
early on what is part of which whole - especially in animations. Grouping elements correctly saves a lot more time that
you realize: I suppose this is intuition, something that you'll learn as you write. You can create the same effect with
HTML and CSS in a million different ways; it's always an 'aha' moment when you realize that someone has done it better.

2. Checkboxes and radio inputs for pure HTML and CSS state management. Never forget that.

3. Today I learnt a bit about animating SVGs. Apparently you can animate them in an `<animation>` tag, but you could
also define animations via CSS. SVGs have a couple of unique animate-able properties: the two we're using here are 
`stroke-dasharray` and `stroke-dashoffset`. These can create a self-drawing animation.

4. `stroke-dasharray` defines how the stroke is dashed. If you define one value, that will be both the length of the
dash and the length of the space between each dash - the stroke will be dashed evenly. If `stroke-dasharry` is greater
than 0, then the smaller the value, the more dashed the stroke is, and the more tight the dashes are. If your stroke is
100px in length, and `stroke-dasharray` is set to 20, then you will have 20px of stroke followed by 20px of space,
repeating.

5. `stroke-dashoffset` defines where the stroke starts.

5. Now imagine that you have a very, very long `stroke-dasharray` value - as long as, or even longer than the path
itself. If the dash stroke starts at the end of the line (`stroke-dashoffset` set to 0) then your path would be 
invisible. But if your `stroke-dashoffset` is set at 0, then your path completely will consist of that single, big dash.

6. To animate a self-drawing line, set `stroke-dasharray` to equal the path length, and animate `stroke-dashoffset` from
the end of the path back to 0. To animate a self-erasing line (like in this example), animate `stroke-dashoffset` from
0 to the end of the path.

6. You can get SVG path length using Javascript.

    ```
    var path = document.querySelector('.path');
    var length = path.getTotalLength();
    ```

7. I had wanted to animate both the entry and exit of the microphone. Turns out that the animation needs to be
defined on the element in order for it to animate (duh!), so adding and removing multiple animations won't work - 
they won't play the way you'd expect. The best you could do was to add one single animation for entry or exit, and 
that's it. I've been looking at other people's entries, and the best that anyone could do was use `transition` instead
of `animate` to animate the entry and exit of the mic and dots. They pretty much sacrificed the bounce effect for
consistency. However, their keyframe animations still stopped right away - the svg circle, for instance, snapped back. 
(Still, the circle is less noticable than the mic icon)

8. Lesson to self: you can still use `transition` for entry-exit animations. Easy, zero javascript, zero config. Don't 
forget these advantages. You can define transitions independently:

   ```
   transition: transform .6s ease 0s, opacity 1s ease 0s;
   ```

9. Someone used one `<span>` and pseudo-elements to create the whole microphone. And another `<span>` (circle-shaped)
with box-shadow to create the dots. And they used one animation for three dots, animating box-shadow. That's... that's
impressive. I am seriously humbled. This is the best snippet I've seen so far - I mean the best among all the
entries of all the previous challenges. Pen here: <https://codepen.io/pder/pen/eQadEb>

10. Another entry animated the mic's scale and used transition on its' opacity. The mic would bounce and fade out, but 
it would ony fade in - no bounce. Still, pretty nice visual effect. For some reason if you try to animate opacity and
use transition at the same time, (apparently) animation takes precedence and the transition won't take effect.
