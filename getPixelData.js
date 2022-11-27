// Add a new canvas to your html and set canvasId to its id
const canvasId = 'imageDataCanvas'
// Default width and height values to use if not given by caller
const width = 10
const height = 10

export default function getImagePixelData(imgFile,w,h){
    if(!w){w = width}
    if(!h){h = height}
    let c = document.getElementById(canvasId)
    var ctx = c.getContext('2d')

    // Create new image and get its data
    var img = new Image
    img.src = imgFile
    img.onload = function(){
        ctx.drawImage(img, 0, 0)
        let data = ctx.getImageData(0, 0, width, height).data
        let formattedData = []
        // Loop through all data and organize into r/g/b/a pairs
        for(let i = 0; i<data.length; i+=4){
            let pixelData = {
                r: data[i],
                g: data[i+1],
                b: data[i+2],
                a: data[i+3]
            }
            formattedData.push(pixelData)
        }
        console.log(formattedData)
    }
}
