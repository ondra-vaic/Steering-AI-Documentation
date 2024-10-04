---
sidebar_position: 1
---

# Concepts
This page will give you a basic introduction into most important concepts and terms.

## Steering Systems

A **Steering System** is a Unity `System` [link] which derives from `BaseSteeringSystem`. It loads a `SteeringSystemAsset` at a given path and then runs all of the system's **Behaviors** for all entities in the scene which have the corresponding **Main Tag** assigned. Finally, the results of behaviors are passed into the selected **Combiner**, which combines all behaviors' results into a single final desired velocity [link] which the entity should travel at.

 In the previous example [link], this was:

- **Steering System** - `SampleSteeringSystem`
- **Steering System Asset** - `SampleSteeringSystemAsset`
- **Main Tag** - `SampleEntityTagComponent`
- **Behaviors** - `GoForwardJobWrapper`
- **Combiner** - `MergeVelocityResultsJobWrapper`

## Queries

There are three types of queries which you should understand. Queries collect entities or other information from the scene, and pass it to behaviors. 

### Entity Queries

**Entity Queries** are part of Unity's ECS [link]. They find all entities in the scene which have some set of components on them.
In the example, the `SampleSteeringSystem` finds all entities which have a `SampleEntityTagComponent` and `GoForwardComponent` (and components added by the `SteeringEntityAuthoring`). These entities are then passed to the `GoForwardJobWrapper`, which suggests which way each entity should go. This is the systems main entity query. 

### Neighbor Queries

**Neighbor Queries** are used by **Neighbor Behaviors**. Given the results of two Entity Queries, A and B, a neighbor query finds a number of it's 'neighbors' which satisfy some conditions. Normally they find `k` nearest entities [link], but it's possible to add your own [link]. The neighbors are then passed into neighbor behaviors [link].

For example:

***Entity Query A*** - [*a1*, *a2*, *a3*]

***Entity Query B*** - [*b1*, *b2*, *b3*, *b4*]

***Neighbor Query AB***
    - *a1* -> [*b1*, *b3*]
    - *a2* -> [*b2*, *b3*]
    - *a3* -> [*b1*, *b4*]

In this example the *a1*'s two closest neighbors are *b1* and *b2* etc.

:::note
DebugJobWrapper [link] can help you visualize the results of neighbor queries.
:::

[img]

### Ray Queries

**Ray Queries** are used by **Ray Behaviors**. Given the results of an Entity Query, a ray query casts a number of rays into the world per each entity. The results of these ray casts are then passed into ray behaviors [link].

[img]

## Behaviors

**Behaviors** are the main driver of what the entities do. They receive a result of the Steering System's main entity query, and for each entity calculate one desired velocity to travel at. They can also receive additional information like a result of a neighbor query. 

Normally they give results of type `VelocityResult` which contains the following properties:
- `float3 Direction` - Which direction to travel in.
- `float Speed` - What speed to travel at.
- `float DirectionDesire` - How much (0, 1) do we want to travel in `Direction`.
- `float SpeedDesire` - How much (0, 1) do we want to travel at `Speed`.
- `byte Priority` - What is the priority (0, 255) of this behavior.

:::tip
If you want your behaviors to return more information, you can implement your own 'workflow' [link].
:::

### Simple Behaviors

**Simple Behaviors** are the most basic type of behaviors. They only receive results of the main entity query, and return `VelocityResult` for each entity. This is for example the `GoForwardJobWrapper`[link] or a wandering behavior `WanderingJobWrapper` [link].

### Neighbor Behaviors

**Neighbor Behaviors** let entities react to other entities. This is useful for example for group behaviors like flocking [link]. These behaviors receive the results of the main query and a neighbor query. Then for each entity they loop through all it's neighbors to determine a `VelocityResult`. 

### Ray Behaviors

**Ray Behaviors** let entities react to the physical environment. This is especially useful for example for collision avoidance [link]. These behaviors receive the results of the main query and a ray query. Then for each entity they loop through all it's raycasts to determine a `VelocityResult`. 

## Combiners

**Combiners** tie all the `VelocityResult`s from behaviors together at the end. Each behavior says what the entity should do. Combiners take all of the entity's `VelocityResult`s and write to each entity's `DesiredVelocityComponent` [link].

## Movement Systems

**Movement System**, in the previous example `Movement2DSystem` [link], takes a look the entity's current velocity `VelocityComponent` and `DesiredVelocityComponent` and calculates a new `VelocityComponent` which will move the entity. They are a separate system from implementations of `BaseSteeringSystem`.

## Components

**Components** are the *C* from the Unity's ECS. They are simply data attached to entities. Here, each behavior expects that there is a component of a certain type on the entities it works with. The components parametrize the behaviors, for example how strong their influence should be. This can be done per entity. In the previous example, you can for example change `Speed` on the `GoForwardComponent`, to speed up the entity.