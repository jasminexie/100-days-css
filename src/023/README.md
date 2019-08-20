# 023

Time taken: ~1hr

Things I learnt:

* I'm BACK. It's been a while. And this is another challenge where I
hand-coded everything (including position, animations, everything) by myself.
I'm quite proud; this looks very, very similar to the original.

* `animation-fill-mode`. New property that I haven't previously used. This
extends the effect defined in the animation keyframe: a value of `forwards`
will make the element retain the state of the last keyframe after the
animation. A value of `backwards` will apply values of the first keyframe
and retain this during the animation delay period. `both` will apply both
`forwards` and `backwards` effects. Something I love about this: you won't
have to explicitly manage a start or end state, or set it explicitly 
identical to a start of end keyframe state. Less declaration, less
complexity. Extremely useful.
