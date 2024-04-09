import { Progress } from '@/components/ui/progress'
import Link  from 'next/link'
import Image from 'next/image'
import React from 'react'

const ProgressCourseItem = ({course}) => {

    const getTotalCompletedChapterPerc=(item)=>{
        // console.log(item.completedChapter)
        // console.log(item.courseList.chapter.length)
        const perc = ((Math.min(course.completedChapter?.length,course?.courseList?.chapter?.length))/(item?.courseList?.chapter?.length))*100;
        return perc.toFixed(0);
    }

  return (
    <Link href={"/course-preview"+course?.courseList?.slug}>
    <div className='border rounded-md hover:shadow-md hover:shadow-purple-300 cursor-pointer'>
        <Image src={course.courseList?.banner?.url}
        width={500}
        height={150}
        alt='banner'
        className='rounded-t-md h-[130px] object-cover'
        />
        <div className='flex flex-col gap-1 p-2'>
            <h2 className='font-medium'>
                {course.courseList.name}
            </h2>
            <h2 className='text-[12px] text-gray-400'>
                {course.courseList.author}
            </h2>
            <h2 className='text-[12px] text-gray-400 mt-3'>{getTotalCompletedChapterPerc(course)}% <span className='float-right'>{Math.min(course.completedChapter?.length,course?.courseList?.chapter?.length)}/{course?.courseList?.chapter?.length} Chapters</span></h2>
            <Progress value={getTotalCompletedChapterPerc(course)} className='h-[7px]'/>
        </div>
    </div>
    </Link>
  )
}

export default ProgressCourseItem