// Update progress function for onDownloadProgress
export function updateProgress(event) {
    if (event.lengthComputable) {
        const percentCompleted = Math.round((event.loaded / event.total) * 100);
        document.getElementById('progressBar').style.width = `${percentCompleted}%`;
        console.log('Progress updated:', percentCompleted + '%');
    }
}
