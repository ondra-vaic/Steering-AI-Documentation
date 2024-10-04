---
sidebar_position: 1
---

# Minimal Set Up

To set up a new system, you need two things.

- **Entity** - An entity controlled by the steering system
- **Steering System** - The system which will controll this entity

## Entity Set Up 

Create a new prefab and add SteeringEntityAuthoring [link] component to it. Then add a component for one of the three avaliable movement systems - `Movement2DAuthoring` [link] Movement3DAuthoring [link] Movement25DAuthoring [link].

Create a tag component [link] for it. This tag is needed to tell the steering system which entities belong to it.

```csharp title="SampleEntityTag.cs"
// highlight-next-line
[SteeringEntityTag]
public struct SampleEntityTagComponent : IComponentData {}
```

:::note
Don't forget to mark the type with `[SteeringEntityTag]` attribute. This let's the editor find this tag. 
:::

In the Steering Entity Authoring, select this new tag from the dropdown and add it. Your prefab should now match the following:

[img]

## Steering System Set Up

Right click into your folder and select `Create/SteeringSystem`. Rename the newly created asset to `SampleSteeringSystemAsset`, then select it and mark it as addressable. 

[img]

Create a new C# script which will load and run this system. 

```csharp title="SampleEntityTag.cs"
[UpdateInGroup(typeof(SteeringSystemsGroup))]
public partial class SampleSteeringSystem : BaseSteeringSystem
{
    protected override string getAssetReferenceName()
    {
        return "Assets/Sample/SampleSteeringSystemAsset.asset";
    }
}
```
:::warning
Make sure the path matches addressable address of the system, as shown in [img link].
:::

Double click the `SampleSteeringSystemAsset` to open it in the editor window [link]. Drag and drop your entity's prefab there. This let's the editor window show you which components you are still missing on your entity (on right). The entity is still missing the `DesiredVelocityComponent`, click on the plus button to add it to the prefab. 

[img]

To verify that everything is set up correctly, let's add a simple behavior which will make the entity go in it's forward direction. Select the `Single Behaviors` tab. In the dropdown window, find `GoForwardJobWrapper` and add it. It's associated `GoForwardComponent` is now missing on the prefab add it as in the previous step. 

Drag and drop this entity into the scene and play. The entity should start moving in the direction of it's forward direction.

[video]

:::note
Dragging and dropping the prefab into a Scene will prompt you to create a new SubScene. Unfortunatelly as of now this is necessary when working with ECS. To learn more about SubScenes and working with entities, refer to the Unity documentation [link].
:::

// TODO PUT STEP TO CHECK COMBINER