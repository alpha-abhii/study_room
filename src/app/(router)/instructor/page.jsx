"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect,useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi';
import WelcomeBannerInstructorDashboard from './_components/WeclcomeBannerInstuctorDashboard';
import OurTeachers from './_components/OurTeachers';

const InstructorDashboard = () => {
  const {user} = useUser();
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);

  useEffect(()=>{
    user&&getAllUserEnrolledCourses();
  },[user])


  //Get all user enrolled course list
  const getAllUserEnrolledCourses=()=>{
    GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress)
      .then(res=>{
        // console.log(res)
        setUserEnrolledCourses(res.userEnrollCourses);
      })
  }
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-4 p-5 gap-5'>
            {/* Left Container */}
            <div className='col-span-3'>
                {/* Banner */}

                <WelcomeBannerInstructorDashboard user ={user}/>

                {/* In progress course list  */}
                {/* <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/> */}
                <OurTeachers/>         
            </div>

            {/* Right Container */}
            {/* <div className='p-5 bg-white rounded-xl'>
                <SideBanners/>
            </div> */}
        </div>
    </div>
  )
}

export default InstructorDashboard