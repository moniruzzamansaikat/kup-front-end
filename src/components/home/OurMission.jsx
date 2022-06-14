import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import 'assets/scss/home/our_mission.scss'
import SectionCard from 'components/shared/SectionCard'
import { Link } from 'react-router-dom'

function OurMission() {
  const [missions] = React.useState([
    'Our vision is to be the leading provider of quality, cost-effective, and reliable IT services to the global market.',
    'Our vision is to be the leading provider of quality, cost-effective, and reliable IT services to the global market.',
    'Our vision is to be the leading provider of quality, cost-effective, and reliable IT services to the global market.',
    'Our vision is to be the leading provider of quality, cost-effective, and reliable IT services to the global market.',
  ])

  return (
    <div className="our_mission">
      <SectionCard title="Our Mision">
        <ListGroup>
          {missions.map((vision, index) => (
            <ListGroupItem className="py-2" key={index}>
              <Link to="#v">
                <i class="fa-solid fa-angles-right me-2 mt-1"></i>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </SectionCard>
    </div>
  )
}

export default OurMission
