'use client';

import {TbPlaylist} from 'react-icons/tb';
import {AiOutlinePlus} from 'react-icons/ai'

const Library = () => {
  const onClick = () => {
    // Handle upload later
  };
  return ( 
    <div className="flex flex-col">
     <div className="flex flex-row justify-between h-auto gap-y-4 px-5 py-4">
      <div className="inline-flex items-center gap-x-2 h-auto">
        <TbPlaylist className='text-neutral-400' size={26}/>
        <p className='text-neutral-400 font-medium text-md'>
          Your Library
        </p>
      </div>
      <AiOutlinePlus
      onClick={onClick}
      size={20}
      className='text-neutral-400 cursor-pointer hover:text-white transition'
      />
     </div>
     <div className='flex flex-col gap-y-2 mt-4 px-3'>
List of songs!
     </div>
    </div>
   );
}
 
export default Library;