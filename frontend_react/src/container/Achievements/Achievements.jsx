import React from 'react';
import images from '../../constants/images';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Achievements.scss';
const Achievements = () => {
  return (
    <>
      <h2 className="head-text">Achievements</h2>
      <div className='achieve__whole'>
      <div className='achieve__content'>
        <ul>
          <li>Winner of the Intercollege UI/UX Design Hackathon</li>
          <li>Top 10 in SCAN-IT's Bits N Bytes Coding Competition</li>
          <li>250+ problems solved on LeetCode have a rank of 2.5 lakhs</li>
          <li>5 Stars in C++ & Python on Hackerrank</li>
          <li>3 Stars in Codechef</li>
          <li>3rd Position in Daksh Full Stack Development Workshop</li>
          <li>SOF Cyber Olympiad - 1 Gold</li>
          <li>SOF Science Olympiad - 2 Gold and 1 Silver</li>
          <li>Rajya Puraskar (State Level) in Scouts & Guides</li>
        </ul>
        
      </div>
      <div className='achieve__pic'>
        <img src={images.achieve} alt="achieve__img" />
      </div>
      </div>
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Achievements,'app__achievements'),
  'achievements',
  "app__purplebg"
);