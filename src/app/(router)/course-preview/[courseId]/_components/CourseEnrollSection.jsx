import { Button } from '@/components/ui/button'
import React from 'react'

const CourseEnrollSection = () => {
    const membership = false;
  return (
    <div className='p-3 text-center rounded-sm bg-primary mb-3'>
        
        <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
        
        {/* User has Membership and Already Login  */}

        {membership?<div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Enroll Now to Start Learning and Building the project</h2>
            <Button className="bg-white text-primary hover:bg-white
                    hover:text-primary">
                Enroll Now
            </Button>
        </div>
        : <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Buy Monthly Membership and Get Access to All Courses</h2>
            <Button className="bg-white text-primary hover:bg-white
                    hover:text-primary">
                Buy Membership Just $2.99
            </Button>
        </div>}
        {/* Above section User Does not have membership or not signup/login  */}
    </div>
  )
}

export default CourseEnrollSection