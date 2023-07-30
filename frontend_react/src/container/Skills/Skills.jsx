import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [activeFilter,setActiveFilter] = useState('All');
  const [skills, setSkills] = useState([]);
  const [animateCard, setAnimateCard] = useState({y:0,opacity:1});
  const [filterSkills, setFilterSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
      setFilterSkills(data);
    });
  }, []);
  const handleSkillFilter=(item)=>{
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterSkills(skills);
      } else {
        setFilterSkills(skills.filter((skill) => skill.tags.includes(item)));
      }
    }, 500);
  }
  return (
    <>
      <h2 className="head-text">Skills</h2>
      <div className="app__skill-filter">
        {['Languages', 'Web Development', 'Database', 'Design', 'Extra', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleSkillFilter(item)}
            className={`app__skill-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app__skills-container">
        <motion.div 
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__skills-list"
        >
          {filterSkills.map((skill,index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills,'app__skills'),
  'skills',
  "app__purplebg"
);