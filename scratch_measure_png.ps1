Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")
Write-Output "Dimensions of scratch_embedded.png: $($bmp.Width) x $($bmp.Height)"

$midX = [int]($bmp.Width / 2)
$midY = [int]($bmp.Height / 2)

# Find where the white/transparent center begins on left, right, top, bottom:
# Center pixel color:
$cCenter = $bmp.GetPixel($midX, $midY)
Write-Output "Center pixel: R=$($cCenter.R), G=$($cCenter.G), B=$($cCenter.B), A=$($cCenter.A)"

# Scan from left to right at midY
for ($x = 100; $x -le 300; $x += 5) {
    $c = $bmp.GetPixel($x, $midY)
    Write-Output "Left x=$x -> ($($c.R), $($c.G), $($c.B), $($c.A))"
}

# Scan from top to bottom at midX
for ($y = 80; $y -le 200; $y += 5) {
    $c = $bmp.GetPixel($midX, $y)
    Write-Output "Top y=$y -> ($($c.R), $($c.G), $($c.B), $($c.A))"
}

# Scan from bottom to top at midX
for ($y = $bmp.Height - 1; $y -ge $bmp.Height - 200; $y -= 10) {
    $c = $bmp.GetPixel($midX, $y)
    $fromBottom = $bmp.Height - 1 - $y
    Write-Output "Bottom fromBottom=$fromBottom (y=$y) -> ($($c.R), $($c.G), $($c.B), $($c.A))"
}

# Scan from right to left at midY
for ($x = $bmp.Width - 1; $x -ge $bmp.Width - 300; $x -= 10) {
    $c = $bmp.GetPixel($x, $midY)
    $fromRight = $bmp.Width - 1 - $x
    Write-Output "Right fromRight=$fromRight (x=$x) -> ($($c.R), $($c.G), $($c.B), $($c.A))"
}

$bmp.Dispose()
