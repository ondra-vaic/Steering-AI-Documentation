---
sidebar_position: 2
---

# ISimpleBaseBehavior

Components to be used with simple behaviors must implement `ISimpleBaseBehavior`. It requires the component to have `SimpleBehaviorData` member with these fields which are internally used by the framework:

- **Priority** - *(0, 255) what is the priority of this behavior*
- **DirectionStrength** - *(0, 1) how strongly (relative to other behaviors) should this behavior influence the entity's direction*
- **SpeedStrength** - *(0, 1) how strongly (relative to other behaviors) should this behavior influence the entity's speed*
- **IsActive** - *should the behavior run*
- **Debug** - *toggle to draw debug elements*
- **DebugScale** - *scale for the debug elements*
- **Color** - *color for the debug elements*

```csharp title="ISimpleBaseBehavior.cs"
public interface ISimpleBaseBehavior
{
    public SimpleBehaviorData BaseData { get; set; }
}

[Serializable]
public struct SimpleBehaviorData : IActivable
{
    public byte Priority;
    public float DirectionStrength;
    public float SpeedStrength;
    
    public bool Debug;
    public Color Color;
    public float DebugScale;

    public bool IsActive { get; set; }
}
```