---
sidebar_position: 3
---

# INeighborBaseBehavior

Components to be used with neighbore behaviors must implement `INeighborBaseBehavior`. It requires the component to have `NeighborBehaviorData` member with fields which are internally used by the framework. The fields are the same with [`ISimpleBaseBehavior`](/docs/documentation-core/components/ISimpleBaseBehavior), with the addition of:

- **MaxDistance** - *maximum radius where neighbors can be detected*
- **MaxAngle** - *field of view where neighbors can be detected*

```csharp title="INeighborBaseBehavior.cs"
public interface INeighborBaseBehavior
{
    public NeighborBehaviorData BaseData { get; set; }
}

[Serializable]
public struct NeighborBaseBehavior : IActivable
{
    public byte Priority;
    public float DirectionStrength;
    public float SpeedStrength;

    // highlight-start
    public float MaxDistance;
    public float MaxAngle;
    // highlight-end
    
    public bool Debug;
    public Color Color;
    public float DebugScale;

    public bool IsActive { get; set; }
}
```