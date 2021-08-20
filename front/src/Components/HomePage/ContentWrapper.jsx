import React from 'react'
import CoursBtn from './CoursBtn'
import AddCourse from './AddCourse'
export default function ContentWrapper() {
    return (
        <div className="container">
            <h1>This is the content ContentWrapper </h1>
            <div className="wrapper-main"> 
            <CoursBtn>How to eat a Banana</CoursBtn> 
            <CoursBtn>How to make Wine</CoursBtn> 
            <CoursBtn>Change your habits</CoursBtn> 
            <CoursBtn>Leadership 101</CoursBtn> 
            <CoursBtn>React + Typescript</CoursBtn> 
            <AddCourse>Course</AddCourse> 
            </div>
        </div>
    )
}
