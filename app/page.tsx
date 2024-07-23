import {
  ArrowRightIcon,
  ChevronDownIcon,
  SearchIcon,
} from '@/components/icons';
export default function Home() {
  return (
    <div className=''>
      <section
        id='hero'
        className='h-[474px] md:[575px]  lg:h-[100dvh]   bg-[#F5F5F5] bg-[url("../public/mobile.svg")]  bg-no-repeat   sm:bg-[url("../public/tablet.svg")] lg:bg-[url("../public/hero.svg")]'
      >
        <div className='grid w-full h-full'>
          <div className='justify-self-center self-center px-4 space-y-[72px]'>
            <div>
              <h1 className='text-[#000000] font-black text-[28px] sm:text-[44px] lg:text-[64px]'>
                Discover a greater you.
              </h1>
              <p className='font-bold text:[18px] sm:text-[20px] lg:text-4xl'>
                We help you{' '}
                <span className='text-[#63AF93]'>find the perfect job.</span>
              </p>
            </div>
            <div>
              <div className='hidden sm:block'>
                <DeskTopSearch />
              </div>

              <div className='sm:hidden'>
                <MobileSearch />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileSearch() {
  return (
    <form className='max-w-md mx-auto space-y-4 flex flex-col items-center'>
      <div className='flex items-center p-3 w-full   text-gray-900 text-base bg-[#FFFFFF]  rounded-full '>
        <div className=''>
          <SearchIcon className='text-[#818181]' />
        </div>
        <input
          type='text'
          id='search'
          className=' w-full  bg-transparent  focus:outline-none px-2 placeholder:text-[#ABADAE]'
          placeholder='Try "Civil Engineer"'
          required
        />
      </div>

      <div className='flex justify-between items-center p-3 w-full text-gray-900 text-base bg-[#FFFFFF]  rounded-full '>
        <div role='button' className='flex text-[14px] font-bold text-black'>
          <p className='pr-8'>Jobs</p>
        </div>
        <ChevronDownIcon />
      </div>

      <div
        role='button'
        className='bg-[#0B8659] rounded-full text-white p-3 w-fit'
      >
        <ArrowRightIcon className='size-5' />
      </div>
    </form>
  );
}

function DeskTopSearch() {
  return (
    <form className='max-w-md mx-auto '>
      <div className='flex items-center p-3   text-gray-900 text-base bg-[#FFFFFF]  rounded-full '>
        <div className=''>
          <SearchIcon className='text-[#818181]' />
        </div>
        <input
          // type='search'
          id='search'
          className=' w-full  bg-transparent  focus:outline-none px-2 placeholder:text-[#ABADAE]'
          placeholder='Try "Civil Engineer"'
          required
        />
        <div className='flex items-center space-x-1'>
          <span className='text-[#ABADAE] text-xs'>|</span>
          <div role='button' className='flex text-[14px] font-bold text-black'>
            <p className='pr-10'>Jobs</p>
            <ChevronDownIcon />
          </div>

          <div
            role='button'
            className='bg-[#0B8659] rounded-full text-white p-2'
          >
            <ArrowRightIcon className='size-4' />
          </div>
        </div>
      </div>
    </form>
  );
}
