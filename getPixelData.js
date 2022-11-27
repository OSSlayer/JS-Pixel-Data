// Add a new canvas to your html and set canvasId to its id
const canvasId = 'imageDataCanvas'

export default function getPixelData(imgFile,w,h){
    let c = document.getElementById(canvasId)
    var ctx = c.getContext('2d')

    if(!w){w = c.width}
    if(!h){h = c.height}

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
        return formattedData
    }
}
