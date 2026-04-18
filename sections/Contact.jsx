'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const Contact = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Contact Us" textStyles="text-center" />
      <TitleText title="Let's build something amazing together" textStyles="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[50px] flex flex-col gap-6 w-full max-w-3xl mx-auto"
      >
        <div className="flex sm:flex-row flex-col gap-6">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-transparent border-[1px] border-secondary-white rounded-[12px] p-4 text-white outline-none focus:border-white transition-colors"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
             className="w-full bg-transparent border-[1px] border-secondary-white rounded-[12px] p-4 text-white outline-none focus:border-white transition-colors"
          />
        </div>
        <textarea 
          placeholder="Tell us about your project" 
          rows="5"
          className="w-full bg-transparent border-[1px] border-secondary-white rounded-[12px] p-4 text-white outline-none focus:border-white transition-colors resize-none"
        />
        <button 
          className="flex items-center justify-center w-full sm:w-auto h-fit py-4 px-8 bg-[#25618B] rounded-[32px] text-white font-bold text-[16px] hover:bg-[#34acc7] transition-colors self-center"
        >
          Send Message
        </button>
      </motion.div>
    </motion.div>
  </section>
);

export default Contact;
