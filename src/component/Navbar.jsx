import { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className='py-6 w-full flex items-center justify-between navbar '>
      <img src={logo} alt='' className='h-[32px] w-[124px]' />

      <ul className='list-none sm:flex justify-end items-center hidden flex-1'>
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`text-white ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-[16px]`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='object-contain w-[28px] h-[28px] cursor-pointer'
          onClick={() => settoggle(prev => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } absolute p-6 bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex justify-end items-center flex-col flex-1'>
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`text-white ${
                  index === navLinks.length - 1 ? 'mb-0' : 'mb-5'
                } text-[16px]`}
              >
                <a
                  href={`#${link.id}`}
                  className='text-dimWhite hover:text-secondary'
                >
                  {link.title}
                </a>{' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
