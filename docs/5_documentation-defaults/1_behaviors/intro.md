---
sidebar_position: 0
---

# Intro

There are several simple behaviors included in the *Defaults* package. This page contains an overview of them. Each job must have some things to work. For example, here are all the types relevant for wandering:

- **Job** - `WanderingJob` - *implements the logic of the behavior*
- **Component** - `WanderingComponent` - *how an entity responds to the behavior depends on properties of this component*
- **JobWrapper** - `WanderingJobWrapper` - *schedules the job*
- **Authoring** - `WanderingAuthoring` - *attaches the component to an entity in editor*

:::note
The two important pieces to focus on are the `-Job` and the `-Component`. The `-JobWrapper` and `-Authoring` are mostly only needed for editor functionality.
:::

:::tip
Every behavior in the defaults library follows the same naming pattern `BehaviorNameJob`, `BehaviorNameComponent`, `BehaviorNameJobWrapper` and `BehaviorNameAuthoring`.  
:::

------------------
# DELETE OR MOVE THIS TO CORE

## Components

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