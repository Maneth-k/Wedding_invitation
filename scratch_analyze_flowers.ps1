Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")

# In scratch_embedded.png:
# Let's inspect the flowers along the top edge:
# Where are flowers located along the top edge?
# And along the left edge?
Write-Output "Image size: $($bmp.Width) x $($bmp.Height)"

# In the top border (say at y=60):
# Let's see the brightness pattern across x from 0 to 1920
$topBright = @()
for ($x = 0; $x -lt $bmp.Width; $x += 10) {
    $c = $bmp.GetPixel($x, 60)
    $topBright += $c.R
}

# In left border (say at x=100):
# brightness across y from 0 to 920
$leftBright = @()
for ($y = 0; $y -lt $bmp.Height; $y += 10) {
    $c = $bmp.GetPixel(100, $y)
    $leftBright += $c.R
}

Write-Output "Top slice: 210, Left slice: 300"
$bmp.Dispose()
