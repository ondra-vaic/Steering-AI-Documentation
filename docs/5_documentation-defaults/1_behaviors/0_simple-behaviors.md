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

The behavior always outputs `default(VelocityResult)` for every entity. That means it does not affect the behavior at all.

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
- `DirectionDesire` - *grows with angle between `float3(0, 1, 0)` and entity's up*
- `DesiredSpeed` - 0
- `SpeedDesire` - 0
- `Priority` -  `baseData.Priority`

### AlignUpComponent

The `AlignUpComponent` contains only `BaseData`. The main interesting properties to adjust on the component are:
- `BaseData.DirectionStrength` - *multiplier for `DirectionDesire`*
- `BaseData.Priority` - *priority*

:::tip
These two will likely be the most important properties for most behaviors.
:::

## FollowPath

## GoForward

## Homing

## KeepHeight

## KeepSpeed

## Wandering
