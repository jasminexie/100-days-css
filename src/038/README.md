# 038

Time taken: ~20mins

Things I learnt:

* Don't try to animate `tranform` with too many transformations. The result
may be choppy (in this case, there will be a big line down the center).

* So instead of using `transform` directly on the shield to center it, use
a container object. The scaling will be much smoother. 

