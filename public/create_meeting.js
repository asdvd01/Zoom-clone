const myvideo = document.createElement('video')
const videoGrid = document.getElementById('video-grid')

myvideo.muted = true
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then( stream => {
    addVideoStream(myvideo, stream)
})
let uuid = self.crypto.randomUUID();
function joinMeeting(){
    window.location.href = '/'+uuid;
}
function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videoGrid.append(video)
}

function copyMeetingURL(){
    navigator.clipboard.writeText("localhost:3000/"+uuid)
}