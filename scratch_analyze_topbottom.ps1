Add-Type -AssemblyName System.Drawing
$bmp = [System.Drawing.Bitmap]::FromFile("$PSScriptRoot\public\scratch_embedded.png")

Write-Output "--- Top Column standard deviations ---"
for ($y = 0; $y -lt 150; $y += 5) {
    $vals = @()
    for ($x = 400; $x -lt 1500; $x += 10) {
        $c = $bmp.GetPixel($x, $y)
        $vals += $c.R
    }
    $avg = ($vals | Measure-Object -Average).Average
    $variance = ($vals | ForEach-Object { [Math]::Pow($_ - $avg, 2) } | Measure-Object -Average).Average
    $std = [Math]::Sqrt($variance)
    Write-Output "Top y=$y : stdDev=$([Math]::Round($std, 2)), avg=$([Math]::Round($avg, 1))"
}

Write-Output "--- Bottom Column standard deviations ---"
for ($d = 0; $d -lt 150; $d += 5) {
    $y = $bmp.Height - 1 - $d
    $vals = @()
    for ($x = 400; $x -lt 1500; $x += 10) {
        $c = $bmp.GetPixel($x, $y)
        $vals += $c.R
    }
    $avg = ($vals | Measure-Object -Average).Average
    $variance = ($vals | ForEach-Object { [Math]::Pow($_ - $avg, 2) } | Measure-Object -Average).Average
    $std = [Math]::Sqrt($variance)
    Write-Output "Bottom dist=$d (y=$y) : stdDev=$([Math]::Round($std, 2)), avg=$([Math]::Round($avg, 1))"
}

$bmp.Dispose()
