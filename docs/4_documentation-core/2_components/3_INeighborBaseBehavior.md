---
sidebar_position: 3
---

# INeighborBaseBehavior


```csharp title="ISimpleBaseBehavior.cs"
[Serializable]
public struct NeighborBaseBehavior : IActivable
{
    public byte Priority;
    // highlight-start
    public float MaxDistance;
    public float MaxAngle;
    // highlight-end
    public float DirectionStrength;
    public float SpeedStrength;
    
    public bool Debug;
    public Color Color;
    public float DebugScale;

    [field: SerializeField] public bool IsActive { get; set; }
}
```