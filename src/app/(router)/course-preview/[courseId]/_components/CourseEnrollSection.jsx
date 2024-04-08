import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from "sonner"


const CourseEnrollSection = ({courseInfo,isUserAlreadyEnrolled}) => {
    const membership = false;
    const {user} = useUser();

    const router = useRouter();

    useEffect(()=>{
        console.log("isUserAlreadyEnrolled",isUserAlreadyEnrolled);
    },[isUserAlreadyEnrolled])

    //Enroll to the course
    const onEnrollCourse=()=>{
        GlobalApi.enrollToCourse(courseInfo?.slug,user?.primaryEmailAddress?.emailAddress)
            .then(res=>{
                console.log(res);
                if(res){

                    //Show toast on successfulll enroll
                    toast("User Enrolled Successfully",{
                        description: "User Enrolled to this Course"
                    })
                    
                    //redirect to watch course
                    router.push('/watch-course/'+res.createUserEnrollCourse.id)
                }
            })
    }
  return (
    <div className='p-3 text-center rounded-sm bg-primary mb-3'>
        
        <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
        
        {/* User has Membership and Already Login  */}

        {user&&(membership||courseInfo.free)&&!isUserAlreadyEnrolled?<div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Enroll Now to Start Learning and Building the project</h2>
            <Link href={'/sign-in'}>
                <Button className="bg-white text-primary hover:bg-white hover:text-primary"
                onClick={()=>onEnrollCourse()}
                >
                    Enroll Now
                </Button>
            </Link>
        </div>
        :!user?
        <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Enroll Now to Start Learning and Building the project</h2>
            <Button className="bg-white text-primary hover:bg-white
                    hover:text-primary">
                Enroll Now
            </Button>
        </div>
        : !isUserAlreadyEnrolled&&<div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Buy Monthly Membership and Get Access to All Courses</h2>
            <Button className="bg-white text-primary hover:bg-white
                    hover:text-primary">
                Buy Membership Just $2.99
            </Button>
        </div>}
        {/* Above section User Does not have membership or not signup/login  */}

        {isUserAlreadyEnrolled&&<div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'>Continue to Learn Your Project</h2>
            <Link href={'/watch-course/'+isUserAlreadyEnrolled}>
                <Button className="bg-white text-primary hover:bg-white
                        hover:text-primary">
                    Continue
                </Button>
            </Link>
        </div>}
    </div>
  )
}

export default CourseEnrollSection