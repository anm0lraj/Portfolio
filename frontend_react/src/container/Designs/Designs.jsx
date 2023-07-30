import React, { useState, useEffect } from 'react';
import {AiFillEye}from 'react-icons/ai';
import { motion} from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Designs.scss';
const Designs = () => {
  const [activeFilter,setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({y:0,opacity:1});
  const [designs, setDesigns] = useState([]);
  const [filterDesign, setFilterDesign] = useState([]);
  useEffect(() => {
    const query = '*[_type == "designs"]';

    client.fetch(query).then((data) => {
      setDesigns(data);
      setFilterDesign(data);
    });
  }, []);
  const handleDesignFilter=(item)=>{
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterDesign(designs);
      } else {
        setFilterDesign(designs.filter((design) => design.tags.includes(item)));
      }
    }, 500);
  }
  return (
    <>
      <h2 className="head-text"><span>Designs</span> Section</h2>
      <div className="app__design-filter">
        {['Posters', 'Banners', 'UI/UX', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleDesignFilter(item)}
            className={`app__design-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__design-portfolio"
      >
        {filterDesign.map((design, index) => (
          <div className="app__design-item app__flex" key={index}>
            <div
              className="app__design-img app__flex"
            >
              <img src={urlFor(design.imgUrl)} alt={design.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__design-hover app__flex"
              >
                <a href={design.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__design-content app__flex">
              <h4 className="bold-text">{design.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{design.description}</p>

              <div className="app__design-tag app__flex">
                <p className="p-text">{design.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div>
        <a href="https://drive.google.com/drive/folders/1_p2iDBkAiOg6oxbLihsWq_RnvsMzkehO?usp=drive_link"><button className='gdrive_btn'><h4>More On Google Google Drive</h4></button></a>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Designs,'app__designs'),
  'designs',
  "app__primarybg"
);