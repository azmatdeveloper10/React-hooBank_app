import { card } from '../assets';
import Button from './Button';
import styles, { layout } from '../style';

const CardDeal = () => (
  <section  className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal
        <br className='sm:block hidden' />a few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-[10px]`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button style='mt-10' />
    </div>
    <div className={`${layout.sectionImg}`}>
      <img src={`${card}`} alt='Card' />
    </div>
  </section>
);

export default CardDeal;
