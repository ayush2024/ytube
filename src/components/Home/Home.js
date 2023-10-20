
import React from 'react'
import Navbar from '../common/Navbar'
import Main from '../Main/Main'
import Footer from '../common/Footer'

const Home = () => {
  return (
    <>
        {/* <Navbar /> */}
        <Main />
        {/* <Footer /> */}
    </>
  )
}

export default Home

















// import React, { useEffect, useState } from 'react'
// import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material'
// import Heading from '../common/Heading'
// import "./Home.css"

// const StyledHeader = styled(AppBar)`
//     background: #000;
//     height: 55px
// `

// const StyledMain = styled(Box)`
//     background: #000;
//     height: 100vh
// `

// const API = "AIzaSyBmG4dZQqIo0LZfS0TCfRG1we4BiGXy2ao";
// const fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=date&maxResults=20`


// const Home = () => {

//     const [allVideo, setAllVideo] = useState([])
//     useEffect(()=>{
//         fetch(fetchUrl).then((res)=>res.json()).then((resJson)=>{
//             const result = resJson.items.map(doc =>({
//                 ...doc,
//                 Videolink: "https://www.youtube.com/embed/"+doc.id.videoId 
//             }));
//             setAllVideo(result)
//         })
//     },[])
//     console.log(allVideo);
//     return (
//         <>
//             {allVideo.map((item)=>{
//                 return(
//                     <div>
//                         <iframe width="560" height="315" src={item.Videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//                     </div>
//                 );
//             })}
            
            
//         </>
//     )
// }

// export default Home


{/* <StyledHeader>
            <Toolbar>
                <p>Anchor</p>
            </Toolbar>
        </StyledHeader> */}

            {/* <StyledMain>
            <Typography>
                Discover Your Earning Potential
            </Typography>
        </StyledMain> */}

            {/* <section className='hero'>
                <div className='container'>
                    <Heading title='Find Your Best Dream House' subtitle='Find new & featured property located in your local city.' />

                    <form className='flex'>
                        <div className='box'>
                            <span>City/Street</span>
                            <input type='text' placeholder='Location' />
                        </div>

                        <button className='btn1'>
                            <i className='fa fa-search'></i>
                        </button>
                    </form>
                </div>
            </section> */}