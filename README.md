# Tuya Smart Life API + CLI   

## Usage  [![requirements]( https://img.shields.io/badge/requires-deno-blue?logo=deno)](https://docs.deno.com/runtime/getting_started/installation/)


<details open>
<summary> <strong> Module </strong> </summary>

- install package **locally** 
```bash
deno install jsr:@shellcatt/tuya-smartlife-api
```

- import ESM

```javascript
import { TuyaSmartLifeClient } from "tuya-smartlife-api";
const client = new TuyaSmartLifeClient();
try {
	await client.init('jondoe@example.co.uk', 'password', 'eu');
	await client.discoverDevices();

	const tDevices = client.getAllDevices();
	console.log(tDevices);

	const myFirstBulb = await client.getDevicesByType('light')[0];
	await myFirstBulb.turnOn();

} catch (e) {
	console.error('Failed because', e);
}
```

</details>

<details open>
<summary> <strong> Standalone </strong> </summary>

- install package **globally**
```bash
deno install -g -n tuyacli jsr:@shellcat/tuya-smartlife-api 
```

- verify installation  
```bash
tuyacli
```
```
Usage: tuyacli [options] [command]

Options:
  -V, --version                   output the version number
  -h, --help                      display help for command

Commands:
  auth                            login with SmartLife
  test                            live test a selected device's functions set
  list [options]                  list devices and their state / attributes
  control [options] <name-or-id>  control a device's state
  help                            output usage information
```

</details>

## Examples 

```bash

# List all devices
node cli list [--format={short|long}]

# Turn device ID on / off
node cli control <ID|Name> --state [1|on]
node cli control <ID|Name> --state [0|off]
node cli control <ID|Name> --toggle

# Set light brightness, color temp & color 
node cli control <ID|Name> --brigntness 30 
node cli control <ID|Name> --temperature 3500 # set warm temp
node cli control <ID|Name> --hsv 78.34,1,100 # HSV chill green
node cli control <ID|Name> --hsv 324.77,1,42 # HSV chill purple
node cli control <ID|Name> --rgb 90,30,115 # RGB something
```


## TODO ![Direction](https://img.shields.io/badge/read-backwards-blue)

- ❌ migrate to TypeScript
- ❌ add JSDoc
- ✅ port pipelines
- ✅ port unit tests
- ✅ port and optimize [tuya-smartlife-api-node](https://github.com/shellcatt/tuya-smartlife-api-node)


## Credits ![License](https://img.shields.io/badge/license-MIT-73901d)

> Inspired by [TuyaPy](https://pypi.org/project/tuyapy/) (backend) and [SmartLife](https://github.com/ndg63276/smartlife) (web) interfaces to [Tuya](https://tuya.com/)'s **[SmartAtHome](https://smartathome.co.uk/smartlife/)** for IoT smart device control. 



#### See also 
 - [CloudTuya](https://github.com/unparagoned/cloudtuya)
 - [TuyaCloudPHP](https://github.com/Aymkdn/tuyacloud-php)
 - [TuyaAPI CLI](https://github.com/TuyaAPI/cli)
