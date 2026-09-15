Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")

Write-Output "Image Size: $($bmp.Width) x $($bmp.Height)"

# Let's inspect along several horizontal rows
$rows = @(200, 300, 400, 460, 500, 600, 700)

foreach ($y in $rows) {
    # scan from x=0 to find inner edge of left border (last pixel with A > 20 before hole)
    # and inner edge of right border (first pixel with A > 20 after hole)
    $innerLeft = -1
    for ($x = 0; $x -lt ($bmp.Width / 2); $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 20) {
            $innerLeft = $x
        }
    }
    
    $innerRight = -1
    for ($x = $bmp.Width - 1; $x -ge ($bmp.Width / 2); $x--) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 20) {
            $innerRight = $x
        }
    }
    
    $leftThickness = $innerLeft + 1
    $rightThickness = $bmp.Width - $innerRight
    $holeWidth = $innerRight - $innerLeft - 1
    $holeCenter = ($innerLeft + $innerRight) / 2.0
    $imgCenter = $bmp.Width / 2.0
    $diff = $holeCenter - $imgCenter
    
    Write-Output "Row y=${y} - LeftThickness=$leftThickness, RightThickness=$rightThickness, HoleWidth=$holeWidth, HoleCenter=$holeCenter (Diff from 960: $diff)"
}

# Let's inspect vertical columns
$cols = @(400, 600, 800, 960, 1100, 1300, 1500)
foreach ($x in $cols) {
    $innerTop = -1
    for ($y = 0; $y -lt ($bmp.Height / 2); $y++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 20) {
            $innerTop = $y
        }
    }
    
    $innerBottom = -1
    for ($y = $bmp.Height - 1; $y -ge ($bmp.Height / 2); $y--) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 20) {
            $innerBottom = $y
        }
    }
    
    $topThickness = $innerTop + 1
    $bottomThickness = $bmp.Height - $innerBottom
    $holeHeight = $innerBottom - $innerTop - 1
    $holeCenterY = ($innerTop + $innerBottom) / 2.0
    $imgCenterY = $bmp.Height / 2.0
    $diffY = $holeCenterY - $imgCenterY
    
    Write-Output "Col x=${x} - TopThickness=$topThickness, BottomThickness=$bottomThickness, HoleHeight=$holeHeight, HoleCenterY=$holeCenterY (Diff from 460: $diffY)"
}

$bmp.Dispose()
