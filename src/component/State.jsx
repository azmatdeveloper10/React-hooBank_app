import { stats } from '../constants';
import styles from '../style';

const State = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map(stat => (
      <div
        key={stat.id}
        className={`flex-1 flex items-center justify-start m-3`}
      >
        <h4 className='font-semibold sm:text-[40px] text-[30px] xl:leading-[53px] leading-[43px] text-white '>
          {stat.value}
        </h4>
        <p className='font-normal sm:text-[20px] text-[15px] xl:leading-[26px] leading-[21px] text-white text-gradient uppercase ml-2'>
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);
export default State;
