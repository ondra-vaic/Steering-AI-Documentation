---
sidebar_position: 0
---

# Overview

Components are used to parametrize the behaviors per entity. A simple example is `GoForwardAuthoring`, which adds the `GoForwardComponent` to an entity. This component's data can then be used inside the `Execute` method of `GoForwardJob`, where it's passed in as `EntityInformation<GoForwardComponent>`. 

There are three interfaces [1], [2], [3], each matching one of the three kinds of behaviors. All these interfaces share the following properties:

- **Priority** - *(0, 255) what is the priority of this behavior*
- **DirectionStrength** - *(0, 1) how strongly (relative to other behaviors) should this behavior influence the entity's direction*
- **SpeedStrength** - *(0, 1) how strongly (relative to other behaviors) should this behavior influence the entity's speed*
- **IsActive** - *should the behavior run*
- **Debug** - *toggle to draw debug elements*
- **DebugScale** - *scale for the debug elements*
- **Color** - *color for the debug elements*


## --- Components

Components are the main way to alter the behaviors. As a user, you will likely need to fine-tune their values for your specific needs. 

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