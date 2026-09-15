Add-Type -AssemblyName System.Drawing

function Describe-Frame($filename) {
    $p = Join-Path "$PSScriptRoot\public" $filename
    if (-not (Test-Path $p)) { return }
    $b = [System.Drawing.Bitmap]::FromFile($p)
    Write-Host "=== $filename ($($b.Width) x $($b.Height)) ==="
    $b.Dispose()
}

Describe-Frame "beeraluframe.png"
Describe-Frame "frame.jpg"
Describe-Frame "111.png"
Describe-Frame "scratch_embedded.png"
