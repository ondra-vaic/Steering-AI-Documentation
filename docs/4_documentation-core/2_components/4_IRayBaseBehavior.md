---
sidebar_position: 4
---

# IRayBaseBehavior


```csharp title="ISimpleBaseBehavior.cs"

public interface IRayBaseBehavior
{
    public RayBaseBehavior BaseData { get; set; }
}

[Serializable]
public struct RayBaseBehavior : IActivable
{
    public byte Priority;
    // highlight-start
    public float MaxDistance;
    // highlight-end
    public float DirectionStrength;
    public float SpeedStrength;
    
    public bool Debug;
    public Color Color;
    public float DebugScale;

    [field: SerializeField] public bool IsActive { get; set; }
}
```