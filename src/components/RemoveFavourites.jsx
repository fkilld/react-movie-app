import React from 'react'

const RemoveFavourites = () => {
  return (
    <div className='flex items-center text-white  hover:text-red-700'>
      <span className='mr-2'>Remove from favourites</span>
      <svg
        className='w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </div>
  )
}

export default RemoveFavourites
