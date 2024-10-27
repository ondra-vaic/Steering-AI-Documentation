---
sidebar_position: 4
---

# IRayBaseBehavior

Components to be used with neighbore behaviors must implement `IRayBaseBehavior`. It requires the component to have `RayBehaviorData` member with fields which are internally used by the framework. The fields are the same with `ISimpleBaseBehavior`, with the addition of:

- **MaxDistance** - *maximum distance of ray hits to react to*

```csharp title="ISimpleBaseBehavior.cs"
public interface IRayBaseBehavior
{
    public RayBehaviorData BaseData { get; set; }
}

[Serializable]
public struct RayBehaviorData : IActivable
{
    public byte Priority;
    public float DirectionStrength;
    public float SpeedStrength;
    
    // highlight-start
    public float MaxDistance;
    // highlight-end
    
    public bool Debug;
    public Color Color;
    public float DebugScale;

    public bool IsActive { get; set; }
}
```