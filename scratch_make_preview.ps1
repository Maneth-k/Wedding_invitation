Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")
$thumb = New-Object System.Drawing.Bitmap(960, 460)
$g = [System.Drawing.Graphics]::FromImage($thumb)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
# Draw a dark background so transparency is obvious
$g.Clear([System.Drawing.Color]::FromArgb(230, 220, 210))
$g.DrawImage($bmp, 0, 0, 960, 460)
$thumb.Save("$PSScriptRoot\frame_preview.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$thumb.Dispose()
$bmp.Dispose()
Write-Host "Preview saved to frame_preview.png"
