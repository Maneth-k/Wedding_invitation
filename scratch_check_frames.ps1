Add-Type -AssemblyName System.Drawing
$b = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\beeraluframe.png")
Write-Host "beeraluframe.png format: $($b.PixelFormat), size: $($b.Width)x$($b.Height)"
$c = $b.GetPixel([int]($b.Width/2), [int]($b.Height/2))
Write-Host "Center pixel: R=$($c.R), G=$($c.G), B=$($c.B), A=$($c.A)"
$b.Dispose()

$b2 = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\frame.jpg")
Write-Host "frame.jpg format: $($b2.PixelFormat), size: $($b2.Width)x$($b2.Height)"
$b2.Dispose()

$b3 = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\111.png")
Write-Host "111.png format: $($b3.PixelFormat), size: $($b3.Width)x$($b3.Height)"
$c3 = $b3.GetPixel([int]($b3.Width/2), [int]($b3.Height/2))
Write-Host "111.png Center pixel: R=$($c3.R), G=$($c3.G), B=$($c3.B), A=$($c3.A)"
$b3.Dispose()
