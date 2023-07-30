import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Roles.scss'

const Roles = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Position of <span>Responsibility</span></h2>

      <div className="app__roles-container">
        <div className="app__roles-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__roles-item"
              key={experience.year}
            >
              <div className="app__roles-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app_roles-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__roles-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-company p-text">{work.company}</p>
                      <h6 className="p-desc p-text">{work.desc}</h6>

                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(Roles,'app__roles'),
  'roles',
  "app__primarybg"
);