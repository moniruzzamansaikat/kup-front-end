import React, {useState} from 'react'
import SectionCard from 'components/shared/SectionCard'
import {Image} from 'react-bootstrap'
import teacher_image from 'assets/images/teachers/teacher1.jpg'

function TeacherOfTheWeek() {
  const [teacher, setTeacher] = useState({
    name: "Khursheduzzaman Ahmed",
    image: teacher_image
  });
  
  return (
    <div className="teacher_of_the_week">
      <SectionCard title="Teacher of the week" classes="p-0">
        <Image src={teacher.image} alt={teacher.name} className="img-fluid" />
      </SectionCard>
    </div>
  )
}

export default TeacherOfTheWeek