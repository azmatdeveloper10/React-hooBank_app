import { discount, robot } from '../assets';
import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 flex-col ${styles.flexStart} px-6 xl:px-0 sm:px-16`}
    >
      <div
        className={`flex flex-row items-center py-[6px] px-4 bg-black-gradient rounded-[10px] mb-10`}
      >
        <img src={discount} alt='Discount' className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph}`}>
          <span className='text-white'>20%</span> Discount For
          <span className='text-white'> 1 Month</span> Account
        </p>
      </div>

      <div className={`flex flex-row justify-between item-center w-full`}>
        <h1 className='flex-1 font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] text-white'>
          The Next <br className='hidden sm:block' />
          <span className='text-gradient'>Generation </span>
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
      <h1 className=' font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] text-white w-full'>
        Payment Method
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-0 relative`}>
      <img
        src={robot}
        alt='Billing'
        className='w-[100%] h-[100%] z-[5] relative object-contain'
      />
      <div className='absolute z=[0] top-0  w-[40%] h-[40%] rounded-full pink__gradient' />
      <div className='absolute z=[0] bottom-0  w-[50%] h-[50%] rounded-full white__gradient' />
      <div className='absolute z=[0] bottom-0   w-[50%] h-[50%] rounded-full blue__gradient' />

      {/* <div className='absolute top-0 left-[100] w-[40%] h=[35%] pink__gradient z-[0]' /> */}
      {/* <div className='absolute top-[20] bottom-[40] w-[80%] h=[80%] z-[1] rounded-full bg-white ' /> */}
    </div>

    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);
export default Hero;
