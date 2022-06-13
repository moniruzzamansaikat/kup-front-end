import React, {useState} from 'react'
import SectionCard from 'components/shared/SectionCard'
import {Link} from 'react-router-dom';
import 'assets/scss/notices.scss'

const formattedDate = (date) => {
  const data = {}
  data.day = date.getDate();
  const dateStr = date.toDateString();
  data.month_year = dateStr.split(' ')[1] + ' ' + dateStr.split(' ')[3]
  return data;
}

function Notices() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      date: new Date('10/4/2021'),
      text: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      id: 2,
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      id: 3,
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
      id: 4,
      date: new Date(),
      text: 'Lorem ipsum dolor sit amet consectetur.'
    },
  ]);

  return (
    <div className="notices">
      <SectionCard title="Recent Notices">
        {notices.map(notice => (
          <div className="notice_item" key={notice.id}>
            <div className="notice">
              <div className="date pt-2">
                <span className="day">{formattedDate(notice.date).day}</span>
                <span className="month_year">{formattedDate(notice.date).month_year}</span>
              </div>
              <Link to={`/notices/${notice.id}`} className="title mb-2">{notice.text}</Link>
            </div>
            <Link to={`/notices/${notice.id}`} className="btn btn-secondary bnt-sm">Read More</Link>
          </div>
        ))}
      </SectionCard>
    </div>
  )
}

export default Notices
