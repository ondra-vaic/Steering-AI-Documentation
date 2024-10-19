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

Draws all the entities passed to it as circles. It can be useful for debugging.

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

Mkes the entity follow a given path. 

### FollowPathJob

The behavior affects both direction and the speed. This behavior is unusual from the others, because it uses an additional system, the `PathUpdateSystem`. The system updates `FollowPathComponent.CurrentTarget` for each entity when it reaches it's previous target on the path. The behavior then returns direction to the current target at constant speed with constant desires.

This behavior outputs the following: 
- `DesiredDirection` - *Direction to `FollowPathComponent.CurrentTarget`*
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - `Speed` *(constant)*
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

### FollowPathComponent

The main interesting properties to adjust on `FollowPathComponent` are:
- `Speed` - *how fast the entity should travel*
- `DistanceEpsilon` - *threshold distance to current target where the entity switches to next point*
- `BaseData.DirectionStrength` - *determines `DirectionDesire`*
- `BaseData.Priority` - *priority*

### Path

Path can be created in the editor as ordered list of `Transform` using `PathPoints` class. There is also an implementation of ordered list of `PathPoints` called `MultiPath`. The `FollowPathAuthoring` should have a reference to an instance of either of these classes. This set up is shown in the *Move 25D Sample* [link].

## GoForward

Makes the entity go in the direction of it's forward direction. 

### Common usage

Most behaviors influence only the direction, but not speed. If no behaviors used by the entity influences the speed, the entity will simply not move anywhere. To resolve this issue, you can add this behavior which will set a target speed for the entity. Moreover having a small tendency to always go in the current direction helps to reduce noise in the overall movement. Having **GoForward** is almost always useful for these two reasons, alternetively the **Wandering** provides these benefits too, plus makes the entity wander around randomly.

:::tip
Using either `GoForwardJobWrapper` or `WanderingJobWrapper` is almost always a good idea. They both always return a non-zero direction, speed, and desires. This ensures that an entity always has something to do. 
:::

### GoForwardJob

This behavior outputs the following: 
- `DesiredDirection` - *the entity's current forward direction*
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - `Speed` *(constant)*
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

### GoForwardComponent

It is also useful to use some low but non-zero `DirectionStrength` and the lowest priority. Having the tendency to always go in the current direction helps to reduce noise from other behaviors.

The main interesting properties to adjust on `GoForwardComponent` are:
- `Speed` - *how fast the entity should travel*
- `BaseData.DirectionStrength` - *determines `DirectionDesire`*
- `BaseData.SpeedStrength` - *determines `SpeedDesire`*
- `BaseData.Priority` - *priority*

## Homing

Makes the entities go back towards a predefined home position if they get too far from it. It is very useful to constraint entities to some area.

### HomingJob

This behavior outputs the following: 
- `DesiredDirection` - *direction to home*
- `DirectionDesire` - *from `0` to `DirectionStrength` as distance to home goes from `MinRadius` to `MaxRadius`*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

### HomingComponent

The main interesting properties to adjust on `HomingComponent` are:
- `HomePosition` - *the position of the home*
- `MinRadius` - *distance to home where the behavior has no effect*
- `MaxRadius` - *distance to home where the behavior has maximum effect*
- `ActivationP` - *power for shaping the interpolation of `DirectionDesire`.*
- `BaseData.DirectionStrength` - *multiplies `DirectionDesire`*
- `BaseData.Priority` - *priority*

-------
## KeepHeight

Makes the entities stay within a specified range of `y` coordinates. It can be for example useful to restrict how high the entities will fly.

### KeepHeightJob

This behavior outputs the following: 
- `DesiredDirection` - *direction up or down back to the zone if `y` is outside `MinY` and `MaxY`*
- `DirectionDesire` - *from `0` to `DirectionStrength` as distance from either boundaries goes from `0` to `CalmZoneHeight`*
- `DesiredSpeed` - `0` *(constant)*
- `SpeedDesire` - `0` *(constant)*
- `Priority` -  `Priority` *(constant)*

### KeepHeightComponent

The main interesting properties to adjust on `KeepHeightComponent` are:
- `MaxY` - *maximum y coordinate of the entity*
- `MinY` - *minimum y coordinate of the entity*
- `CalmZoneHeight` - *at this distance from either boundary, the behavior has maximum effect*
- `BaseData.DirectionStrength` - *multiplies `DirectionDesire`*
- `BaseData.Priority` - *priority*

-------

## Wandering

Makes the entity wander around the world smoothly changing the desired direction and speed. 

:::tip
Using either `GoForwardJobWrapper` or `WanderingJobWrapper` is almost always a good idea. They both always return a non-zero direction, speed, and desires. This ensures that an entity always has something to do. 
:::

### WanderingJob

This behavior outputs the following: 
- `DesiredDirection` - *random direction smoothly changing over time*
- `DirectionDesire` - `DirectionStrength` *(constant)*
- `DesiredSpeed` - *random speed smoothly changing over time between `MinSpeed` and `MaxSpeed`*
- `SpeedDesire` - `SpeedStrength` *(constant)*
- `Priority` -  `Priority` *(constant)*

### WanderingComponent

The main interesting properties to adjust on `WanderingComponent` are:
- `MaxUpDownAngle` - *maximum possible angle between the returned desired direction and *XZ* plane* 
- `XFrequency` - *frequency of desired direction change in the *XZ* plane* 
- `YFrequency` - *frequency of desired direction change in it's `y` component* 
- `SpeedFrequency` - *frequency of the speed changing*
- `MinSpeed` - *minimum desired speed*
- `MaxSpeed` - *maximum desired speed*
- `BaseData.DirectionStrength` - *determines `DirectionDesire`*
- `BaseData.SpeedStrength` - *determines `SpeedDesire`*
- `BaseData.Priority` - *priority*