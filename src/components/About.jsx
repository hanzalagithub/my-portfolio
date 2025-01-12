import { motion } from "motion/react"

function About(){
    return(
        <div className="px-4 md:py-24 py-14 pt-28 text-center bg-white text-slate-800" id="about">
            <div className="max-w-3xl mx-auto">
            <motion.h1 initial={{opacity:0, y: -20}} whileInView={{opacity:1, y:0}} transition={{duration: 0.5, delay: 0.5}} className="md:text-5xl text-4xl mb-14 font-semibold">About Me</motion.h1>
            <motion.p initial={{opacity:0, y: -20}} whileInView={{opacity:1, x:0}} transition={{duration: 0.5, delay: 1}} className="text-lg">Full Stack Developer with expertise in MERN/PERN stack, Docker, and cloud computing. Bachelor's degree in Electrical and Computer Engineering from University of Punjab Lahore. Skilled in JavaScript, TypeScript, C++, and frameworks like React.js and NestJS. With experience in developing scalable and responsive web applications, I have worked as a Full stack developer at RedTilt Solutions Ltd and intern at Zidio Development, and hold certifications in Advanced React, JavaScript, and Version Control.</motion.p>
            </div>
        </div>
    );
}

export default About