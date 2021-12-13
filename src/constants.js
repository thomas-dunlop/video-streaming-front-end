let production = true 
let URL
if (production === false){
    URL = 'http://localhost:3000/'
} else {
    URL = 'https://video-streaming-demo-app.herokuapp.com/'
}

export default URL