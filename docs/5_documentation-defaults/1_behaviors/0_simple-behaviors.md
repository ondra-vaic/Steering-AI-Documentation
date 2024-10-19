---
sidebar_position: 0
---

# Simple Behaviors

There are several simple behaviors included in the *Defaults* package. This page contains an overview of them. Each job must have some things to work. For example, here are all the types relevant for wandering:

- **Job** - `WanderingJob` - *the logic of the behavior*
- **Component** - `WanderingComponent` - *how an entity responds to the behavior depends on properties of this component*
- **JobWrapper** - `WanderingJobWrapper` - *schedules the job*
- **Authoring** - `WanderingAuthoring` - *attaches the component to an entity in editor*

:::note
The two important pieces to focus on are the `-Job` and the `-Component`. The `-JobWrapper` and `-Authoring` are mostly only needed for editor functionality.
:::

:::tip
Every behavior in the defaults library follows the same naming pattern `BehaviorNameJob`, `BehaviorNameComponent`, `BehaviorNameJobWrapper` and `BehaviorNameAuthoring`.  
:::

## Components

Components are the main way to alter the behaviors. As a user, you will likely need to fine-tune their values for your specific needs. For this reason, the behaviors will mainly be explained in terms of their components. 

All the components used with simple behaviors must implement `ISimpleBaseBehavior`. This means they must contain a property `SimpleBehaviorData BaseData`[link]. Below is an example of `GoForwardComponent` to illustrate this. The component has the `BaseData` and a custom property `Speed`. You can set properties on an component in the inspector, as is shown in the image below.

<img src="/img/Defaults/GoForwardComponent.png" alt="Description of the image"/>
*`GoForwardComponent` in the inspector.*

:::tip
All components used for simple behaviors contain `BaseData` and then some properties unique to the behavior like `Speed`.
:::

```csharp
[Serializable]
public struct GoForwardComponent : IComponentData, ISimpleBaseBehavior
{
    // highlight-start
    public float Speed; // Custom property for GoForwardComponent
    // highlight-end
    [field: SerializeField] public SimpleBehaviorData BaseData { get; set; }
}
```
## DebugSimple

This behavior draws all the entities passed to it as circles. It can be useful for debugging.

### DebugSimpleJob

This behavior outputs the following: 
- `DesiredDirection` - `float.zero` *(constant)*
- `DirectionDesire` - `0` *(constant)*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `0` *(constant)*

### DebugSimpleComponent

The `DebugSimpleComponent` contains only `BaseData`. The main interesting properties to adjust on the component are:
- `BaseData.IsActive` - *mark it to activate the behavior*
- `BaseData.DebugScale` - *increase the size of the circle*
- `BaseData.DebugColor` - *color of the cirle*

## AlignUp

This behavior tries to prevent entites from flying up or down at too steep angles which may look unnatural. 

### AlignUpJob

The behavior affects only the direction, not speed. The `DesiredDirection` is the current direction of the entity projected on world's up. The `DirectionDesire` for this behavior increases with the angle difference between the world's up `float3(0, 1, 0)` and the entity's current direction. 

This behavior outputs the following: 

- `DesiredDirection` - *the current direction projected on `float3(0, 1, 0)`*
- `DirectionDesire` - *from `0` to `DirectionStrength` as angle between entity's up and `float3(0, 1, 0)` goes from `0` to `90` degrees.*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority`*(constant)*

### AlignUpComponent

The `AlignUpComponent` contains only `BaseData`. The main interesting properties to adjust on the component are:
- `BaseData.DirectionStrength` - *multiplier for `DirectionDesire`*
- `BaseData.Priority` - *priority*

:::tip
These two will likely be the most important properties for most behaviors.
:::

## FollowPath

This behavior makes the entity follow a given path. 

### FollowPathJob

The behavior affects both direction and the speed. This behavior is unusual from the others, because it uses an additional system, the `PathUpdateSystem`. The system updates `FollowPathComponent.CurrentTarget` for each entity when it reaches it's previous target on the path. The behavior then returns direction to the current target at constant speed with constant desires.

This behavior outputs the following: 
- `DesiredDirection` - *Direction to `FollowPathComponent.CurrentTarget`*
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - `Speed` *(constant)*
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

### FollowPathComponent

The main interesting properties to adjust on the component are:
- `Speed` - *how fast the entity should travel*
- `DistanceEpsilon` - *threshold distance to current target where the entity switches to next point*
- `BaseData.DirectionStrength` - *determines `DirectionDesire`*
- `BaseData.Priority` - *priority*

### Path

Path can be created in the editor as ordered list of `Transform` using `PathPoints` class. There is also an implementation of ordered list of `PathPoints` called `MultiPath`. The `FollowPathAuthoring` should have a reference to an instance of either of these classes. This set up is shown in the *Move 25D Sample* [link].

## GoForward

This behavior makes the entity go in the direction of it's forward direction.

### GoForwardJob

This behavior outputs the following: 
- `DesiredDirection` - *the entity's current forward direction*
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - `Speed` *(constant)*
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

### GoForwardComponent

The `GoForwardComponent` contains only `BaseData`. The main interesting properties to adjust on the component are:
- `BaseData.DirectionStrength` - *determines `DirectionDesire`*
- `BaseData.Priority` - *priority*

## Homing

## KeepHeight

## KeepSpeed

## Wandering
