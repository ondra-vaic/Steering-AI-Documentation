---
sidebar_position: 0
---

# Overview

Components are used to parametrize the behaviors per entity. A simple example is `GoForwardAuthoring`, which adds the `GoForwardComponent` to an entity. This component's data can then be used inside the `Execute` method of `GoForwardJob`, where it's passed in as `EntityInformation<GoForwardComponent>`. 

There are three interfaces [1], [2], [3], each matching one of the three kinds of behaviors. All these interfaces share the following properties:

- **Priority** - *(0, 255) what is the priority of this behavior*
- **DirectionStrength** - *(0, 1) how strongly (relative to other behaviors) should this behavior influence the entity's direction*
- **SpeedStrength** - *(0, 1) how strongly (relative to other behaviors) should this behavior influence the entity's speed*
- **IsActive** - *should the behavior run*
- **Debug** - *toggle to draw debug elements*
- **DebugScale** - *scale for the debug elements*
- **Color** - *color for the debug elements*