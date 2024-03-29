# Laboratorio 1 de Lenguajes y Compiladores versión 2

Para más detalles, visitar [compiladores.github.io](https://compiladores.github.io).

## Quickstart

### Editor
Se recomienda usar vscode y la extensión para deno. Para esto apretar `Ctrl+P` y luego pegar
```
ext install denoland.vscode-deno
```
### Deno
Existen 2 alternativas para instalar deno:
1. Seguir las (instrucciones oficiales)[https://deno.land/#installation] para instalar el comando `deno`
2. Descargar el [último release](https://github.com/denoland/deno/releases/tag/v1.18.1) desde el repositorio oficial de deno, descomprimir el binario en cualquier lugar y luego configurarlo en ./.vscode/settings.json de la siguiente manera (reemplazando `./deno` por la ruta al binario)
```
mkdir .vscode
echo '{
    "deno.path": "./deno", /* DENO NO FUE INSTALADO SINO QUE SE DESCARGÓ EL BINARIO EN ESTA UBICACIÓN */
    "deno.enable": true /* UTILIZAR EL LANGUAGE SERVER DE DENO EN VEZ DE TYPESCRIPT "CÓMUN" */
}' > .vscode/settings.json
```

### Dependencias
No se instalan otras dependencias

### Cómo hacer el laboratorio
Este laboratorio se compone de 4 ejercicios similares. Las carpetas numeradas tienen una estructura similar:
- `alphabet.ts`: enumerado con el alfabeto del ejercicio. No debe modificarse
- `test.ts`: archivo de pruebas. No debe modificarse.
- `ex.ts`: Contenido del ejercicio. Debe exportar un objeto de nombre `machineDescription` con las siguientes propiedades:
    - `transition`: función de transición
    - `initial`: estado inicial
    - `acceptance`: listado de estados de aceptación

El ejercicio consiste en completar `ex.ts` de forma que pasen los tests de `test.ts`.

### Criterios de evaluación
La evaluación es objetiva. Al presentar el laboratorio se dará una fecha recomendada de entrega.
Al entregar el laboratorio se puntuará de la siguiente forma.
|Parámetro|puntaje|
|-|-|
|se entregó el TP|6|
|El último commit del PR tiene fecha previa a la recomendada|+2|
|Se resolvió el ejercicio 99|+2|
|Se resolvió el ejercicio 01 en clase|+1 (revisado manualmente)|