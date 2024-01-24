import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import boardIcon from '../assets/icon-board.svg';
import lightIcon from '../assets/icon-light-theme.svg';
import darkIcon from '../assets/icon-dark-theme.svg';
import { Switch } from '@headlessui/react';
import useDarkMode from '../Hooks/useDarkMode';



function HeaderDropdown(setOpenDropdown) {
    const [colorTheme, setColorTheme] = useDarkMode()
    const [darkSIde, setDarkSide] = useState(second)


    const boards = useSelector((state) => state.boards)
    


  return (
    <div className='py-10 px-6 absolute left-0 right-0 bottom-[-100vh] top-16 bg-[#00000080]'>


        <div className='bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7ela] w-full py-4 rounded-xl'
        onClick={
            (e) => {
                if(e.target !== e.currentTarget){
                    return
                }
                setOpenDropdown(false)
            }
        }>
            <h3 className='dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8'>
                All Boards ({boards?.length})
            </h3>
            <div>
            {boards.map((board, index) => (
  <div
    className={`flex items-baseline space-x-2 px-5 py-4 ${board.isActive && 'bg-[#635fc7] rounded-r-full text-white mr-8'}`}
    key={index}
  >
    <img src={boardIcon} className='h-4' />
    <p className='text-lg font-bold'>{board.name}</p>
  </div>
))}

<div className=' flex items-baseline space-x-2 text[#635fc7] px-5 py-4'>
<img src={boardIcon} className='h-4' />
<p className='text-lg font-bold'>
    Create New Board
</p>
</div>
<div className='mx-2 p-4 space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg'>
                <img src={lightIcon}/>
                <Switch className={``}>

                </Switch>
                <img src={darkIcon}/>
</div>

            </div>
        </div>
    </div>

  )
}

export default HeaderDropdown