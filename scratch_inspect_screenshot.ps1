Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\User\.gemini\antigravity-ide\brain\e2f9df72-8f84-4dbc-bd04-ef779f8f7e84\border_check_1789409007836.png")
Write-Output "Screenshot size: $($bmp.Width) x $($bmp.Height)"

# Background color of page at center:
$bg = $bmp.GetPixel([int]($bmp.Width / 2), [int]($bmp.Height / 2))
Write-Output "Center pixel: R=$($bg.R), G=$($bg.G), B=$($bg.B)"

# Scan from left to right at midY:
$leftBorderWidth = 0
for ($x = 0; $x -lt 150; $x++) {
    $c = $bmp.GetPixel($x, [int]($bmp.Height / 2))
    # if pixel matches bg (#fbf9f5 -> R=251, G=249, B=245), it's inside
    # let's print
}

# Find where color differs significantly from bg:
Write-Output "Left strip pixels (y = $($bmp.Height / 2)):"
for ($x = 0; $x -lt 80; $x += 4) {
    $c = $bmp.GetPixel($x, [int]($bmp.Height / 2))
    Write-Output "x=$x : ($($c.R), $($c.G), $($c.B))"
}

Write-Output "Right strip pixels (y = $($bmp.Height / 2)):"
for ($x = $bmp.Width - 80; $x -lt $bmp.Width; $x += 4) {
    $c = $bmp.GetPixel($x, [int]($bmp.Height / 2))
    Write-Output "x=$x : ($($c.R), $($c.G), $($c.B))"
}

$bmp.Dispose()
