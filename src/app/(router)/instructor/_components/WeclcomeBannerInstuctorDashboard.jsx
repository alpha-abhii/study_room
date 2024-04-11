import Image from 'next/image'
import React from 'react'

const WelcomeBannerInstructorDashboard = ({user}) => {
    return (
        <div className='bg-purple-100 rounded-sm p-5 flex gap-5 items-center'>
            <Image src='/logo2.svg' alt='fly' width={150} height={150} />
            <div>
                <h2 className='font-light text-[32px]'>
                    Welcome to our , <span className='font-bold text-primary'>
                        {/* {user?.fullName} */}
                        Instructor Page
                    </span>
                </h2>
                <h2 className='text-[16px] font-light text-slate-500'>
                Lets Your Knowledge Inspire the students, <br></br>
                </h2>
            </div>
        </div>
    )
}

export default WelcomeBannerInstructorDashboard