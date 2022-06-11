import React from 'react'
import { Row, Col, Image, Card } from 'react-bootstrap'
import 'assets/scss/top_banner.scss'

import school_logo from 'assets/images/school_logo.png'
import mujib_100_logo from 'assets/images/mujib_100_logo.jpg'

function TopBanner() {
  return (
    <div className="top_banner">
      <Card>
        <Card.Body>
          <Image src={school_logo} className="img-fluid" />
        </Card.Body>
      </Card>
      <Card className="h-100">
        <Card.Body className="text-center d-flex align-items-center justify-content-center">
          <div>
            <h1>Kaliganj Karim Uddin Pilot High School</h1>
            <h4>Kaliganj, Lalmonirhat</h4>
            <h2>EST: 2020 , EIIN: 123456 </h2>
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Image src={mujib_100_logo} className="img-fluid" />
        </Card.Body>
      </Card>
    </div>
  )
}

export default TopBanner
