---
sidebar_position: 7
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

<img src="/img/core/Editor/Single.png" alt="Description of the image"/>

### Neighbor Behaviors

<img src="/img/core/Editor/N1.png" alt="Description of the image"/>

<img src="/img/core/Editor/N2.png" alt="Description of the image"/>

<img src="/img/core/Editor/N3.png" alt="Description of the image"/>

<img src="/img/core/Editor/N4.png" alt="Description of the image"/>

### Ray Behaviors

<img src="/img/core/Editor/Ray1.png" alt="Description of the image"/>

<img src="/img/core/Editor/Ray2.png" alt="Description of the image"/>

<img src="/img/core/Editor/Ray3.png" alt="Description of the image"/>

<img src="/img/core/Editor/Ray4.png" alt="Description of the image"/>

## Combiner

<img src="/img/core/Editor/Combine.png" alt="Description of the image"/>

