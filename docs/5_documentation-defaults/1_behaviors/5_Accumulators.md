---
sidebar_position: 5
---

# Accumulators

The library provides a few implementations of [`IAccumulator`](/docs/documentation-core/behaviors/accumulators) which are not specific to any behavior. They can be useful at minimum as a reference when implementing your own behaviors. 

## NoneAccumulator

Does nothing :]

## MaxAccumulator

Call the `Add` method passing in `direction` and a `weight`. The accumulator tracks the direction with the largest weight.

## SimpleAccumulator

Call the `Add` method passing in `direction` and a `weight`. A weighted sum of the directions of accumulated. 