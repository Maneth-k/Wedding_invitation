Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")

# Let's count flower peaks along the top row (at y=60) from x=0 to 1920
# Find local minima in brightness (shadows / pistils)
$profile = @()
for ($x = 0; $x -lt $bmp.Width; $x++) {
    $c = $bmp.GetPixel($x, 60)
    $profile += $c.R
}

# Let's print out the profile every 20 pixels
Write-Host "Top profile sample (every 40px):"
for ($x = 0; $x -lt $bmp.Width; $x += 40) {
    Write-Host "x=$x : $($profile[$x])"
}

# Let's find flower centers across the entire width:
# In the lace, the flower centers have distinct features.
# Let's search for the repeated pattern width in the top border!
# Autocorrelation of top border profile:
$sliceStart = 300
$sliceEnd = 1620
$len = $sliceEnd - $sliceStart # 1320px
Write-Host "Top middle slice length: $len (from x=$sliceStart to $sliceEnd)"

# Autocorrelation to find pattern period:
$bestLag = 0
$bestCorr = -1
for ($lag = 100; $lag -lt 600; $lag++) {
    $diffSum = 0
    $count = 0
    for ($x = $sliceStart; $x -lt $sliceEnd - $lag; $x++) {
        $d = [Math]::Abs($profile[$x] - $profile[$x + $lag])
        $diffSum += $d
        $count++
    }
    $avgDiff = $diffSum / $count
    if ($lag % 50 -eq 0) {
        Write-Host "Lag $lag : avgDiff=$([Math]::Round($avgDiff, 2))"
    }
}

$bmp.Dispose()
