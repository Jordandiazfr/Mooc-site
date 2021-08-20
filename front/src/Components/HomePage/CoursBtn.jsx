import React from 'react'

export default function CoursBtn(props) {
    return (
        <div className="course-btn">
            <h1>Course</h1>
            <h2>{props.children}</h2>
        </div>
    )
}
