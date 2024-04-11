import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurTeachers = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
            <Link href="#" className="block">
                {/* <img
                    alt=""
                    src="https://unsplash.com/photos/smiling-woman-standing-while-holding-orange-folder-FcLyt7lW5wg"
                    className="h-64 w-full object-cover sm:h-80 lg:h-96"
                /> */}
                <Image src="/carolina.jpg" className='h-64 w-full object-cover sm:h-80 lg:h-96 rounded-md' width={150} height={150}/>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Caroline</h3>

                <p className="mt-2 max-w-sm text-gray-700">
                    <strong>Expertise::</strong> DataScience, Machine Learning
                </p>
            </Link>
        </div>
    )
}

export default OurTeachers