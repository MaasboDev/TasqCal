package com.maasbodev.tasqcal

actual fun getLogoResourceName(isDark: Boolean): String =
    "file:///android_asset/" + if (isDark) "logo_dark.svg" else "logo_light.svg"
