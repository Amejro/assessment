import {
  BoldIcon,
  InfoIcon,
  ItalicIcon,
  ListIcon,
  UnderLineIcon,
  UploadFileIcon,
} from '../icons';

export function WorkExperience() {
  return (
    <div>
      <div className='bg-[#EAF5FF] px-4 py-2'>
        <div className='max-w-[510px] mx-auto  space-x-4 flex items-center justify-between'>
          <InfoIcon />
          <p className='text-[14px] font-medium text-[#202020]'>
            Link your NSS details to Flair to make you more credible to
            employers.
          </p>
          <div className='w-24 '>
            <button className='block  px-2 bg-black text-white py-2  rounded-sm  text-[14px] font-bold'>
              Link NSS
            </button>
          </div>
        </div>
      </div>
      <div className='max-w-[516px] mx-auto px-4  space-y-5 py-14'>
        <form className='space-y-5'>
          <div>
            <label
              htmlFor='jobTitle'
              className='text-[14px] font-medium text-[#818181]'
            >
              Job Title
            </label>
            <input
              type='text'
              name='jobTitle'
              id='jobTitle'
              required
              className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
            />
          </div>

          <div>
            <label
              htmlFor='company'
              className='text-[14px] font-medium text-[#818181]'
            >
              Company
            </label>
            <select
              name='company'
              id='company'
              required
              className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
            >
              <option value=''>Select one</option>
            </select>
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <div>
              <label
                htmlFor='startDate'
                className='text-[14px] font-medium text-[#818181]'
              >
                State date
              </label>
              <input
                type='date'
                name='startDate'
                id='startDate'
                required
                className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
              />
            </div>

            <div>
              <label
                htmlFor='endtDate'
                className='text-[14px] font-medium text-[#818181]'
              >
                End date
              </label>
              <input
                type='date'
                name='endtDate'
                id='endtDate'
                required
                className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
              />
            </div>
          </div>

          <div>
            <input
              type='radio'
              name='work'
              id='work'
              required
              className='out outline outline-offset-1 appearance-none p-1 checked:inline-block checked:bg-black'
            />
            <label
              htmlFor='work'
              className='text-[14px] font-medium text-[#818181]'
            >
              I currently work here
            </label>
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className=' w-fit bg-[#E8E8E8] text-[#818181] py-2 px-4 rounded-sm  text-[14px] font-bold'
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function EducationComp() {
  return (
    <div>
      <div className='max-w-[516px] mx-auto px-4  space-y-5 py-14'>
        <form className='space-y-5'>
          <div>
            <label
              htmlFor='Institution'
              className='text-[14px] font-medium text-[#818181]'
            >
              Institution
            </label>
            <select
              name='Institution'
              id='Institution'
              required
              className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
            >
              <option value=''>Search institution</option>
            </select>
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <div>
              <label
                htmlFor='Qualification'
                className='text-[14px] font-medium text-[#818181]'
              >
                Qualification
              </label>
              <select
                name='Qualification'
                id='Qualification'
                required
                className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
              >
                <option value=''></option>
              </select>
            </div>

            <div>
              <label
                htmlFor='course'
                className='text-[14px] font-medium text-[#818181]'
              >
                Course Category
              </label>
              <select
                name='course'
                id='course'
                required
                className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
              >
                <option value=''></option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor='courseOfStudy'
              className='text-[14px] font-medium text-[#818181]'
            >
              Course of study
            </label>
            <input
              type='text'
              name='courseOfStudy'
              id='courseOfStudy'
              required
              className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
            />
          </div>

          <div className='grid grid-cols-2 gap-5'>
            <div>
              <label
                htmlFor='startDate'
                className='text-[14px] font-medium text-[#818181]'
              >
                State date
              </label>
              <input
                type='date'
                name='startDate'
                id='startDate'
                required
                className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
              />
            </div>

            <div>
              <label
                htmlFor='endtDate'
                className='text-[14px] font-medium text-[#818181]'
              >
                End date
              </label>
              <input
                type='date'
                name='endtDate'
                id='endtDate'
                required
                className='block h-10 w-full rounded-sm border border-input px-3 py-2 text-base'
              />
            </div>
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className=' w-fit bg-[#E8E8E8] text-[#818181] py-2 px-4 rounded-sm  text-[14px] font-bold'
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function UploadResume() {
  return (
    <div>
      <div className='max-w-[516px] mx-auto px-4  space-y-5 py-14'>
        <form className='space-y-5'>
          <div className='space-y-2'>
            <h4 className='text-[18px]  font-bold'>Resume/CV</h4>
            <p className='font-medium text-[14px] text-[#818181]'>
              Format should be either .pdf, .docx, .doc
            </p>
            <label
              htmlFor='resume'
              className='text-[14px] font-medium text-[#818181] border border-dashed border-[#D4D4D4] p-4 rounded-sm flex items-center justify-between'
            >
              <div className='flex items-center space-x-2'>
                <UploadFileIcon />
                <span>Drop file here</span>
              </div>
              <button className=' w-fit border  text-black py-1 px-2 rounded-sm  text-[14px] font-bold'>
                Browse
              </button>
            </label>
            <input
              type='file'
              name='resume'
              id='resume'
              required
              className='hidden'
            />
          </div>

          <div className='space-y-2'>
            <h4 className='text-[18px]  font-bold'>
              Other files eg. portfolio
            </h4>
            <p className='font-medium text-[14px] text-[#818181]'>
              Format should be either .pdf, .docx, .doc
            </p>
            <label
              htmlFor='otherFiles'
              className='text-[14px] font-medium text-[#818181] border border-dashed border-[#D4D4D4] p-4 rounded-sm flex items-center justify-between'
            >
              <div className='flex items-center space-x-2'>
                <UploadFileIcon />
                <span>Drop file here</span>
              </div>
              <button className=' w-fit border  text-black py-1 px-2 rounded-sm  text-[14px] font-bold'>
                Browse
              </button>
            </label>
            <input
              type='file'
              name='otherFiles'
              id='otherFiles'
              required
              className='hidden'
            />
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className=' w-fit bg-[#E8E8E8] text-[#818181] py-2 px-4 rounded-sm  text-[14px] font-bold'
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function Accomplishments() {
  return (
    <div>
      <div className='max-w-[516px] mx-auto px-4  space-y-5 py-14'>
        <form className='space-y-5'>
          <div className='border rounded-sm'>
            <div className='flex items-center font-bold p-2 space-x-4 border-b'>
              <div className='bg-[#F5F5F5] p-2 rounded'>
                <BoldIcon className='size-4' />
              </div>
              <div className=''>
                <UnderLineIcon className='size-4' />
              </div>
              <div className=''>
                <ItalicIcon className='size-4' />
              </div>
              <div className=''>
                <ListIcon className='size-4' />
              </div>
            </div>
            <div className='space-y-2'>
              <textarea
                rows={5}
                cols={33}
                name='Accomplishments'
                id='Accomplishments'
                required
                className='w-full focus:outline-none px-2 py-2'
              />
            </div>
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className=' w-fit bg-black text-white py-2 px-4 rounded-sm  text-[14px] font-bold'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
