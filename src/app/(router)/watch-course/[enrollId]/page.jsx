"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription'
import CourseContentSection from '../../course-preview/[courseId]/_components/CourseContentSection'

const WatchCourse = ({params}) => {
  const {user} = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  useEffect(()=>{
    params&&user&&getUserEnrolledCourseDetail();
  },[params&&user])
  //Get user enrolled course details by id+email
  const getUserEnrolledCourseDetail=()=>{
    GlobalApi.getuserEnrolledCourseDetails(params.enrollId,user.primaryEmailAddress.emailAddress)
      .then(res=>{
        setCourseInfo(res.userEnrollCourses[0].courseList);
      })
  }
  return courseInfo.name&&(
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* Title Video, Description */}
        <div className='col-span-2 bg-white p-3'>
            <CourseVideoDescription 
            courseInfo={courseInfo}
            activeChapterIndex={activeChapterIndex}
            watchMode={true}
            />
  
        </div>

        {/* Course Content  */}
        <div>
            <CourseContentSection 
            courseInfo={courseInfo} isUserAlreadyEnrolled={true} watchMode={true} setActiveChapterIndex={(index)=>{setActiveChapterIndex(index)}}
            />
        </div>
    </div>
    </div>
  )
}

export default WatchCourse