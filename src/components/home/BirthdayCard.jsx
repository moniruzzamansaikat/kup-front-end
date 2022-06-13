import React from 'react'
import Image from 'react-bootstrap/Image'
import 'assets/scss/home/birthday_card.scss';
import bdbgImage from 'assets/images/bdbg.jpg'

function BirthdayCard({birthday}) {
  return (
    <div className="birthday_card mb-3" style={{backgroundImage: `url(${bdbgImage})`}}>
      <Image src={birthday.url} alt={birthday.name} />
      <div>
        <p className="py-2">
          <span>{birthday.name}</span>
          <br />
          <small>{birthday.role}</small>
        </p>
      </div>
    </div>
  )
}

export default BirthdayCard