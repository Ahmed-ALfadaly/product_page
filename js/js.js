var myvideo = document.getElementById("video1")
function pl() {
    if (myvideo.paused)
        myvideo.play();
    else
        myvideo.pause();
}


$(document).ready(function () {
    $(function () {
        $("#commenForm").validate();
    });
});
