package com.maasbodev.tasqcal

actual fun getLogoResourceName(isDark: Boolean): String =
    if (isDark) "logo_dark" else "logo_light"
