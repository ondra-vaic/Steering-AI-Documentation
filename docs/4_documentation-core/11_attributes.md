---
sidebar_position: 11
---

# Attributes

The framework uses several attributes to achieve type safe and user friendly experience.

## SteeringEntityTagAttribute

Marks a tag component to show up in the editor window for `SteeringSystemAsset` and inspector of `SteeringSystemAsset`.

```csharp title="SampleEntityTag.cs"
// highlight-next-line
[SteeringEntityTag] // Lets the editor find this tag. 
public struct SampleEntityTagComponent : IComponentData {}
```

## JobWrapperAttribute

Declares that a job wrapper requires an entity to have a specific component. In case of `INeighborBehaviorJobWrapper`, the second parameter declares which component the neighbor should have. There are also overloads to handle arrays of components. The component dependencies can then be displayed and resolved in the editor.

```csharp title="MultiHomingJobWrapper.cs"
// highlight-next-line
// Lets the editor know that main entities need MultiHomingComponent and neighbors need HomeComponent
// highlight-next-line
[JobWrapper(typeof(MultiHomingComponent), typeof(HomeComponent))]
public class MultiHomingJobWrapper : INeighborBehaviorJobWrapper { }
```

## OutDataAttribute

This is to be used on all behavior job wrappers and the combiner. For behaviors, it declares type of data structure the behavior allocates and writes results to. In case of the combiner, it declares which type(s) of data structure(s) returned from the behavior job wrappers it can accept. After selecting a combiner in the editor, all dropdowns are refreshed to only offer behaviors whose output result type is compatible with the combiner. 

```csharp title="MultiHomingJobWrapper.cs"
// highlight-next-line
// Lets the editor know that this behavior outputs VelocityResults
// highlight-next-line
[OutData(typeof(VelocityResults))]
public class MultiHomingJobWrapper : INeighborBehaviorJobWrapper { }
```

```csharp title="CombineVelocitiesJobWrapper.cs"
// highlight-next-line
// Lets the editor know that this combiner accepts VelocityResults
// highlight-next-line
[OutData(typeof(VelocityResults))]
public class CombineVelocitiesJobWrapper : ICombineJobWrapper { }
```

## ComponentAuthoringAttribute

Declares that a `MonoBehaviour` authoring `X` authors a specific `IComponentData` component `T`. When the `SteeringSystemAsset` editor shows that there is a missing component of type `T` on the entity, it can find the authoring `X` which declares authoring `T`. When the plus or minus is clicked on the component `T`, the editor knows it should add or remove `X` from the entity. 

```csharp title="DebugSimpleAuthoring.cs"
// highlight-next-line
// Lets the editor match `DebugSimpleAuthoring` with `DebugSimpleComponent`
// highlight-next-line
[ComponentAuthoring(typeof(DebugSimpleComponent))]
public class DebugSimpleAuthoring : MonoBehaviour
{
    public DebugSimpleComponent DebugSimpleComponent;
}
```