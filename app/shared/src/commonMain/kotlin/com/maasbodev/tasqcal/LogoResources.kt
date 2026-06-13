package com.maasbodev.tasqcal

/**
 * Returns the platform-specific resource identifier or path for the logo.
 * - Android: file:///android_asset/{filename}
 * - JVM/Desktop: classpath resource name (e.g. "logo_light.svg")
 * - JS/Web: absolute path served by the web server (e.g. "/logo_light.svg")
 * - iOS: asset name in Assets.xcassets (without extension)
 */
expect fun getLogoResourceName(isDark: Boolean): String
