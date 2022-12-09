import { feedback } from '../constants';
import styles from '../style';
import Feedback from './Feedback';

const Testimonial = () => (
  <section
    id='clients'
    className={`${styles.paddingY} ${styles.flexCenter} flex-col reative `}
  >
    <div className='absolute w-[50%] h-[50%] z-[0] -right-[30%] rounded-full blue__gradient' />

    <div
      className={`flex flex-col md:flex-row items-center justify-between sm:mb-16 mb-6 relative z-[1]`}
    >
      <h2 className={`${styles.heading2}`}>
        What People are <br className='sm:block hidden' />
        saying about us
      </h2>
      <div className={`w-full md:mt-0 mt-6`}>
        <p className={`${styles.paragraph} max-w-[470px] text-left`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
      {feedback.map(card => (
        <Feedback key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonial;
