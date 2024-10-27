---
sidebar_position: 2
---

# Overview

Components are used to parametrize the behaviors per entity. A simple example is `GoForwardAuthoring`, which adds the `GoForwardComponent` to an entity. This component's data can then be used inside the `Execute` method of `GoForwardJob`, where it's passed in as `EntityInformation<GoForwardComponent>`. 

There are three interfaces, each matching one of the three kinds of behaviors, but they all share these properties:

- **Priority** -- 
- **DirectionStrength**;
- **SpeedStrength**;
      

## Creating a new component

A component in ECS is a little bit more work to set up than when using game objects. The following is code needed for `GoForwardComponent`. There are three parts. 

- `GoForwardComponent` - Struct which contains the actual data which will be attached to an entity. Has to implement ISimpleBaseBehavior in order to be used in a *Simple Behavior*.
- `GoForwardAuthoring` - Monobehavior which will be attached to the `GameObject` in editor. It is only used for serialization in the scene.
- `GoForwardBaker` - Receives the authoring and constructs the entity from it. In this case simply adding the `authoring.GoForwardComponent` as component.

```csharp title="GoForwardAuthoring.cs"
using System;
using SteeringAI.Core;
using Unity.Entities;
using UnityEngine;

// The component which will be attached to an entity, to be used with GoForwardJobWrapper
[Serializable]
public struct GoForwardComponent : IComponentData, ISimpleBaseBehavior
{
    public float Speed;      
    [field: SerializeField] public SimpleBehaviorData BaseData { get; set; }

    public static GoForwardComponent Preset => new()
    {
        Speed = 1,
        BaseData = SimpleBehaviorData.Preset
    };
}

// Boilerplate
[ComponentAuthoring(typeof(GoForwardComponent))] // needed for the editor
public class GoForwardAuthoring : MonoBehaviour
{
    public GoForwardComponent GoForwardComponent = GoForwardComponent.Preset;
}
    
// Boilerplate
public class GoForwardBaker : Baker<GoForwardAuthoring>
{
    public override void Bake(GoForwardAuthoring authoring)
    {
        var e = GetEntity(authoring, TransformUsageFlags.Dynamic);
        AddComponent(e, authoring.GoForwardComponent);
    }
}
```

:::note
The attribute `[ComponentAuthoring(typeof(GoForwardComponent))]` lets the steering system editor find the correct authoring to use when adding a missing component. The editor would know that an entity needs `GoForwardComponent` because the attribute `[JobWrapper(typeof(GoForwardComponent))]` declares it on the `GoForwardJobWrapper`.
:::


# this somewhere? 
# this somewhere? 

```csharp title="ISimpleBaseBehavior.cs"
[Serializable]
    public struct SimpleBehaviorData : IActivable
    {
        public byte Priority;
        public float DirectionStrength;
        public float SpeedStrength;
      
        [field: SerializeField] public bool IsActive { get; set; }
    
        public bool Debug;
        public Color Color;
        public float DebugScale;

        public static SimpleBehaviorData Preset => new()
        {
            Priority = 0,
            DirectionStrength = 0.5f,
            SpeedStrength = 0.5f,
            IsActive = true,
            Debug = false,
            DebugScale = 10,
            Color = Color.green,
        };
    }
```
