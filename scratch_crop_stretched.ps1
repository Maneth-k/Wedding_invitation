Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\User\.gemini\antigravity-ide\brain\c230993c-f5a0-45a9-a81e-ac286c56ca94\border_verification_1789440604522.png")

# Crop top border (width 1536, height 120)
$rectTop = New-Object System.Drawing.Rectangle(0, 0, $bmp.Width, 120)
$cropTop = $bmp.Clone($rectTop, $bmp.PixelFormat)
$cropTop.Save("$PSScriptRoot\stretched_rendered_top.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropTop.Dispose()

# Crop bottom border
# Find where the viewport bottom border is:
# Note: the page was captured full height (2556px), but website-frame is fixed to viewport!
# Wait! In a full page screenshot with position:fixed:
# where does position:fixed element render in full page screenshot?
# Let's inspect!
$bmp.Dispose()
Write-Host "Stretched top saved."
