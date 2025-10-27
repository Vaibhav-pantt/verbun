const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const newsSection = document.querySelector('.news-section');
  if (newsSection) {
    newsSection.classList.toggle('dark-news-theme');
  }
});

function markVideoWatched(userId, videoId) {
  fetch('/api/video-progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: userId,
      video_id: videoId,
      watched: true,
      rating: null  // don't change rating here
    })
  }).then(res => res.json()).then(data => {
    console.log('Watched status saved:', data);
  });
}

// Attach event listeners to your video iframe or container
document.querySelectorAll('.video-item iframe').forEach(iframe => {
  iframe.addEventListener('click', () => {
    const userId = 1; // dynamically get from your auth/session
    const videoId = new URL(iframe.src).searchParams.get('v') || iframe.src.split('/').pop();
    markVideoWatched(userId, videoId);
  });
});


function sendRating(userId, videoId, rating) {
  fetch('/api/video-progress', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: userId,
      video_id: videoId,
      watched: null, // no change to watched
      rating: rating
    })
  }).then(res => res.json()).then(data => {
    console.log('Rating saved:', data);
  });
}

// Example: when user clicks on a star rating button
document.querySelectorAll('.video-item .rating').forEach(ratingDiv => {
  ratingDiv.addEventListener('click', e => {
    const starIndex = [...ratingDiv.children].indexOf(e.target) + 1;
    if (starIndex < 1 || starIndex > 5) return; // only stars
    const userId = 1; // your user id here
    const videoId = ratingDiv.closest('.video-item').querySelector('iframe').src.split('/').pop();

    sendRating(userId, videoId, starIndex);
  });
});
