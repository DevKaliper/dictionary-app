import { Input } from '@nextui-org/react'
import React from 'react'

export const InputSearch = () => {
  return (
    <div className='h-fit w-full flex justify-center items-center py-3'>

        <Input type="text" fullWidth size='md' className='px-6 rounded-xl h-10 flex-shrink  w-full' placeholder='keyboard' endContent={
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
        }/>


    </div>
  )
}
