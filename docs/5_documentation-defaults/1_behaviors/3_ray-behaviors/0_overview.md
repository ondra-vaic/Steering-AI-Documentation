---
sidebar_position: 0
---

# Overview

Each simple behavior is implemented using the following types:

- [`IRaycastBehaviorJobWrapper`](/docs/documentation-core/behaviors/ray-behaviors/ray-behaviors#implementing-iraycastbehaviorjobwrapper) - Implementations schedules implementations of `IRaycastBehaviorJob<C, A1, A2, R>`.
- [`IRaycastBehaviorJob<C, A1, A2, R>`](/docs/documentation-core/behaviors/ray-behaviors/ray-behaviors#implementing-iraycastbehaviorjobc-a1-a2-r) - Implementations contain logic of the behavior.
    - `C` - Component which the behavior uses.
    - `R` - Results which the behavior uses.
- [`IRayBaseBehavior`](/docs/documentation-core/components/IRayBaseBehavior) - Implementations are [components](/docs/documentation-core/components/intro) used by the behavior.
- [`VelocityResult(s)`](/docs/documentation-defaults/behaviors/VelocityResult) - All behaviors use this type as their output.