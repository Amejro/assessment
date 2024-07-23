'use client';
import Image from 'next/image';
import Candidate from '../../public/Candidate.png';
import Employer from '../../public/Employer.png';
import Mentor from '../../public/Mentor.png';
import Trainer from '../../public/Trainer.png';
import { ArrowRightIcon } from '@/components/icons';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [selectedAccount, setSelectedAccount] = useState<string>();
  const router = useRouter();

  return (
    <div>
      <div className='max-w-xl mx-auto px-4 space-y-5 py-14'>
        <h2 className='text-[18px] sm:text-[24px] font-bold'>
          What type of account are you setting up?
        </h2>
        <div className='grid sm:grid-cols-2 gap-5'>
          {accountType.map((type) => (
            <button
              disabled={!type.isAvailable}
              onClick={() => setSelectedAccount(type.name)}
              key={type.name}
              className={`relative text-start  border rounded-sm p-4 space-y-[16px]  ${
                selectedAccount === type.name ? 'bg-[#F5F5F5] border-black' : ''
              }`}
            >
              {!type.isAvailable && (
                <div className='absolute top-0 right-0 bg-[#FCF4E6] text-[#D98F00] text-xs font-bold rounded-sm px-2 py-1'>
                  Coming soon
                </div>
              )}

              <Image src={type.image} alt='Trainer' className='' />
              <div>
                <h3 className='text-[16px] font-bold'>{type.name}</h3>
                <p className='text-sm text-[#818181]'>{type.description}</p>
              </div>
            </button>
          ))}
        </div>

        <button
          disabled={!selectedAccount}
          onClick={() => router.push('/account/signup')}
          className={` w-full py-2 px-4 rounded-sm flex justify-center items-center space-x-2 ${
            selectedAccount
              ? 'bg-black text-white'
              : 'bg-[#E8E8E8] text-[#818181]'
          }`}
        >
          <span>Next</span> <ArrowRightIcon className='size-5' />
        </button>
      </div>
    </div>
  );
}

const accountType = [
  {
    name: 'Candidate',
    description: 'A graduate looking for an employment opportunity',
    image: Candidate,
    isAvailable: true,
  },
  {
    name: 'Employer',
    description: 'An organisation looking to hire top talents',
    image: Employer,
    isAvailable: true,
  },
  {
    name: 'Mentor',
    description: 'A professional helping others navigate their careers',
    image: Mentor,
    isAvailable: false,
  },
  {
    name: 'Trainer',
    description: 'An organisation offering training programmes',
    image: Trainer,
    isAvailable: false,
  },
];
