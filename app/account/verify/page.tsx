import Image from 'next/image';
import Verify from '../../../public/verify.png';
import Link from 'next/link';

function page() {
  return (
    <div>
      <div className='max-w-[416px] flex flex-col items-center text-center mx-auto px-4 space-y-5 py-14'>
        <div className=''>
          <Image src={Verify} alt='verify' className='' />
        </div>
        <h2 className='text-[18px] sm:text-[24px] lg:text-[28px] font-bold'>
          Verify your account.
        </h2>
        <p className='text-xs font-medium text-[#818181]'>
          A verification email will be sent to your email address provided.
          Click on the link in the mail to verify your account.
        </p>
        <div className='border w-fit rounded-full px-2 py-1 bg-[#F5F5F5] text-[#818181] text-[14px]'>
          <span>mic***@inpathgroup.africa</span>
        </div>
        <div className='text-[#0B8659] font-bold'>
          <span>Resend link</span>
        </div>

        <Link href='/account/career-status'>next -{'>'}</Link>
      </div>
    </div>
  );
}

export default page;
