"use client"
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseEnrollSection from './_components/CourseEnrollSection'
import CourseContentSection from './_components/CourseContentSection'

const CoursePreview = ({params}) => {

    const [courseInfo,setCourseInfo]=useState();

    useEffect(()=>{
        params&&getCourseInfoId();
    },[params])

    //used to get course info by slug/id name
    const getCourseInfoId=()=>{
        GlobalApi.getCourseById(params?.courseId)
            .then(res=>{
                setCourseInfo(res?.courseList)
            })
    }
  return courseInfo&&(
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* Title Video, Description */}
        <div className='col-span-2 bg-white p-3'>
            <CourseVideoDescription courseInfo={courseInfo}/>
        </div>

        {/* Course Content  */}
        <div>
            <CourseEnrollSection/>
            <CourseContentSection courseInfo={courseInfo}/>
        </div>
    </div>
  )
}

export default CoursePreview