---
sidebar_position: 0
---

# Intro

There are several simple behaviors included in the *Defaults* package. This page contains an overview of them. Each job must have some things to work. For example, here are all the types relevant for wandering:

- **Job** - `WanderingJob` - *implements the logic of the behavior*
- **Component** - `WanderingComponent` - *how an entity responds to the behavior depends on properties of this component*
- **JobWrapper** - `WanderingJobWrapper` - *schedules the job*
- **Authoring** - `WanderingAuthoring` - *attaches the component to an entity in editor*

:::note
The two important pieces to focus on are the `-Job` and the `-Component`. The `-JobWrapper` and `-Authoring` are mostly only needed for editor functionality.
:::

:::tip
Every behavior in the defaults library follows the same naming pattern `BehaviorNameJob`, `BehaviorNameComponent`, `BehaviorNameJobWrapper` and `BehaviorNameAuthoring`.  
:::