# 070

Time taken: ~15mins

Things I learnt:

Transforming a floated div doesn't make all other floated divs shuffle to fit it. Apparently once the div is positioned, it's height and width is "defined", then transforming will have no effect on the float. 

I've searched a tiny little bit on Google and no-one has said anything on this subject - apparently it doesn't warrant discussion. How does float really work, anyway? I know about `clear` and collapsing margins and that shit, but how are they actually calculated? Or rather, how is `transform` calculated, and why doesn't it affect any other floated elements?

I floated the cards because it's the easiest thing to do; far easier than positioning them, using flex-wrap or grid layouts, and it honestly surprised me that the effect worked on my first try. I didn't expect it to work;
I actually expected it to `not` work, and then I'll have to write wrappers and stuff... Would the same effect be
achieved if I positioned the elements? If I gave the outer frame a flex layout with a flex wrap property?

I don't know. The exercise is simple; it just makes me think.
