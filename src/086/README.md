# 086

Time taken: ~20mins

Things I learnt:

* Easing functions really matter. I tried using `ease-in-out` for this and
it looked like shit. Changed it to an ease-out sine with much better results
(apparently pendulums operate through gravity - there's some sine-like
stuff going on)

* The animation at-rules are easy on the eyes, but it's harder than I thought
to actually write them - had weird values and everything before I tried using
`alternate` and an animation delay. Animation delays actually work in this
challenge, because you're delaying the entire animation sequence.
