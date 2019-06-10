# 052

Time taken: ~1.5hrs

This is me being very silly here, but apparently PostCSS plugins does not have very good support for nested variables
in iterations. It can't really do this:

```scss
@for $ring through 0 to 10 {
  $dotsPerCircle: calc($ring * 6 + 18);
  @for $dot from 0 to $dotsPerCircle {
    // whatever
  }
}
```

Which is ridiculous. It can do that with `var(--something)`, but there is no documentation that tells me how to
dynamically change this variable value in CSS. I assume SCSS can do this, so I switched momentarily before I realized
that while SASS was not producing errors, it was not compiling the inner loop either. It totally skipped that. It
only compiled correct CSS when I set the inner loop to be some static, predefined value, which *I could have done with
PostCSS anyway*. That's a pain. It might have something to do with my Parcel configuration (or lack thereof), but I 
couldn't get SCSS to behave exactly like, well, SCSS. I couldn't even get SCSS to recognize `#{$var}` syntax, which
probably indicates that something is very, very wrong.

Me no smash computer.

So I ended up thinking... Hey, I could write styles from `dot-0` to `dot-71`, it doesn't matter, because if some dots
don't exist they wouldn't be rendered anyway. So. Ugly code, angry 🐍, but at least it does the job.

Another thing here is the dot. I rotated each dot around the center of the ring (obviously you **have** to rotate the 
dot, can't get away with any simpler implementation) - and when I was writing the animation I realized that I couldn't
just animate the damn dot. Because it was transformed already. And every single dot was transformed differently. I
would have to write 720 animations, one for every single damn dot, to scale it and then rotate it. Sure this could be 
done in the loop, but is the extra code (extra bandwidth consumption) worth it? Instead, I could add a div inside 
each dot and just animate that damn thing, but would the extra divs (extra DOM tree nodes) be worth it? Currently the 
effect is nice and smooth on my machine, but today the `100dayscss.com` page is a pain in the ass to navigate on my 
iPhone - too many goddamn divs. Should I write both and try them out? See which one is better?

I don't know; I ended up doing things the easy way, because it's a Monday and I have other things to write. Things that
actually give me an income.

Apart from that, this exercise is pretty trivial. I'm starting to get the hang of this animation shit.

<hr />

I know my CSS looks like SCSS anyway. It's not even written like industry-style next generation CSS. On weekdays I'm
busy with other things, and on weekends my grandmother comes in my room at random times to talk to me about random
things; it bothers me enough that I always feel super depressed and anxious and antisocial and not wanting to code.
Not an excuse, just a fact. Some people absolutely hate small talk (I'm stopping before this turns into a rant).

One thing I'm realizing about community-driven projects: they get abandoned really quick. A nice fork of `postcss-for`
that allowed variables in nested loops hasn't been updated for years. `postcss-for` isn't actively maintained either. 
I guess it's only the big-guns that are reliable (even then you can't count on them to not drop any features, because 
ESLint has just dropped its official JSDoc lint checking). The thing with PostCSS is that it's incredibly plugin-based 
(and so is Webpack), and the plugins are incredibly community-driven (not entirely the case with Webpack here though); 
so most of it's existing plugins are simply... unreliable. Autoprefixer and Lost are among the very few well-maintained
plugins. I know so many developers are hyping over PostCSS, but I personally think that LESS and SCSS and other 
well-maintained centralized preprocessors aren't entirely replaceable. Of course you could use PostCSS to post-process
stuff, but I don't think I can place all my eggs in a community-driven basket. It's the same old rule: no pay, no play;
the authors will gradually abandon these repos, the cost of transferring repository ownership is too high, and another
plugin dies.

It's like how human civilization dies out.

Oh dear.
