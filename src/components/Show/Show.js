import { React, useState, useEffect } from 'react';
import CustomModal from '../Main/CustomModal';
import "./Show.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Show = ({ data, other }) => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!data) {
    return null; // If data is null, do not render anything
  }

  const { viewCount, likeCount, commentCount } = data;
  const { title, publishedAt } = other;

  // Earnings = min(subscriber count, views) + 10 * comments + 5 * likes
  const Earning = viewCount / 2 + 10 * commentCount + 5 * likeCount;
  return (
    <>

      <div className='upper'>

        <h1>Video Details</h1>
        <div>
          <button onClick={openModal}>Request a call back</button>

          <CustomModal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
          />
        </div>
      </div>

      <div className='outer'>
        <div className='andar'>

          <div className='dateThu'>
            <img src={other.thumbnails.medium.url} alt="Video Thumbnail" />
            <p>Uploaded on: {publishedAt}</p>
          </div>

          <div className='tvlc'>
            <h3>{title}</h3>
            <p>Views: 👁 {viewCount}</p>
            <p>Likes: 👍 {likeCount}</p>
            <p>Comments:  {commentCount}</p>
          </div>

          <div className='earn'>
            <p>Earning : ₹ {Earning}</p>
          </div>

        </div>

      </div>


    </>
  );

};

export default Show;


  //new fuction ---------------------------------------xxxx ------------------------------------------

  // const Show = () => {
  //   const [videoDetails, setVideoDetails] = useState(null);
  //   const [otherDetails, setotherDetails] = useState(null);
  //   const API = "AIzaSyBmG4dZQqIo0LZfS0TCfRG1we4BiGXy2ao";

  //   const { vedioId } = useParams();


  //   return (useEffect(() => {
  //     // console.log(vedioId)
  //     if (videoId) {
  //       axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${API}&part=snippet,statistics&id=${videoId}`)
  //         .then(response => {
  //           // console.log(response.data.items[0]);
  //           setVideoDetails(response.data.items[0].statistics);
  //           setotherDetails(response.data.items[0].snippet);
  //           // setVideoUrl('')
  //         })
  //         .catch(error => {
  //           console.error(error);
  //         });
  //     } else {
  //       alert('Invalid YouTube URL');
  //     }


  //     <div>
  //       <h1>Video Details</h1>
  //       <p>Video ID: {videoId}</p>
  //       <h2>{otherDetails.title}</h2>
  //       <p>Views: {videoDetails.viewCount}</p>
  //       <p>Likes: {videoDetails.likeCount}</p>
  //       {/* Render other video details as needed */}
  //     </div>


  //   }, [vedioId])

  //   )
