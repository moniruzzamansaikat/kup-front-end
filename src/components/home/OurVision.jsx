import React from 'react'
import SectionCard from 'components/shared/SectionCard'
import 'assets/scss/home/our_vision.scss'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

function OurVision() {
  const [visions] = React.useState([
    'Our vision is to be the leading provider of quality, cost-effective, and reliable IT services to the global market.',
    'Our vision is to be the leading provider of quality, cost-effective, and reliable IT services to the global market.',
    'Our vision is to be the leading provider of quality, cost-effective, and reliable IT services to the global market.',
    'Our vision is to be the leading provider of quality, cost-effective, and reliable IT services to the global market.',
  ])

  return (
    <div className="our_vision">
      <SectionCard title="Our Vision">
        <ListGroup>
          {visions.map((vision, index) => (
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

export default OurVision
