package com.maasbodev.tasqcal

actual fun getLogoResourceName(isDark: Boolean): String =
    if (isDark) "logo_dark.svg" else "logo_light.svg"
