// Add a new canvas to your html and set canvasId to its id
const canvasId = 'yourCanvasID'

export default function getPixelData(imgFile,w,h){
    let canvas = document.getElementById(canvasId)
    var ctx = canvas.getContext('2d')

    // Set defaults if w/h are not given
    if(!w){w = canvas.width}
    if(!h){h = canvas.height}

    let formattedData = []

    return new Promise((resolve) => {
        // Create new image and get its data
        var img = new Image
        img.onload = function(){
            ctx.drawImage(img, 0, 0)
            let data = ctx.getImageData(0, 0, w, h).data
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
            resolve(formattedData)
        }
        img.src = imgFile
    })
}
