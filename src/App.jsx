import styles from './style';
import {
  CardDeal,
  Bussiness,
  Button,
  Billing,
  Client,
  Feedback,
  CTA,
  GetStarted,
  Testimonial,
  Footer,
  State,
  Hero,
  Navbar,
} from './component';
const App = () => (
  <div className='bg-primary '>
    <div className={`px-5 ${styles.paddingX}${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* hero section */}

    <div className={`bg-primary ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <State />
        <Bussiness />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
