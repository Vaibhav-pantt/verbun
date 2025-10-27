const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


const imageInput = document.getElementById('imageInput');
const profilePreview = document.getElementById('profilePreview');

imageInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePreview.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const progressCircles = document.querySelectorAll('.progress-circle');

  // Load saved progress from localStorage
  const progressData = JSON.parse(localStorage.getItem('videoProgress') || '{}');

  // Set the max progress cap per video (8%)
  const maxProgressPerVideo = 8;

  // Filter only German videos' progress keys (if you prefix keys, e.g., 'german_video1')
  // For now, assume all videos are German; adjust filter if needed
  const germanVideoKeys = Object.keys(progressData);

  // Sum capped progress for German videos
  let totalProgress = 0;
  germanVideoKeys.forEach(key => {
    totalProgress += Math.min(progressData[key], maxProgressPerVideo);
  });

  // Calculate normalized progress percentage for progress bar
  const maxTotalProgress = maxProgressPerVideo * germanVideoKeys.length || 1; // avoid division by zero
  const normalizedProgress = Math.round((totalProgress / maxTotalProgress) * 100);

  progressCircles.forEach(circle => {
    const svgCircle = circle.querySelector('.circle');
    const percentageText = circle.querySelector('.percentage');

    const circumference = 100;
    const offset = (circumference * normalizedProgress) / 100;

    setTimeout(() => {
      svgCircle.style.strokeDasharray = `${offset}, 100`;
      percentageText.textContent = `${normalizedProgress}%`;
    }, 300);
  });
});
function loadUserProgress(userId) {
  fetch(`/api/video-progress/${userId}`)
    .then(res => res.json())
    .then(data => {
      const totalVideos = data.length;
      const watchedVideos = data.filter(v => v.watched).length;
      const avgRating = data.reduce((acc, v) => acc + (v.rating || 0), 0) / totalVideos;

      // Example: update a progress bar element
      document.getElementById('progress-bar').style.width = `${(watchedVideos / totalVideos) * 100}%`;
      document.getElementById('rating-average').textContent = avgRating.toFixed(2);
    });
}

