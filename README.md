# JS-Pixel-Data
A module for getting pixel data from an image

To import into another script use:

```
import getPixelData from './pixelDatajs'
```

Make sure to set the relative file path. Refer to https://www.w3schools.com/html/html_filepaths.asp for help with file paths



To call the function use:

 ```
 getPixelData(imgFilePath,w,h)
 ```
 
 `imgFilePath` - A relative file path to the image
 
 `w` (Optional) - the width of the canvas to check (default is canvas width)
 
 `h` (Optional) - the height of the canvas to check (default is canvas height)
 
 width and height should be set to the image's width and height for proper use

Returns data in a table containing objects with a r/g/b/a value. Example:
```
[
  {r:0, g:0, b:0, a:0},
  {r:0, g:0, b:0, a:0},
  {r:0, g:0, b:0, a:0}
]
```

Where r/g/b/a are the pixel's red/green/blue/alpha respectively
