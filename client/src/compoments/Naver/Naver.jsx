import React from 'react'

const Naver = () => {
  return (
    <div className="navbar bg-base-100 text-[#064E3B]">
 <div>
 <FaArrowCircleLeft className='text-white text-2xl' />
 </div>

{/* Right Section: Avatar and Name */}
<div className='flex items-center'>
  <div className="avatar">
    <div className="w-14 rounded-full">
      <img src={userData?.profile} alt="User Avatar" />
    </div>
  </div>
  <h2 className='text-white ml-2 font-bold'>{userData?.fullName}</h2>
</div>
  </div>
  )
}

export default Naver
