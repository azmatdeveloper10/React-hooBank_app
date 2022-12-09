import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
  <div
    className={`bg-blue-gradient h-[140px] w-[140px] rounded-full ${styles.flexCenter} p-1 cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col h-[100%] w-[100%] rounded-full bg-primary `}
    >
      <div className={`${styles.flexCenter} flex-row`}>
        <p
          className={`text-gradient font-medium text-[18px] leading-[23px] mr-1`}
        >
          <span>Get</span>
        </p>
        <img src={arrowUp} alt='arrow' className='h-[23px] object-contain' />
      </div>
      <p className={`text-gradient font-medium text-[18px] leading-[23px]`}>
        <span>Started</span>
      </p>
    </div>
  </div>
);
export default GetStarted;
