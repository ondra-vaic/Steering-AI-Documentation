---
sidebar_position: 0
---

# Overview

Components are used to parametrize the behaviors per entity. A simple example is [`GoForwardAuthoring`](/docs/documentation-defaults/behaviors/simple-behaviors/go-foward#goforwardcomponent), which adds the [`GoForwardComponent`](/docs/documentation-defaults/behaviors/simple-behaviors/go-foward#goforwardcomponent) to an entity. This component's data can then be used inside the `Execute` method of [`GoForwardJob`](/docs/documentation-defaults/behaviors/simple-behaviors/go-foward#goforwardjob), where it's passed in as `EntityInformation<GoForwardComponent>`. 

There are three interfaces [1], [2], [3], each matching one of the three kinds of behaviors. All these interfaces share the following properties:

- **Priority** - *(0, 255) what is the priority of this behavior*
- **DirectionStrength** - *(0, 1) how strongly (relative to other behaviors) should this behavior influence the entity's direction*
- **SpeedStrength** - *(0, 1) how strongly (relative to other behaviors) should this behavior influence the entity's speed*
- **IsActive** - *should the behavior run*
- **Debug** - *toggle to draw debug elements*
- **DebugScale** - *scale for the debug elements*
- **Color** - *color for the debug elements*

<img src="/img/Defaults/GoForwardComponent.png" alt="Description of the image"/>
*Example of [`GoForwardComponent`](/docs/documentation-defaults/behaviors/simple-behaviors/go-foward#goforwardcomponent) in the inspector, in contains a `Speed` property on top of the `BaseData`.*

