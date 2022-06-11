import React, {useState} from 'react'
import SectionCard from 'components/shared/SectionCard'
import {Row, Col} from 'react-bootstrap';
import 'assets/scss/home/todays_birthday.scss';
import img1 from 'assets/images/students/img1.jpg'
import img2 from 'assets/images/students/img2.jpg'
import img3 from 'assets/images/students/img3.jpg'
import img4 from 'assets/images/students/img4.jpg'
import img5 from 'assets/images/students/img5.jpg'


function TodaysBirthday() {
  const [birthdays, setBirthdays] = useState([
    {
      name: "Moniruzzaman Saikat",
      url: img1,
      role: 'Student'
    },
    {
      name: "Mark Zuckerburg",
      url: img2,
      role: 'Student'
    },
    {
      name: "Farhana Akhi",
      url: img3,
      role: 'Student'
    },
    {
      name: "Moniruzzaman Saikat",
      url: img4,
      role: 'Student'
    },
    {
      name: "Milon Roy",
      url: img5,
      role: 'Student'
    },

  ]);
  
  return (
    <div className="todays_birthday">
      <SectionCard title="Todays Birthday">
        <Row>
          {birthdays.map((birthday, index) => 
            <Col md={3} key={index}>
              <img src={birthday.url} />
            </Col>
          )}
        </Row>
      </SectionCard>
    </div>
  )
}

export default TodaysBirthday