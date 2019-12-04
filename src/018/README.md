# 018

Time taken: ~1hr

Things I learnt:

* I've debugged this for half an hour, and then realized that `overflow: hidden` invalidates backface visibility.
Can't find any specs on the web that explain why. There is one Stack Overflow link that led to a spec, but
the spec has been updated since and there is nothing explaining it now.
