import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';



const Details =({position, company, time,companyLink, address, description})=>{
    const ref = useRef(null);
    return(
        <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:1 , type:'keyframes'}}>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target ='_blank' className='text-primary capitalize' >@{company}</a></h3>
                <span className='capitalize text-dark/85'>{time} | {address}</span>
                <p className='font-medium w-full'>{description}</p>
            </motion.div>
        </li>
    )
}
const Experience = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
      });
      


  return (
    
    <div className='my-64'>
        <h2 className='font-bold text-8xl text-center w-full mb-32'>
            Experience
        </h2>
        <div ref={ref}  className='w-[75%] mx-auto relative'>
            <motion.div 
            style={{scaleY:scrollYProgress}}
            className='bg-dark origin-top w-[4px] h-full left-9 absolute top-1' />
        <ul className='w-full flex flex-col items-start justify-between ml-4' >
        <Details position='Software Program Trainee' 
                 company=' Mercantile Office System Pvt.
                 Ltd.' 
                 time='Jan 2022 - Jul 2022'
                 companyLink='https://www.mos.com.np/' 
                 address='Kathmandu, Nepal'
                 description='Manage and store organization data, ensure data
                 accessibility, and perform backup and recovery.Test and debug software before client updates to
                 meet their requirements and ensure quality. Handle clients, understand their needs, respond
                 to inquiries, and provide project updates
                 regularly. Contributing to teamwork efforts by
                 communicating effectively, sharing knowledge,
                 and assisting team members'
                 />
                
        <Details position='Microsoft Power Platform Trainee' 
                 company='Leapfrog Technology Inc.' 
                 time='Sep 2021 – Nov 2021'
                 companyLink='https://www.lftechnology.com/'
                 address='Kathmandu, Nepal'
                 description='Collaboration with a team of
                 professionals to gain hands-on
                 experience with Microsoft 365 suite,
                 specifically Power Apps, Power
                 Automate, and Power BI.Demonstrated practical skills in building chat bots using Power
                 Automate and Power BI, and deployed
                 them on Power Apps for effective use.Worked on various projects related to
                 Microsoft Power Platform under the
                 guidance of senior developers and
                 learned how to implement, solve
                 problem, optimize and integrate the
                 platform into business solutions
                 product. '
                 />
                
        <Details position='Intern Web Developer' 
                 company=' Online Saathi Pvt. Ltd' 
                 time='Feb 2021 – May 2021'
                 companyLink='https://www.mos.com.np/' 
                 address='Kathmandu, Nepal'
                 description='Gained hands-on experience in web
                 development using HTML and CSS, and
                 implemented web design concepts to
                 create visually appealing UI / UX and
                 functional websites.Worked collaboratively with a team ofprofessionals to ensure timely
                 completion of web development
                 projects and consistently delivered
                 high-quality work.'
                 />
                
        </ul>
        </div>
        </div>
  )
}

export default Experience