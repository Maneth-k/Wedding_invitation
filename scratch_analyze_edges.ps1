Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")

Write-Output "Image Dimensions: $($bmp.Width) x $($bmp.Height)"

# Average alpha and brightness along vertical strips of width 20px from left edge (x=0..200) and right edge (x=1720..1920)
Write-Output "--- LEFT SIDE (x from 0 to 200, step 20) ---"
for ($x = 0; $x -lt 200; $x += 20) {
    $totalAlpha = 0
    $totalR = 0
    $count = 0
    for ($y = 150; $y -lt 750; $y += 5) {
        $c = $bmp.GetPixel($x, $y)
        $totalAlpha += $c.A
        $totalR += $c.R
        $count++
    }
    $avgA = [math]::Round($totalAlpha / $count, 1)
    $avgR = [math]::Round($totalR / $count, 1)
    Write-Output "Left x=$x : Avg Alpha=$avgA, Avg R=$avgR"
}

Write-Output "--- RIGHT SIDE (fromRight from 0 to 200, step 20) ---"
for ($dist = 0; $dist -lt 200; $dist += 20) {
    $x = $bmp.Width - 1 - $dist
    $totalAlpha = 0
    $totalR = 0
    $count = 0
    for ($y = 150; $y -lt 750; $y += 5) {
        $c = $bmp.GetPixel($x, $y)
        $totalAlpha += $c.A
        $totalR += $c.R
        $count++
    }
    $avgA = [math]::Round($totalAlpha / $count, 1)
    $avgR = [math]::Round($totalR / $count, 1)
    Write-Output "Right distFromRight=$dist (x=$x) : Avg Alpha=$avgA, Avg R=$avgR"
}

$bmp.Dispose()
