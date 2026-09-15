Add-Type -AssemblyName System.Drawing
Get-ChildItem "$PSScriptRoot\public" -Include *.png, *.jpg -Recurse | ForEach-Object {
    $b = [System.Drawing.Bitmap]::FromFile($_.FullName)
    Write-Host "$($_.Name) : $($b.Width) x $($b.Height)"
    $b.Dispose()
}
