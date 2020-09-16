## sys_info

Listen port `5000`

_GET_ `/api/system/os`

```
{
    "success": true,
    "data": {
        "platform": "linux",
        "distro": "Ubuntu",
        "release": "20.04.1 LTS",
        "codename": "Focal Fossa",
        "kernel": "5.4.0-47-generic",
        "arch": "x64",
        "hostname": "teuchezh-pc",
        "codepage": "UTF-8",
        "logofile": "ubuntu",
        "serial": "91eedeaec1c441ac86147cee70faa76d",
        "build": "",
        "servicepack": "",
        "uefi": true
    }
}
```

_GET_ `/api/system/cpu`

```
{
    "success": true,
    "data": {
        "manufacturer": "AMD",
        "brand": "A8-6600K APU with Radeon(tm) HD Graphics",
        "currentspeed": "3.57",
        "speedmin": "1.90",
        "speedmax": "3.90",
        "governor": "ondemand",
        "cores": 4,
        "physicalCores": 2
    }
}
```

_GET_ `/api/system/mem`

```
{
    "success": true,
    "data": {
        "total": 16002,
        "free": 5236,
        "used": 10766
    }
}
```
