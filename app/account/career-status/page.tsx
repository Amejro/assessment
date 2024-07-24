'use clint';

import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div className='max-w-[416px] mx-auto px-4 space-y-5 py-14'>
        <h2 className='text-[18px] sm:text-[24px] font-bold'>
          Where are you currently in your professional career?
        </h2>
        <ul className='space-y-4 pb-4'>
          <li className='w-full py-2 border rounded-full text-center text-[14px] font-bold'>
            Still in school
          </li>
          <li className='w-full py-2 border rounded-full text-center text-[14px] font-bold'>
            Currently doing National Service
          </li>
          <li className='w-full py-2 border rounded-full text-center text-[14px] font-bold'>
            Done with National Service
          </li>
          <li className='w-full py-2 border rounded-full text-center text-[14px] font-bold'>
            Experienced Professional
          </li>
        </ul>
        <Link href='/account/profile'>
          <button className=' w-full bg-black text-white py-2 px-4 rounded-sm flex justify-center items-center space-x-2'>
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
