# JS-Pixel-Data
A module for getting pixel data from an image

To import into another script use:

```
import getPixelData from './pixelDatajs'
```

Make sure to set the relative file path. Refer to https://www.w3schools.com/html/html_filepaths.asp for help with file paths



To call the function you need to wrap it in an async to resolve the promise:

 ```
 async function pixelData(imgFilePath,w,h){
   let data = getPixelData(imgFilePath,w,h)
   // Code using the data
 }
 ```
 and then you can run it with:
 ```
 pixelData(imgFilePath,w,h)
 ```
 
 async function can be named whatever you want. All of the code using the pixel data MUST be in the async function. If you try to return the data and use it outside of an async function then the promise will not have resolved and will give you a pending promise instead of the result.
 
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
