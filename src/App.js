import React from 'react';
import VideoPlayer from './YTPlay';

const App = () => {
  const unlistedVideoId = 'YOUR_UNLISTED_VIDEO_ID';

  return (
    <div>
      <h1>YT App</h1>
      <VideoPlayer videoId={unlistedVideoId} />
    </div>
  );
};

export default App;