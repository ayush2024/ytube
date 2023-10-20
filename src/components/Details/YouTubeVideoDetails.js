import React, { useState } from 'react';
import axios from 'axios';

const API = "AIzaSyBmG4dZQqIo0LZfS0TCfRG1we4BiGXy2ao";
function YouTubeVideoDetails() {
    const [videoUrl, setVideoUrl] = useState('');
    const [videoDetails, setVideoDetails] = useState(null);
    // const [subDetails, setSubDetails] = useState(null);

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
                    console.log(response.data.items[0]);
                    setVideoDetails(response.data.items[0].statistics);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            alert('Invalid YouTube URL');
        }
    };


    // const fetchSub = () => {
    //     const videoId = extractVideoId(videoUrl);
    //     if (videoId) {
    //         axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${videoId}&key=${API}`)
    //             .then(response => {
    //                 if (response.data.items && response.data.items.length > 0) {
    //                     console.log(response.data.items[0]);
    //                     setSubDetails(response.data.items[0].statistics);
    //                 } else {
    //                     console.error('No channel data found.');
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error(error);
    //             });
    //     } else {
    //         alert('Invalid YouTube URL');
    //     }
    // };



    // console.log(subDetails);
    return (
        <div>
            <input type="text" placeholder="Enter YouTube Video URL" onChange={handleInputChange} />
            <button onClick={fetchLike}>Fetch Details</button>

            {videoDetails && (
                <div>
                    {/* <h2>{videoDetails.title}</h2> */}
                    <p>{videoDetails.likeCount}</p>
                    <p>{videoDetails.commentCount}</p>
                    <p>{videoDetails.viewCount}</p>
                    {/* <p>{subDetails.subscriberCount}</p> */}

                    {/* <img src={videoDetails.thumbnails.default.url} alt="Video Thumbnail" /> */}
                </div>
            )}


        </div>
    );
}

export default YouTubeVideoDetails;