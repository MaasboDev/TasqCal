# Universal AI Agent Context: KMP Production App

## Project Overview
This is a Kotlin Multiplatform (KMP) project targeting Android, iOS, Desktop (JVM), and Web (WebAssembly). The UI layer uses Compose Multiplatform.

## Core Tech Stack
- **UI**: Compose Multiplatform (`org.jetbrains.compose`) shared across all 4 targets.
- **Local Database**: SQLDelight (`com.squareup.sqldelight`) with multiplatform drivers.
- **Backend**: Firebase Multiplatform (GitLive or official KMP SDKs).
    - Firestore for data synchronization.
    - Authentication (Anonymous, Email, Google, Microsoft, Facebook, Apple, Twitter, GitHub, Yahoo).
    - Analytics, Crashlytics, and Cloud Messaging (FCM).

## Critical Architecture Principles
1. **Never platform-leak**: Do not use `java.*`, `android.*`, or `UIKit/Foundation` libraries inside the `commonMain` module.
2. **Concurrency**: Force `kotlinx.coroutines` and state synchronization via `StateFlow` / `SharedFlow`. Never handle threading using platform-specific APIs.
3. **Multiplatform Firebase**: Use the common initialized Firebase instance. Do not call platform-native Firebase configurations inside common feature modules.
4. **Local Data Isolation**: SQLDelight queries must strictly return domain models or clean data classes via custom mappers. Do not pass database driver cursors directly to views.

## Core Project Features
- **Tab 1 (Keep-like)**: Dynamic Grid/Staggered Note board, color tags, text searching, and real-time offline Firestore cache synchronization.
- **Tab 2 (Calendar-like)**: Custom monthly/weekly grid layout built using pure Compose Canvas or Row/Column grids (avoid native platform calendar APIs), handling multi-timezone scheduling.

## Standard Development Workflows
- **Build & Test Common**: `./gradlew :shared:check`
- **Run Android**: `./gradlew :androidApp:run`
- **Run Desktop**: `./gradlew :desktopApp:run`