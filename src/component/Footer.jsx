import styles from '../style';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col  pt-28`}>
    <div className={`${styles.flexStart} flex-col md:flex-row w-full `}>
      <div className={`flex flex-col justify-start mr-10`}>
        <img
          src={logo}
          alt='Hoobank'
          className='w-[266px] h-[72px] object-contain'
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-10`}>
          {' '}
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className='w-full flex-[1.5] flex flex-col sm:flex-row justify-between mt-0  sm:mt-10 '>
        {footerLinks.map((footerlink, index) => (
          <div key={footerlink.title} className='mt-5'>
            <h4 className='text-white text-[18px] font-medium mb-1'>
              {footerlink.title}
            </h4>
            <ul>
              {footerlink.links.map((linkName, index) => (
                <li key={linkName.link}>
                  <a
                    href={linkName.link}
                    className={`text-dimWhite hover:text-secondary text-[16px] ${
                      index !== linkName.length - 1 ? 'mb-2' : 'mb-0'
                    }`}
                  >
                    {linkName.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex items-center justify-evenly md:justify-evenly    md:flex-row flex-col mt-10 border-t-[1px] border-t-[#f7f7f7] py-3'>
      <p className={`${styles.paragraph} text-[14px]`}>
        2022 hoobank | All Right Reserved
      </p>
      <div className='flex flex-row gap-3'>
        {socialMedia.map(icon => (
          <a href={`${icon.link}`} key={icon.id}>
            <img src={icon.icon} alt='' />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
