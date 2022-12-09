import styles, { layout } from '../style';
import { features } from '../constants';
import Button from './Button';

const Featur = ({ index, icon, title, content }) => (
  <div
    className={`flex flex-row p-6 rounded-lg ${
      index !== features.length - 1 ? 'mb-5' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`flex items-center justify-center rounded-full bg-dimBlue w-[64px] h-[64px]`}
    >
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>

    <div className='flex flex-1 flex-col ml-3'>
      <h3 className='text-[18px] leading-{17} text-white mb-3'>{title}</h3>
      <p className='text-dimWhite text-[14px] leading-{13} text-white '>
        {content}
      </p>
    </div>
  </div>
);

const Bussiness = () => (
  <section id='features' className={`${layout.section} `}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className='text-white text-4xl font-bold'>
        You do th business <br className='sm:block hidden' />
        we'll handle the money
      </h2>
      <p className={`${styles.paragraph} mt-10 max-w-[470px]`}>
        {' '}
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button style={'mt-10'} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((featur, index) => (
        <Featur key={featur.id} index={index} {...featur} />
      ))}
    </div>
  </section>
);

export default Bussiness;
