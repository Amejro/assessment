'use client';

function page() {
  return (
    <div>
      <div className='max-w-[416px] mx-auto px-4 space-y-5 py-14'>
        <h2 className='text-[18px] sm:text-[24px] font-bold'>Get started.</h2>

        <form action='' className='space-y-5'>
          <div>
            <label
              htmlFor='fullName'
              className='text-[14px] font-medium text-[#818181]'
            >
              Full name
            </label>
            <input
              type='text'
              name='fullName'
              id='fullName'
              required
              className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
            />
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <div>
              <label
                htmlFor='dateOfBirth'
                className='text-[14px] font-medium text-[#818181]'
              >
                Date of birth
              </label>
              <input
                type='text'
                name='dateOfBirth'
                id='dateOfBirth'
                required
                className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
              />
            </div>

            <div>
              <label
                htmlFor='gender'
                className='text-[14px] font-medium text-[#818181]'
              >
                Gender
              </label>
              <select
                name='gender'
                id='gender'
                required
                className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
              >
                <option value=''>Select one</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor='email'
              className='text-[14px] font-medium text-[#818181]'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
            />
          </div>

          <div>
            <label
              htmlFor='phone'
              className='text-[14px] font-medium text-[#818181]'
            >
              Phone
            </label>
            <input
              type='phone'
              name='phone'
              id='phone'
              required
              className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='text-[14px] font-medium text-[#818181]'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              required
              className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
            />
          </div>

          <button
            // onClick={() => router.push('/account/signup')}
            className=' w-full bg-black text-white py-2 px-4 rounded-sm flex justify-center items-center space-x-2'
          >
            Create account
          </button>
          <div>
            <p className=' text-[14px] text-black'>
              Already signed up?{' '}
              <a href='' className='text-[#0B8659] font-bold'>
                Log in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
