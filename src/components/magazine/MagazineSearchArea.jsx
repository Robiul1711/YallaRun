import React from 'react'
import { Title20 } from '../common/Title'


const MagazineSearchArea = () => {
  return (
    <div className=' flex flex-col gap-6'>
        <Title20 className={`!text-customBlack !font-semibold`}>
            Magazine
        </Title20>

        <div className=' w-full flex items-center gap-6'>
            <div className=' w-[90%] px-5 py-4 bg-transparent border-[1px] border-[#595959] rounded-[48px] '>
                <input type='text' placeholder='Enter keywords, topics, or title' className=' w-full placeholder-[#595959] text-customBlack outline-none border-none bg-transparent'/>

            </div>

            <button className=' w-[10%] duration-200 hover:opacity-90 px-6 py-4 rounded-full bg-primaryColor flex justify-center items-center text-lg text-customBlack'>
                Search
            </button>

        </div>


    </div>
  )
}

export default MagazineSearchArea