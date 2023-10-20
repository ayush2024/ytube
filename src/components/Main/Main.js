import React, { useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import "./Main.css"
import Show from '../Show/Show';

const API = "AIzaSyBmG4dZQqIo0LZfS0TCfRG1we4BiGXy2ao";
const Main = () => {
  const navigate = useNavigate();

  // const check = () => {
  //   // dispatch(addToCart(id, quantity))
  //   navigate('/show');
  // }
  // const data = "Here I Am";

  const [videoUrl, setVideoUrl] = useState('');
  const [videoDetails, setVideoDetails] = useState(null);
  const [otherDetails, setotherDetails] = useState(null);

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  function extractVideoId(url) {
    // Regular expression to match YouTube video URL pattern
    var regExp = /^(https?:\/\/)?(www\.)?(youtube|youtu|youtube-nocookie)\.(com|be)\/(watch\?v=|embed\/|v\/|shorts\/)?([a-zA-Z0-9_-]{11})/;
    var match = url.match(regExp);

    if (match && match[6].length === 11) {
      return match[6];
    } else {
      // Handle invalid YouTube URL
      return null;
    }
  }

  const fetchLike = () => {
    const videoId = extractVideoId(videoUrl);
    
    if (videoId) {
      axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API}&part=snippet,statistics&id=${videoId}`)
        .then(response => {
          // console.log(response.data.items[0]);
          setVideoDetails(response.data.items[0].statistics);
          setotherDetails(response.data.items[0].snippet);
          setVideoUrl('')
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert('Invalid YouTube URL');
    }
    setVideoUrl('')
    // navigate('/show');
    // navigate(`/show/${videoId}`);
  };

  // console.log(otherDetails);
  return (
    <>
      <div className='box'>
        <div className='inner'>
          <h1>Discover Your Earning Potential</h1>
          <p>Turn Your Youtube Expertise Into a Lucrative Income Through Resource Sharing</p>
          {/* <form action="/show"> */}
          <input type="text" placeholder="Enter YouTube Video URL" onChange={handleInputChange} />
          <button onClick={fetchLike}>Fetch Details</button>
          <Show data={videoDetails} other={otherDetails} />
          {/* </form> */}

        </div>
      </div>
    </>
  )
}

export default Main


