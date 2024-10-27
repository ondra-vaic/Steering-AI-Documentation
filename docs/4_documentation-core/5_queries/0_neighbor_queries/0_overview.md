---
sidebar_position: 0
---

# Overview

Neighbor queries find *k* neighbors of each entity. The image below shows a `SteeringSystemAsset` with one group of *neighbor behaviors*. The selected neighbor query here is `KDTreeKNNJobWrapper`. It finds at most `MaxNumNeighbors` of neighbors which are less than `MaxNeighborDistance` units away. `MaxFOV` can be used to specify the field of view of each entity. In this case, the query only considers entities with `_6_SampleBehaviorsTagComponent`, here it's the same tag as the *Main Tag* but that is not necessary. It is also possible to add more tags. In that case a potential neighbors must have at least one of these tags on them. 

<img src="/img/samples/flocking/Asset.png" alt="Description of the image"/>
*Image of a `SteeringSystemAsset` from sample [link]. `KDTreeKNNJobWrapper` is selected as implementation of neighbor query which will search among entities tagged with `_6_SampleBehaviorsTagComponent`.*

<video controls width="800">
    <source src="/videos/DebugJob.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
*Video showing a neighbor query visualized. The connections show neighbor relationships. The radii show the maximum distance to consider a neighbor.*

:::tip
`DebugJobWrapper` can help to visualize a neighbor query, as in the video.
:::