# 061

Time taken: ~10mins

Things I learnt:

* I did this on a whim (pretending to be productive when I'm not). So I randomly selected a day I missed, and found that
the challenge was actually surprisingly similar to something AppAdhoc did with its homepage (<https://www.appadhoc.com/>).
I sucked at CSS while I was at that company, and it really, really surprised me how my leader, of all people, could write
beautiful CSS. So instead of doing what the challenge encouraged you to do (using two overlapping divs with different
(but similarly colored) gradients, animate their opacity), I did what AppAdhoc did: write a massive gradient background
and animate background position.

* Do NOT write a massive div. There's `background-size` - which can be something than the preset keywords. It has great
cross-browser support too.

* MDN: *If you use a gradient as the background and specify a background-size to go with it, it's best not to specify a size that uses a single auto component, or is specified using only a width value (for example, background-size: 50%).*
