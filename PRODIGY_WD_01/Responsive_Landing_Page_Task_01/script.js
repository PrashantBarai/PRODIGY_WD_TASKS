// Toggle Menu Button
function toggleMenu(){
    const menu = document.querySelector('.menu');
    const nav =  document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

// Change the background video when click on the gallery image
function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');
    // bgVideo.src = `assets/videos/${name}.mp4`;

    // Javascript higher order array function forEach 
    // This is easier to do data mapping    
    bgVideoList.forEach(video =>{
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });

    // Mapping model name change
    models.forEach(model =>{
        model.classList.remove('active');
        if(model.classList.contains(name)){
            model.classList.add('active');
        }
    });

    // Mapping trailer video change
    trailers.forEach(video =>{
        video.classList.remove('active');
        if(video.classList.contains(name)){
            video.classList.add('active');
        }
    });
}

// Change the play and pause button on click event
function toggleplay(){
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');
}

// Video Play and Pause
    function pauseVideo(){
        const bgVideoList = document.querySelectorAll('.bg-video');
        bgVideoList.forEach(video =>{
            video.pause();
        });
        toggleplay();
        syncCubeWithBackgroundVideo();
    }

    function playVideo(){
        const bgVideoList = document.querySelectorAll('.bg-video');
        bgVideoList.forEach(video =>{
            video.play();
        });
        toggleplay();
        syncCubeWithBackgroundVideo();
    }

// Video play and pause for cube with synchronization of background
let isBackgroundPaused = false;
let backgroundPausedTime = 0;

// Function to synchronize cube videos with the background video state
function syncCubeWithBackgroundVideo() {
    const bgVideos = document.querySelectorAll('.bg-video');
    const cubeVideos = document.querySelectorAll('.screen-video');

    // Check if any of the background videos are paused
    bgVideos.forEach(video => {
        if (video.paused) {
            isBackgroundPaused = true;
            backgroundPausedTime = video.currentTime; // Store the paused time of the background video
        } else {
            isBackgroundPaused = false;
        }
    });

    // Pause or play the cube videos based on the background video state
    cubeVideos.forEach(video => {
        if (isBackgroundPaused) {
            video.pause();
            video.style.display = 'none'; // Hide the cube video when background video is paused
        } else {
            video.style.display = 'block'; // Show the cube video when background video is playing
            if (!video.paused) {
                // Only adjust the time if the cube video is not paused
                video.currentTime = backgroundPausedTime; // Set the cube video time to match the background video's paused time
            }
            video.play();
        }
    });
}

// Call syncCubeWithBackgroundVideo() whenever the background video state changes
// For example, call it in the playVideo and pauseVideo functions where the background video state changes


