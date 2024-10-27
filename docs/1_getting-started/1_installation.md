---
sidebar_position: 1
---

# Installation

Steering AI is split into four parts. 
- **Runtime/Core** - The core of the framework, so it must always be imported. It is responsible for taking `SteeringSystemAsset` prepared in the editor and running it's jobs. 
- **Runtime/Defaults** - Contains implementation of several behaviors [link] as well as movement systems [link] and other utilities. This will be most likely be useful to import into any project unless you want to create all your behaviors from scratch.
- **Editor** - Handles creation of the Steering System Assets [link] in editor rather than code. 
- **ECS-Steering-Samples** - Contains sample scenes [link] which showcase the usage of the framework with behaviors and movement systems from defaults.

## 1) Import

Import with Unity Package Manager and select which parts you need. After getting familiar with the samples, feel free to remove them. [img]

<img src="/img/installation.png" alt="Description of the image"/>
*Importing the package into Unity.*

## 2) Initialize Samples

After importing the project, you need to mark all `SteeringSystemAsset` as addressable. 

1) Search for `t:SteeringSystemAsset` in the Project window and select all of them.
2) In the inspector check `Addressable` on all the assets.

<img src="/img/markAddressable.png" alt="Description of the image"/>
*Locating all instances of `SteeringSystemAsset`.*

<img src="/img/markAddressable2.png" alt="Description of the image"/>
*Marking the assets as `Addressable`.*

## 3) Set Renderer to Forward+

The samples use `com.unity.entities.graphics` to draw the entities. To ensure proper set up, you need to use `Forward+` rendering. 

1) Search for `t:UniversalRendererData`.
2) Set `RenderingPath` to `Forward+` on all of them.

<img src="/img/markAddressable.png" alt="Description of the image"/>
*Locating all instances of `UniversalRendererData`.*

<img src="/img/markAddressable2.png" alt="Description of the image"/>
*Instance of `UniversalRendererData` with `Forward+` selected.*

## 4) Test

Open the scene at `ECS-Steering-Samples/1. Minimal Set Up/SampleScene.unity` and run it. The entities in the scene should start moving forward.

