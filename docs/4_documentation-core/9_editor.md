---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Editor

The editor for the `SteeringSystemAsset` let's you set up a system which controls entities. The system is set up modularly from behaviors. To open the editor, double click on any `SteeringSystemAsset`. 

<img src="/img/core/SteeringSystemMain.png" alt="Description of the image"/>

## Top Area

At the top, you can see the name of the steering system. On the right, a prefab for entity intended for this system should be assigned. This prefab needs to have `SteeringEntityAuthoring`. On the left is the tag which will be queried by this system. Only entities with this tag will be processed by this system.

<img src="/img/core/Editor/Top.png" alt="Description of the image"/>

## Query

This list shows which components should be attached to the entity. The components can be added or removed on the prefab with the plus and minus buttons. The list is determined from the set of used behaviors. Each behavior declares which components it needs in it's implementation.

<img src="/img/core/Editor/Query.png" alt="Description of the image"/>

## Behaviors

There are three types of behaviors, each with it's own section to set them up.

### Simple Behaviors

Simple behaviors can be simply added from the `behaviors` dropdown into the list of behaviors. Here the list contains `GoForwardJobWrapper` and `WanderingJobWrapper`.

<img src="/img/core/Editor/Single.png" alt="Description of the image"/>

### Neighbor Behaviors

Neighbor behaviors are grouped by *Neighbor Queries*. This let's multiple behaviors reuse the results of the expensive *Neighbor Query*, saving performance. In the image below is a single neighbor behavior group which contains a single neighbor behavior. 

<img src="/img/core/Editor/N3.png" alt="Description of the image"/>

In this section, you can select the implementation of a *Neighbor Query* and set it up. Here it's at most 7 (nearest) neighbors, at maximum distance of 10 units while considering full field of view - 360 degrees. The selected query below is `KDTreeKNNJobWrapper`.

<img src="/img/core/Editor/N4.png" alt="Description of the image"/>

This section shows which components the neighbors should have on them. The `required` section contains components which must be on the neighbors. For example when using `MultiHomingJobWrapper`, the entities which represent homes must have the `HomeComponent` on them. The other section is where tags to target which entities are potential neighbors can be added. A potential neighbor will be an entity with any of these tags.

<img src="/img/core/Editor/N2.png" alt="Description of the image"/>

This is where the neighbor behaviors can be added from the `Behaviors` dropdown into the list of behaviors.

<img src="/img/core/Editor/N1.png" alt="Description of the image"/>

### Ray Behaviors

Ray behaviors are grouped by *Ray Queries* to reuse their results. In the image below is a single ray behavior group which contains a ray neighbor behavior. 

<img src="/img/core/Editor/Ray1.png" alt="Description of the image"/>

In this section, you can select the implementation of a *Ray Query* and set it up. Here it's 20 rays, at maximum distance 10 units, intersecting with any layer. The selected query below is `Sweep2DCreateRaysJobWrapper`. 

<img src="/img/core/Editor/Ray4.png" alt="Description of the image"/>

This is where the ray behaviors can be added from the `Behaviors` dropdown into the list of behaviors.

<img src="/img/core/Editor/Ray3.png" alt="Description of the image"/>

## Combiner

This section will only be used if you implement your custom combiner [link]. If you did, then you can select it here. Selecting the combiner makes all the behavior dropdowns only show behaviors with output type compatible to the input type of the combiner. With the default `MergeVelocityResultsJobWrapper` the compatible input type is `VelocityResults`, which is the output type of all default behaviors.

<img src="/img/core/Editor/Combine.png" alt="Description of the image"/>
