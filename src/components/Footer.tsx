/** @jsxImportSource theme-ui */
import React, { useState } from 'react'
import { Box, Text,Image } from 'theme-ui'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Footer() {
              const musicTracks = [
    {
      name: "Memories",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
    },
    {
      name: "Creative Minds",
      src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
    },
    {
      name: "Acoustic Breeze",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
    },
    {
      name: "Sunny",
      src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
    },
    {
      name: "Tenderness",
      src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
    },
    {
      name: "Once Again",
      src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3"
    },
    {
      name: "Sweet",
      src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
    },
    {
      name: "Love",
      src: "https://www.bensound.com/bensound-music/bensound-love.mp3"
    },
    {
      name: "Piano Moment",
      src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
    },
    {
      name: "E.R.F",
      src: "https://www.bensound.com/bensound-music/bensound-erf.mp3"
    },
    {
      name: "Dreams",
      src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
    },
    {
      name: "A Day To Remember",
      src:
        "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music"
    },
    {
      name: "Adventure",
      src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3"
    },
    {
      name: "Photo Album",
      src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3"
    },
    {
      name: "November",
      src: "https://www.bensound.com/bensound-music/bensound-november.mp3"
    }
  ];

  const [trackIndex, setTrackIndex] = useState(0);
    const [openPlayer, setOpenPlayer] = useState(false);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };
    return (
<>
 {openPlayer && 
 <Box sx={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: "rgba(50, 37, 37, 0.6)", top: "0", bottom: "0", left: '0', right: '0' }}>
 <Box sx={{display:'flex',marginTop:'30vh',position:'absolute',marginLeft:"37vw",justifyContent:'flex-end', '@media screen and (max-width: 720px)': {
                        marginLeft:'75vw !important'
                        },}}> 
   <Image src="https://img.icons8.com/ios/35/d21e1e/multiply.png" sx={{cursor: 'pointer',borderRadius:'50%',zIndex:"1" }} alt="cross" onClick={() => setOpenPlayer(!openPlayer)} />
                     <AudioPlayer
        sx={{  width: '30vw', height: '30vh', position: 'absolute', backgroundColor: '#E4E4E4', padding: '50px', borderRadius: '8px',color:"black",
                        '@media screen and (max-width: 720px)': {
                            width: '70vw !important', height: '23vh !important', 
                            padding: '30px !important',
                        }, }}
              autoPlay
        // layout="horizontal"
        src={musicTracks[trackIndex].src}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        header={`${musicTracks[trackIndex].name}`}
        // footer="All music from: www.bensound.com"
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
        // other props here
      />
 </Box>
                    </Box>
        }
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: "47px", flexDirection: 'row', gap: 'auto' }}>
            <Box sx={{
                display: 'flex', alignItems: 'center', justifyContent: "center", gap: '21px',
                '@media screen and (max-width: 720px)': {
                    gap: '10px !important'
                },
            }}>
                <Box sx={{
                    width: '29px', height: '29px', backgroundColor: "#4F4F4F", borderRadius: '50%',
                    '@media screen and (max-width: 720px)': {
                        height: '19px !important'
                    },
                }}
                ></Box>
                <Text sx={{
                    width: '364px', height: "27px", fontFamily: 'Inter', fontWeight: '400', fontSize: '22px', lineHeight: '27px', color: "#fff",
                    '@media screen and (max-width: 720px)': {
                        fontSize: '18px !important',
                        width: "264px !important"
                    },
                }}
                >{openPlayer ? musicTracks[trackIndex].name : "Koramangala Thirdwave Coffeshop"}</Text>
            </Box>
            <Text sx={{
                width: '52px', height: "17px", fontFamily: 'Inter', fontWeight: '400', fontSize: '14px', lineHeight: '17px', color: "#fff", opacity: "0.5",cursor:"pointer",
                '@media screen and (max-width: 720px)': {
                    fontSize: '18px !important',
                },
            }}
            onClick={() => setOpenPlayer(!openPlayer)}
            >Change</Text>
        </Box>
</>
        
    )
}

export default Footer