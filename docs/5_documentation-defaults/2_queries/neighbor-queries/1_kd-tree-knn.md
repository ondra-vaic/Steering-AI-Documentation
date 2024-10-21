---
sidebar_position: 1
---

# KD Tree KNN

For each entity finds maximum of `MaxNumNeighbors` within radius `MaxNeighborDistance`. It's also possible to limit the field of view with `MaxFOV`. Functionally it is exactly the same as `SpacialHashKNNJobWrapper`. 

This implementation has generally more stable framerate which does not depend on `MaxNeighborDistance` a lot, therefore it is generally a good default. However, in some scenarios `SpacialHashKNNJobWrapper` can provide better performance, proper profiling is always necessary.

*The code is based on public github repository [link] by [].*

:::tip
Neighbor queries can easily cost most of the resources needed to run a steering system. Try to limit the `MaxNumNeighbors` to minimum. 
:::
