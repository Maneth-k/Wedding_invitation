Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")

# Let's inspect the top-left corner:
# Corner width: slice was 300.
# Corner height: slice was 210.
# Where is the corner flower?
# Let's crop from (0, 0) of size 400 x 300 and inspect it:
$rectTL = New-Object System.Drawing.Rectangle(0, 0, 400, 300)
$cropTL = $bmp.Clone($rectTL, $bmp.PixelFormat)
$cropTL.Save("$PSScriptRoot\crop_corner_topleft.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropTL.Dispose()

# Top center (around x=960, y=0, width 400, height 210):
$rectTC = New-Object System.Drawing.Rectangle(760, 0, 400, 210)
$cropTC = $bmp.Clone($rectTC, $bmp.PixelFormat)
$cropTC.Save("$PSScriptRoot\crop_top_center.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropTC.Dispose()

$bmp.Dispose()
Write-Host "Crops saved: crop_corner_topleft.png and crop_top_center.png"
