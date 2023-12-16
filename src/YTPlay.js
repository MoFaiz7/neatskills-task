import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

const VideoPlayer = ({ videoId }) => {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyD77o8Phpn6uivKdX-64kEJ938Q_Y9fFoU&part=snippet,contentDetails,player`
        );
        setVideoData(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchData();
  }, [videoId]);

  if (!videoData) {
    return <div>fetching data  please wait...</div>;
  }

  const { title, player } = videoData.snippet;

  return (
    <div>
      <h2>{title}</h2>
      <YouTube videoId={videoId} />
    </div>
  );
};

export default VideoPlayer;