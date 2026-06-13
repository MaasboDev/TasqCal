# Google Gemini Engineering Brief: Multiplatform Native Engine

## Architectural Framework
This repository contains a full-stack client project utilizing Kotlin Multiplatform (KMP) paired with Compose Multiplatform UI.

## Key Stack Requirements

### Firebase Firestore Sync Engine
- Implement Firestore listeners securely with proper resource management (`CoroutineScope` cleanup).
- Ensure data updates elegantly update the local SQLDelight persistence layer to function seamlessly when offline.
- Real-time snapshots must filter properly based on active user context retrieved via Firebase Auth.

### Cross-Platform Identity Management
Provide concrete, structured multiplatform auth logic parsing for:
- Federated Identity providers (Google, Microsoft, Facebook, Apple, Twitter, GitHub, Yahoo)
- Traditional credentials (Email, Password)
- Device-bound sessioning (Anonymous)

### App Component Paradigms
- **Note Board Feature**: Write scalable grids that map state accurately from offline database transactions into immediate Compose UI frames.
- **Modified Calendar Feature**: Abstract scheduling intervals into robust date math calculations entirely powered by `kotlinx.datetime`. Handle cross-platform rendering using universal Compose structures.

## LLM Optimization Directives
- **Type Safety**: Strictly output strongly typed Kotlin code. Refuse any dynamic unchecked type casting.
- **Coroutines**: Enforce explicit structured concurrency. Always apply specific dispatchers (`Dispatchers.Main` for UI state, `Dispatchers.Default` for layout calculations, and database-safe threading for SQLDelight interactions).