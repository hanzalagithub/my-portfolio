import skill from '../skill'
import { motion } from 'motion/react';
function Skills(){
    return(
        <div className="px-4 md:py-24 pt-10 text-center md:mt-0 mt-20" id="skills">
            <div className="max-w-3xl mx-auto">
            <motion.h1 initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} className="md:text-5xl text-4xl mb-5 font-semibold">Skills</motion.h1>
            <div className="grid xl:grid-cols-6 md:grid-cols-5 grid-cols-3 items-center justify-center gap-20 md:mt-20 mt-12 px-4">
             {skill.map(skills =>(
                <div key={skills.id}>
                    <motion.img initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} src={skills.image} alt="img" />
                </div>
             ))}
            
            </div>
            </div>
        </div>
    );
}

export default Skills