import ProjectsData from "../projects";
import { motion } from 'motion/react';

function Projects(){
    return(
        <div className="px-4 md:py-24 py-28 text-center bg-white text-slate-800 md:mt-0 mt-56" id="projects">
            <div className="max-w-3xl mx-auto">
                <motion.h1 initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} className="md:text-5xl text-4xl mb-10 font-semibold">Projects </motion.h1>
                <div className="grid md:grid-cols-2 lg:grid-cols gap-20 mt-20">
                    {ProjectsData.map(pro => (
                          <div className="space-y-3" key={pro.id}>
                        <motion.img initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} src={pro.image} alt={pro.name} />
                        <motion.p initial={{opacity:0, y: -10}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} className="font-semibold text-xl md:text-2xl">{pro.name}</motion.p>
                        <div className="flex justify-center items-center gap-4">
                            <motion.p initial={{opacity:0, y: -10}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} className="text-white py-3 px-5 rounded-xl bg-slate-800">{pro.code}</motion.p>
                            <motion.p><motion.a initial={{opacity:0, y: -10}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} className="mt-5 font-semibold text-lg border-4 py-2 px-5 rounded-xl border-blue-300 cursor-point " href={pro.link}>{pro.status}</motion.a></motion.p>
                        </div>
                    </div>
                    ))}
                     
                  
                </div>
            </div>
        </div>  
             
           
    
    );
}

export default Projects