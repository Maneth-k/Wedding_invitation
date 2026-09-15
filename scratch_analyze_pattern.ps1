Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")

# Let's inspect the flower motif center (the center of the flower at y = 460)
# Find the x coordinate with minimum brightness or the symmetry axis of the flower
# Around y=450..470, the center pistil of the flower is located.
Write-Output "Left flower pistil scan at y=460:"
for ($x = 70; $x -le 140; $x++) {
    $c = $bmp.GetPixel($x, 460)
    # The center of the flower usually has a specific feature (e.g. pistil / dark shadow)
}

# Also let's check outer edge and inner edge of lace along left and right:
# In left border:
# Where does lace start (from left x=0)?
# Where does lace end (inner hole)?
# In right border:
# Where does lace end (inner hole)?
# Where does lace start (from right x=1919)?

# Let's measure at multiple rows: y = 250, 350, 450, 550, 650
# In each row, let's find:
# lace_left_outer: x where pattern / cutouts start
# lace_left_inner: x where hole starts
# lace_right_inner: x where hole ends
# lace_right_outer: x where cutouts end before outer border

# To find where "cutouts" or shadows start, let's look for pixels that are NOT the flat background color.
# Flat background color in the frame is around (242, 234, 231) or similar.
# Let's check variance of pixels across columns:
Write-Output "--- Column standard deviations (variance of color indicating lace features vs flat background) ---"
$leftStdDev = @()
for ($x = 0; $x -lt 250; $x++) {
    $vals = @()
    for ($y = 200; $y -lt 700; $y += 5) {
        $c = $bmp.GetPixel($x, $y)
        $vals += $c.R
    }
    $avg = ($vals | Measure-Object -Average).Average
    $variance = ($vals | ForEach-Object { [Math]::Pow($_ - $avg, 2) } | Measure-Object -Average).Average
    $std = [Math]::Sqrt($variance)
    if ($x % 10 -eq 0) {
        Write-Output "Left x=$x : stdDev=$([Math]::Round($std, 2)), avg=$([Math]::Round($avg, 1))"
    }
}

Write-Output "--- Right Column standard deviations ---"
for ($d = 0; $d -lt 250; $d += 10) {
    $x = $bmp.Width - 1 - $d
    $vals = @()
    for ($y = 200; $y -lt 700; $y += 5) {
        $c = $bmp.GetPixel($x, $y)
        $vals += $c.R
    }
    $avg = ($vals | Measure-Object -Average).Average
    $variance = ($vals | ForEach-Object { [Math]::Pow($_ - $avg, 2) } | Measure-Object -Average).Average
    $std = [Math]::Sqrt($variance)
    Write-Output "Right dist=$d (x=$x) : stdDev=$([Math]::Round($std, 2)), avg=$([Math]::Round($avg, 1))"
}

$bmp.Dispose()
