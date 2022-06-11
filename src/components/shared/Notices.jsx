import React from 'react'
import SectionCard from 'components/shared/SectionCard'
import 'assets/scss/notices.scss'

// list of 5 notices
function Notices() {
  return (
    <div className="notices">
      <SectionCard title="Recent Notices">
        <div className="notice_item">
          <div className="notice">
            <div className="date">
              <span className="day">10</span>
              <span>Jan 2022</span>
            </div>
            <a href="#" className="title">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <a href="#" className="btn btn-secondary bnt-sm">
            Read More
          </a>
        </div>
          <div className="notice_item">
          <div className="notice">
            <div className="date">
              <span className="day">10</span>
              <span>Jan 2022</span>
            </div>
            <a href="#" className="title">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <a href="#" className="btn btn-secondary bnt-sm">
            Read More
          </a>
        </div>
          <div className="notice_item">
          <div className="notice">
            <div className="date">
              <span className="day">10</span>
              <span>Jan 2022</span>
            </div>
            <a href="#" className="title">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <a href="#" className="btn btn-secondary bnt-sm">
            Read More
          </a>
        </div>
          <div className="notice_item">
          <div className="notice">
            <div className="date">
              <span className="day">10</span>
              <span>Jan 2022</span>
            </div>
            <a href="#" className="title">
              Lorem ipsum dolor sit amet consectetur.
            </a>
          </div>
          <a href="#" className="btn btn-secondary bnt-sm">
            Read More
          </a>
        </div>
      </SectionCard>
    </div>
  )
}

export default Notices
