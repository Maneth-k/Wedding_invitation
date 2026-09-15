Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")

# Crop left border middle section (250x300 at y=310)
$rectLeft = New-Object System.Drawing.Rectangle(0, 310, 250, 300)
$cropLeft = $bmp.Clone($rectLeft, $bmp.PixelFormat)
$cropLeft.Save("$PSScriptRoot\crop_left.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropLeft.Dispose()

# Crop right border middle section (250x300 at y=310)
$rightX = [int]$bmp.Width - 250
$rectRight = New-Object System.Drawing.Rectangle($rightX, 310, 250, 300)
$cropRight = $bmp.Clone($rectRight, $bmp.PixelFormat)
$cropRight.Save("$PSScriptRoot\crop_right.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropRight.Dispose()

# Crop top border middle section (300x200 at x=810)
$rectTop = New-Object System.Drawing.Rectangle(810, 0, 300, 200)
$cropTop = $bmp.Clone($rectTop, $bmp.PixelFormat)
$cropTop.Save("$PSScriptRoot\crop_top.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropTop.Dispose()

$bmp.Dispose()
Write-Output "Cropped images saved."
