import React from 'react'
import {Card as BSCard} from 'react-bootstrap'
import 'assets/scss/shared/section_card.scss'

function SectionCard({title, children}) {
  return (
    <BSCard className="section_card">
      <BSCard.Header>
        <BSCard.Title>{title}</BSCard.Title>
      </BSCard.Header>
      <BSCard.Body>
        {children}
      </BSCard.Body>
    </BSCard>
  )
}

export default SectionCard