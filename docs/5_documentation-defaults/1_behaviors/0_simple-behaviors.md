---
sidebar_position: 0
---

# Simple Behaviors

There are several simple behaviors included in the *Defaults* package. This page contains an overview of them. The main focus will be on the components which drive them. 

## Components
All the components used with simple behaviors must implement `ISimpleBaseBehavior` and so they contain a property of type `SimpleBehaviorData` [link]. Below is an example of `GoForwardComponent` to illustrate this. The component has `SimpleBehaviorData BaseData` and a custom property `float Speed`. You can set properties on `GoForwardComponent` in the inspector, as is shown in the image below.

<img src="/img/Defaults/GoForwardComponent.png" alt="Description of the image"/>
*`GoForwardComponent` in the inspector.*

:::tip
All components used for simple behaviors contain `BaseData` and then some properties unique to the behavior.
:::

```csharp
public interface ISimpleBaseBehavior
{
    public SimpleBehaviorData BaseData { get; set; }
}

public struct SimpleBehaviorData
{
    public byte Priority; // The higher the priority the more important
    public float DirectionStrength; // Multiplier for DirectionDesire in the VelocityResult
    public float SpeedStrength; // Multiplier for SpeedDesire in the VelocityResult
    ...
}

// highlight-start
[Serializable]
public struct GoForwardComponent : IComponentData, ISimpleBaseBehavior
{
    public float Speed; // Custom property for GoForwardComponent
    [field: SerializeField] public SimpleBehaviorData BaseData { get; set; }
}
// highlight-end
```
## DebugSimpleJobWrapper 

## AlignUpJob

## FollowPathJob

## GoForwardJob

## HomingJob

## KeepHeightJob

## KeepSpeedJob

## WanderingJob
