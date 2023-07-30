import React, {useState,useEffect} from 'react'
import {motion} from 'framer-motion';
import  {AppWrap, MotionWrap} from '../../wrapper';
import{urlFor,client} from '../../client';
import './About.scss';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      console.log(data);
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className='head-text'>I Know that <span>Good Design</span><br/> means <span>Good Business</span></h2>
      <h4 className='intro'>I am a Computer Science Engineering student with more than 3 years of experience as a graphic designer and a UI/UX designer in various clubs. I possess fundamental skills in computer science, full stack web development, coding, language acquisition, design, and editing, and I am always eager to learn new things.</h4>
      <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5,type:'tween'}}
            className='app__profile-item'
            key={about.title+index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',
    "app__purplebg"
  );