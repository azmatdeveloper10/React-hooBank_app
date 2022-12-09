import { clients } from '../constants';
import styles from '../style';

const Client = () => (
  <section  className={`${styles.flexCenter} ${styles.marginY}`}>
    <div className={`${styles.flexCenter} flex-wrap flex-1`}>
      {clients.map((client, index) => (
        <div
          key={client.id}
          className={` flex-wrap flex-1  items-center ${
            index !== client.length - 1 ? 'mr-5' : 'mr-0'
          }`}
        >
          <img
            src={client.logo}
            alt='client__logo'
            className={`sm:w-[192px] w-[120px] min-w-[100px]`}
          />
        </div>
      ))}
    </div>
  </section>
);

export default Client;
