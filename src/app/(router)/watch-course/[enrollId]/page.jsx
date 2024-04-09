"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription'
import CourseContentSection from '../../course-preview/[courseId]/_components/CourseContentSection'
import { toast } from 'sonner'

const WatchCourse = ({params}) => {
  const {user} = useUser();
  const [courseInfo, setCourseInfo] = useState([]);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [completedChapter, setCompletedChapter] = useState([]);

  useEffect(()=>{
    params&&user&&getUserEnrolledCourseDetail();
  },[params&&user])
  //Get user enrolled course details by id+email
  const getUserEnrolledCourseDetail=()=>{
    GlobalApi.getuserEnrolledCourseDetails(params.enrollId,user.primaryEmailAddress.emailAddress)
      .then(res=>{
        setCompletedChapter(res.userEnrollCourses[0].completedChapter)
        setCourseInfo(res.userEnrollCourses[0].courseList);
      })
  }

  //save completed chapter id
  const onChapterComplete=(chapterId)=>{
      GlobalApi.markChapterCompleted(params.enrollId,chapterId)
        .then(res=>{
          // console.log("HEllo",res);
          if(res){
            toast('Chapter Marked as Completed!!');
            getUserEnrolledCourseDetail();
          }
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
            setChapterCompleted={(chapterId)=>onChapterComplete(chapterId)}
            />
  
        </div>

        {/* Course Content  */}
        <div>
            <CourseContentSection 
            courseInfo={courseInfo} 
            isUserAlreadyEnrolled={true} 
            watchMode={true} 
            completedChapter={completedChapter}
            setActiveChapterIndex={(index)=>{setActiveChapterIndex(index)}}
            />
        </div>
    </div>
    </div>
  )
}

export default WatchCourse