'use client';
import Link from 'next/link';
import {
  BriefCaseIcon,
  FlairLogo,
  MenuIcon,
  TrainingIcon,
  UserIcon,
} from '../icons';
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('Students');
  const path = window.location.pathname;

  return (
    <nav className='fixed top-0 w-full bg-white '>
      {path.startsWith('/account') ? (
        <div className='flex py-2 justify-center items-center border-b'>
          <FlairLogo />
        </div>
      ) : (
        <div>
          <div className='flex py-2 justify-center items-center border-b'>
            <div className='p-2 rounded-sm bg-[#F7F7F7] space-x-6 text-sm '>
              <Link
                onClick={() => setActive('Students')}
                href='/'
                className={`${
                  active === 'Students'
                    ? 'bg-white py-1 px-4 rounded shadow-sm font-bold'
                    : ''
                }`}
              >
                For Students & Graduates
              </Link>
              <Link
                onClick={() => setActive('Partners')}
                href='/'
                className={`${
                  active === 'Partners'
                    ? 'bg-white py-1 px-4 rounded shadow-sm font-bold'
                    : ''
                }`}
              >
                For Partners
              </Link>
            </div>
          </div>
          <div className='max-w-6xl mx-auto flex justify-between items-center py-3 px-4'>
            <Link href='/'>
              <FlairLogo />
            </Link>

            <ul className='hidden lg:flex items-center space-x-6'>
              <li>
                <Link href='' className='flex items-center space-x-2'>
                  <BriefCaseIcon /> <span>Jobs</span>
                </Link>
              </li>
              <li>
                <Link href='' className='flex items-center space-x-2'>
                  <UserIcon /> Mentorship
                </Link>
              </li>
              <li>
                <Link href='' className='flex items-center space-x-2'>
                  <TrainingIcon /> Training
                </Link>
              </li>
            </ul>

            <div className='space-x-4 flex items-center'>
              <div className='hidden sm:flex space-x-2 text-bold'>
                <button className='border px-2 py-2 rounded-sm'>Log in</button>
                <button className=' px-2 py-2 rounded-sm bg-black text-white'>
                  Sign up
                </button>
              </div>
              <button className='lg:hidden'>
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
