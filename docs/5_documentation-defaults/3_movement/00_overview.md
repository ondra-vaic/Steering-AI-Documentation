---
sidebar_position: -1
---

# Overview

There are three movement systems implemented. One for [2D](/docs/documentation-defaults/movement/0_2D-movement), one for flying in [3D](/docs/documentation-defaults/movement/1_3D-movement) and [2,5D](/docs/documentation-defaults/movement/2_25D-movement) for walking on [`Collider`](https://docs.unity3d.com/ScriptReference/Collider.html)s like terrain. To resolve collisions with `Collider`s in the scene, [`CollideAndSlideSystem `](/docs/documentation-defaults/movement/collision-resolution) can be used with any of the movement systems. 

To use a movement system, add any of these authorings:

- [`Movement2DAuthoring`](/docs/documentation-defaults/movement/0_2D-movement) - Adds `Movement2DComponent`
- [`Movement3DAuthoring`](/docs/documentation-defaults/movement/1_3D-movement) - Adds `Movement3DComponent`
- [`Movement25DAuthoring`](/docs/documentation-defaults/movement/2_25D-movement) - Adds `Movement25DComponent`

:::note
Each movement authoring also adds a `MaxSpeedComponent` component. The maximum speeds of entities are passed into all behaviors inside [`BaseBehaviorParams`](/docs/documentation-core/base-system/BaseBehaviorParams). 
:::

To use collision resolution add:

- [`KinematicBodyAuthoring`](/docs/documentation-defaults/movement/collision-resolution)
