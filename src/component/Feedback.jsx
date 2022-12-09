import { quotes } from '../assets';
const Feedback = ({ content, name, title, img }) => (
  <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-4 mr-0 feedback-card'>
    <img
      src={quotes}
      alt='Double__quoutes'
      className='w-[42px] h-[27px] object-contain'
    />
    <p className={`text-white text-normal text-[18px] mt-5`}>{content}</p>
    <div className='flex flex-col items-start gap-5 sm:gap-0 sm:flex-row mt-5 sm:items-center'>
      <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full ' />
      <div className='flex flex-col sm:ml-5 justify-center'>
        <h4 className={`text-white text-[20px] leading-[32px] `}>{name}</h4>
        <p className={'text-dimWhite text-[16px] leading-[22px]'}>{title}</p>
      </div>
    </div>
  </div>
);

export default Feedback;
