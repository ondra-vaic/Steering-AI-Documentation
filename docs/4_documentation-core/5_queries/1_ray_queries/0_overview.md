---
sidebar_position: 0
---

# Overview

Ray queries cast *k* rays to intersect the scene per each entity. The image below shows a `SteeringSystemAsset` with one group of *ray behaviors*. The selected ray query here is `Sweep2DCreateRaysJobWrapper`. It casts `NumRays` rays, to max distance of `MaxDistance`. The `Sweep2DCreateRaysJobWrapper` casts the rays in section of a circle with a given field of view `FOV`. The rays will only hit objects matching the selected `LayerMask`. 

<img src="/img/core/RayQuery.png" alt="Description of the image"/>
*Image of a `SteeringSystemAsset`. `Sweep2DCreateRaysJobWrapper` is selected as implementation of ray query to use for the `EnvironmentAvoidanceJobWrapper` behavior.*

<video controls width="800">
    <source src="/videos/Raycasts.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
*Video showing ray query visualized. The green arrows show rays which did not intersect the scene, the red arrows show a hit.*

:::tip
`DebugRayJobWrapper` can help to visualize a ray query, as in the video.
:::