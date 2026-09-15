Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\User\.gemini\antigravity-ide\brain\c230993c-f5a0-45a9-a81e-ac286c56ca94\hero_section_1789435413842.png")

$rectTop = New-Object System.Drawing.Rectangle(0, 0, $bmp.Width, 120)
$cropTop = $bmp.Clone($rectTop, $bmp.PixelFormat)
$cropTop.Save("$PSScriptRoot\actual_rendered_top.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropTop.Dispose()

$bottomY = [int]$bmp.Height - 120
$rectBottom = New-Object System.Drawing.Rectangle(0, $bottomY, $bmp.Width, 120)
$cropBottom = $bmp.Clone($rectBottom, $bmp.PixelFormat)
$cropBottom.Save("$PSScriptRoot\actual_rendered_bottom.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropBottom.Dispose()

$rectLeft = New-Object System.Drawing.Rectangle(0, 0, 120, $bmp.Height)
$cropLeft = $bmp.Clone($rectLeft, $bmp.PixelFormat)
$cropLeft.Save("$PSScriptRoot\actual_rendered_left.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropLeft.Dispose()

$bmp.Dispose()
Write-Host "Rendered crops saved successfully."
