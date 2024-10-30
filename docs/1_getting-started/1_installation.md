---
sidebar_position: 1
---

# Installation

Steering AI is split into four main folders, shown when importing in the image below.

- [**Runtime/Core**](category/documentation-core) - The core of the framework, it must always be imported. It is responsible for taking [`SteeringSystemAsset`](documentation-core/base-system/SteeringSystemAsset) prepared in the editor and running it's jobs. 
- [**Runtime/Defaults**](category/documentation-defaults) - Contains implementation of several [behaviors](category/behaviors-1) as well as [movement systems](category/movement) and other utilities. This will be most likely be useful to import into any project unless you want to create all your behaviors from scratch.
- [**Editor**](documentation-core/editor) - Handles editting of the [`SteeringSystemAsset`](documentation-core/base-system/SteeringSystemAsset) in editor. 
- [**ECS-Steering-Samples**](category/samples) - Contains sample scenes [link] which showcase the usage of the framework with behaviors and movement systems from defaults.

## 1) Import

Import with Unity Package Manager and select which parts you need. After getting familiar with the samples, feel free to remove them. [img]

<img src="/img/installation.png" alt="Description of the image"/>
*Importing the package into Unity.*

## 2) Add a STEERING_DEBUG symbol

Add a script define symbol `STEERING_DEBUG`. This will allow you to debug the behaviors. 

:::tip
For a slight performance increase, make sure to remove the symbol before releasing your project. 
:::

1) Navigate to `Project Settings/Player/Other Settings`
2) Add `STEERING_DEBUG` 
3) Click apply

<img src="/img/addDebugSymbol.png" alt="Description of the image"/>
*Adding `STEERING_DEBUG` into script define symbols.*

## 3) Initialize Samples

After importing the project, you need to mark all `SteeringSystemAsset` as addressable. 

1) Search for `t:SteeringSystemAsset` in the Project window and select all of them.
2) In the inspector check `Addressable` on all the assets.

<img src="/img/markAddressable.png" alt="Description of the image"/>
*Locating all instances of `SteeringSystemAsset`.*

<img src="/img/markAddressable2.png" alt="Description of the image"/>
*Marking the assets as `Addressable`.*

## 4) Set Renderer to Forward+

The samples use `com.unity.entities.graphics` to draw the entities. To ensure proper set up, you need to use `Forward+` rendering. 

1) Search for `t:UniversalRendererData`.
2) Set `RenderingPath` to `Forward+` on all of them.

<img src="/img/markAddressable.png" alt="Description of the image"/>
*Locating all instances of `UniversalRendererData`.*

<img src="/img/markAddressable2.png" alt="Description of the image"/>
*Instance of `UniversalRendererData` with `Forward+` selected.*

## 5) Test

Open the scene at `ECS-Steering-Samples/1. Minimal Set Up/SampleScene.unity` and run it. The entities in the scene should start moving forward.

