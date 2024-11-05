---
sidebar_position: 5
---

# Unmanaged Animation Curve

Unity provides animation curves with the `AnimationCurve` class. Unfortunately as of now this is a class and so cannot be used inside burst compiled jobs. `AnimationCurveUnmanaged` can be used to bypass this restriction. The following snippet shows using `AnimationCurveUnmanaged` inside a implementation of a [simple behavior](/docs/documentation-core/behaviors/simple-behaviors/overview).

```csharp title="Sample usage of AnimationCurveUnmanaged"
[BurstCompile]
struct SampleJob : ISimpleBehaviorJob<SampleComponent, VelocityResult>
{
    // highlight-next-line
    public AnimationCurveUnmanaged Curve;
        
    public VelocityResult Execute(EntityInformation<SampleComponent> entity)
    {
        // highlight-next-line
        float x = Curve.Sample(0.1f);
        ...
        return result;
    }
}

public class SampleJobWrapper : ISimpleBehaviorJobWrapper
{
    // highlight-next-line
    [SerializeField] private AnimationCurve animationCurve;
        
    public JobHandle Schedule(...)
    {
        // highlight-next-line
        AnimationCurveUnmanaged curve = new AnimationCurveUnmanaged(animationCurve, 100);
            
        var outDependency = new SampleJob
        {
            // highlight-next-line
            Curve = curve
        }.Schedule<SampleJob, SampleComponent, VelocityResult>(...);
            
        // highlight-next-line
        curve.Dispose(outDependency);
        return outDependency;
    }
}
```