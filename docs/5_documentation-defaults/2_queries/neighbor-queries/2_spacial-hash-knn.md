---
sidebar_position: 2
---

# Spacial Hash KNN

For each entity finds maximum of `MaxNumNeighbors` within radius `MaxNeighborDistance`. It's also possible to limit the field of view with `MaxFOV`. Functionally it is exactly the same as `KDTreeKNNJobWrapper`. 

This implementation can provide performance improvements over `KDTreeKNNJobWrapper`, especially for smaller `MaxNeighborDistance` or sparse groups.

:::tip
Neighbor queries can easily cost most of the resources needed to run a steering system. Try to limit the `MaxNumNeighbors` and `MaxNeighborDistance` to minimum. 
:::
