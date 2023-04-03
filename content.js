(() => {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
        return;
    } else {
        const videoElements = document.getElementsByTagName('video');
        if (!videoElements.length) return;
        videoElements[0].requestPictureInPicture();
    }
})();
