'use client';
import {
  AccomplishmentsIcon,
  CertificateIcon,
  CircleIcon,
  EdicationIcon,
  InterestIcon,
  UploadIcon,
  UserSmile,
  WorkIcon,
} from '@/components/icons';
import Modal from '@/components/profile/modal';
import {
  Accomplishments,
  EducationComp,
  UploadResume,
  WorkExperience,
} from '@/components/profile/modal-components';
import { useState } from 'react';
export default function Page() {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-12 gap-6 max-w-6xl mx-auto px-4 '>
        <div className='sm:col-span-3  '>
          <div className='bg-[#0B8659]'>
            <div className='relative text-white z-10 flex justify-between items-center p-4 overflow-clip '>
              <h3 className='text-[16px] font-bold'>
                Profile <br /> Completion
              </h3>
              <div className='flex justify-center items-center size-[56px] rounded-full border-[5px] border-[#6CB69B]'>
                0%
              </div>
              <UserSmile className='absolute -z-10 -left-16 -top-5' />
            </div>

            <div className='hidden sm:block'>
              <ul className='text-white font-bold text-[14px] p-4 space-y-6'>
                {profileList.map((item) => (
                  <li
                    key={item.title}
                    className='flex items-center justify-between'
                  >
                    <span>{item.title}</span> <CircleIcon />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='sm:col-span-9 '>
          <div className='space-y-[32px] max-w-xl'>
            <h2 className='text-[18px] sm:text-[24px] font-bold'>
              Set up your profile.
            </h2>
            <ul className='space-y-6 '>
              {profileList.map((item) => (
                <ProfileItem key={item.title} item={item} />
              ))}
            </ul>

            <div className='flex space-x-4 w-full text-xs font-bold pb-10 space'>
              <button className='p-2 w-full border rounded-sm'>
                {' '}
                I’ll do it later
              </button>
              <button className='p-2 w-full border rounded-sm bg-[#E8E8E8] text-[#818181]'>
                {' '}
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const profileList = [
  {
    title: 'Education',
    icon: EdicationIcon,
    description: 'School info, field of study',
    Component: <EducationComp />,
  },
  {
    title: 'Work Experience',
    icon: WorkIcon,
    description: 'Where you’ve worked, your role',
    Component: <WorkExperience />,
  },
  {
    title: 'Interests & Skills',
    icon: InterestIcon,
    description: 'Career interests and skillset',
    Component: <></>,
  },
  {
    title: 'Certifications',
    icon: CertificateIcon,
    description: 'Certifications worth highlighting',
    Component: <></>,
  },
  {
    title: 'Accomplishments',
    icon: AccomplishmentsIcon,
    description: 'Personal achievement & impact',
    Component: <Accomplishments />,
  },
  {
    title: 'Upload Resume',
    icon: UploadIcon,
    description: 'CV, portfolio',
    Component: <UploadResume />,
  },
];

function ProfileItem({
  item,
}: {
  item: {
    title: string;
    icon: any;
    description: string;
    Component: React.ReactNode;
  };
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li key={item.title} className='flex space-x-2 '>
        <item.icon />
        <div className='flex justify-between w-full items-start border-b pb-6 '>
          <div>
            <h3 className='text-[16px] font-bold'>{item.title}</h3>
            <p className='text-[#818181] text-[14px] font-medium'>
              {item.description}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className='text-black font-bold text-2xl'
          >
            +
          </button>
        </div>
      </li>
      <div className={`${isOpen ? 'absolute top-28 z-50' : 'hidden'}`}>
        <Modal title={item.title} onClose={() => setIsOpen(false)}>
          <div>{item.Component}</div>
        </Modal>
      </div>
    </>
  );
}
