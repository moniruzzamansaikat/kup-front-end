import React, {useState} from 'react'
import SectionCard from 'components/shared/SectionCard'
import {Image} from 'react-bootstrap'
import student_image from 'assets/images/students/img1.jpg'

function StudentOfTheWeek() {
  const [student, setStudent] = useState({
    name: "Marjana Shaddika Mim",
    image: student_image
  });
  
  return (
    <div className="student_of_the_week">
      <SectionCard title="Student of the week" classes="p-0">
        <Image src={student.image} alt={student.name} className="img-fluid" />
      </SectionCard>
    </div>
  )
}

export default StudentOfTheWeek