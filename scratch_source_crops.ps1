Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")

# In scratch_embedded.png (1920x920):
# Let's crop the entire top border (1920 x 210) and save it:
$rectTop = New-Object System.Drawing.Rectangle(0, 0, $bmp.Width, 210)
$topBmp = $bmp.Clone($rectTop, $bmp.PixelFormat)
$topBmp.Save("$PSScriptRoot\source_top_210.png", [System.Drawing.Imaging.ImageFormat]::Png)
$topBmp.Dispose()

# Let's crop the left border (300 x 920) and save it:
$rectLeft = New-Object System.Drawing.Rectangle(0, 0, 300, $bmp.Height)
$leftBmp = $bmp.Clone($rectLeft, $bmp.PixelFormat)
$leftBmp.Save("$PSScriptRoot\source_left_300.png", [System.Drawing.Imaging.ImageFormat]::Png)
$leftBmp.Dispose()

$bmp.Dispose()
Write-Host "Source crops saved."
