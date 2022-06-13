import React from 'react'
import {Card as BSCard} from 'react-bootstrap'
import 'assets/scss/shared/section_card.scss'

function SectionCard({title, children, classes}) {
  return (
    <BSCard className="section_card">
      <BSCard.Header>
        <BSCard.Title>{title}</BSCard.Title>
      </BSCard.Header>
      <BSCard.Body className={classes}>
        {children}
      </BSCard.Body>
    </BSCard>
  )
}

export default SectionCard