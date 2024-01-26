import { Input } from '@nextui-org/react'
import React from 'react'
import { SearchIcon } from './Icons'

export const InputSearch = () => {
  return (
    <div className='h-fit w-full flex justify-center items-center py-3 my-2'>

        <Input type="text" fullWidth size='md' className=' h-10 flex-shrink  w-full' placeholder='keyboard' endContent={
            <SearchIcon/>
        }/>


    </div>
  )
}
