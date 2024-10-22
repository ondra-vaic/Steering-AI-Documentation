---
sidebar_position: 3
---

# Paths

Paths are used by the `FollowPathJob` behavior. For this behavior to work, an instance of `IPathPoints` has to be assigned into the entity's `FollowPathAuthoring`. 

## PathPoints

`PathPoints` can be attached to a game object in the scene. It contains an ordered list of `Transform` which is visualized in the editor. 

## MultiPath

`MultiPath` can be used to connect multiple paths. It contains an ordered list of `PathPoints` which is visualized in the editor.  