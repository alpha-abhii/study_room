import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"

const getAllCourseList = async()=>{
    const query=gql`
    query CourseLists {
        courseLists(first: 10, orderBy: createdAt_DESC) {
            author
            name
            id
            free
            description
            demoUrl
            banner {
            url
            }
            chapter {
            ... on Chapter {
                id
                name
                video {
                url
                }
            }
            }
            sourceCode
            tag
            totalChapters
            slug
        }
        }
    `

    const result = await request(MASTER_URL,query)
    return result;
}

export default{
    getAllCourseList
}