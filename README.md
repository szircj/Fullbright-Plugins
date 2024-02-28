## Fps Plugins Linux Unbuntu 22.04

El Plugins de la FPS Funciona como Objetivo ver la pantalla del jugador por si esta utilizando Wallhack , modificaciones en el juego ect.
Fue Creado Para IW4admin soportable para CoD4.

## Requirimiento
Necesita Descargar el zip 
- [Screenshot-Plugins.git](https://github.com/szircj/Fullbright-Plugins/archive/refs/heads/master.zip) 

## Instalacion 
1.Con el Archivo descargado Necesitas Entrar a la carpeta de tu servidor o vps de linux entrar a la raiz de tu  `Iw4admin` folder y entrar a la Carpeta llamada
`Plugins` y añadir el archivo Javascript descargado `Fps.js`

Luego ir a la caperta `Configuration` y entrar `CommandConfiguration.json` 
en las ultimas lineas añadir esto.     
     
```
    "FpsCommand": {
      "Name": "fps",
      "Alias": "fps",
      "MinimumPermission": "User",
      "AllowImpersonation": false,
      "SupportedGames": []

    
```
y luego reiniciar el IW4admin.

## Help
* No dudes en unirte al **KFC Community** [Discord](https://discord.gg/DeZkVyrrrr)  
Si se encuentra con un problema, error o solicitud de función, publique un [problema](https://github.com/szircj/Screenshot-Plugins/issues)
