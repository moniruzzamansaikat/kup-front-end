import Slider from 'components/home/Slider'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import headTeacher from 'assets/images/teachers/teacher1.jpg'
import president from 'assets/images/teachers/teacher27.jpg'
import Notices from 'components/shared/Notices'
import DailyWisdomWords from 'components/home/DailyWisdomWords'
import TodaysBirthday from 'components/home/TodaysBirthday'
import OurMission from 'components/home/OurMission'

function HomePage() {
  return (
    <div className="home_page">
      <Slider />

      <Row className="my-4">
        <Col md={3}>
          <Card>
            <Card.Header>
              <Card.Title>Head Teacher</Card.Title>
            </Card.Header>
            <Card.Img src={headTeacher} className="img-fluid teacher" />
            <Card.Footer>
              <Card.Text>Khursheduzzaman Ahmed </Card.Text>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={6}>
          <h2>Welcome to KUP School </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, et quaerat. Nisi
            voluptates eius ipsam velit neque quos eum officia ducimus, dignissimos corrupti
            possimus magni blanditiis quasi! Ad, iste voluptatibus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique fugiat officia,
            dignissimos alias omnis ducimus at esse temporibus vel suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequuntur numquam
            veritatis architecto, error aliquid repellat cupiditate dolores sunt quod ad eum tempore
            deleniti, a quaerat ipsa ratione labore. Laboriosam voluptates libero blanditiis
            temporibus eaque ipsam dicta, rerum reprehenderit animi? Voluptatum ad cupiditate at nam
            repellendus, unde magni eos nemo.
          </p>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Header>
              <Card.Title>President</Card.Title>
            </Card.Header>
            <Card.Img src={president} className="img-fluid teacher" />
            <Card.Footer>
              <Card.Text>John Doe </Card.Text>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={3} className="mt-5">
          <Notices />
        </Col>
        <Col md={6} className="mt-5">
          <DailyWisdomWords />
        </Col>
        <Col md={3} className="mt-5">
          <OurMission />
        </Col>
        <Col md={3} className="mt-5">
          <OurMission />
        </Col>
        <Col md={6} className="mt-5">
          <TodaysBirthday />
        </Col>
      </Row>
    </div>
  )
}

export default HomePage
