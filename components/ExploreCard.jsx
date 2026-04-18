'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, description, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    whileHover={{ scale: 1.02 }}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer shadow-lg overflow-hidden rounded-[24px] hover:shadow-[0_0_20px_rgba(52,172,199,0.5)]`}
    onClick={() => handleClick(id)}
  >
    <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover" />

    { active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-4 sm:p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px] rounded-[12px] hidden sm:flex`}>
          <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" />
        </div>
        <p className="font-normal text-[12px] sm:text-[16px] leading-[20.16px] text-white uppercase mt-2 sm:mt-0">Learn More</p>
        <h2 className="mt-[8px] sm:mt-[24px] font-semibold sm:text-[32px] text-[20px] text-white leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-[8px] sm:mt-[12px] font-normal sm:text-[16px] text-[13px] leading-snug sm:leading-relaxed text-secondary-white max-w-[95%]">
            {description}
          </p>
        )}
      </div>
    )}
  </motion.div>

);

export default ExploreCard;
