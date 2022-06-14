import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import FsLightbox from 'fslightbox-react'
import 'assets/scss/pages/gallery_page.scss'
import img1 from 'assets/images/img_gallery/1.jpg'
import img2 from 'assets/images/img_gallery/2.jpg'
import img3 from 'assets/images/img_gallery/3.jpg'
import img4 from 'assets/images/img_gallery/4.jpg'
import img5 from 'assets/images/img_gallery/5.jpg'
import img6 from 'assets/images/img_gallery/6.jpg'
import img7 from 'assets/images/img_gallery/7.jpg'
import img8 from 'assets/images/img_gallery/8.jpg'
import img9 from 'assets/images/img_gallery/9.jpg'
import img10 from 'assets/images/img_gallery/10.jpg'
import img11 from 'assets/images/img_gallery/11.jpg'
import img12 from 'assets/images/img_gallery/12.jpg'
import img13 from 'assets/images/img_gallery/13.jpg'
import img14 from 'assets/images/img_gallery/14.jpg'
import img15 from 'assets/images/img_gallery/15.jpg'
import img16 from 'assets/images/img_gallery/16.jpg'
import img17 from 'assets/images/img_gallery/17.jpg'
import img18 from 'assets/images/img_gallery/18.jpg'
import img19 from 'assets/images/img_gallery/19.jpg'
import img20 from 'assets/images/img_gallery/20.jpg'
import img21 from 'assets/images/img_gallery/21.jpg'
import img22 from 'assets/images/img_gallery/22.jpg'
import img23 from 'assets/images/img_gallery/23.jpg'
import img24 from 'assets/images/img_gallery/24.jpg'

function ImageGalleryPage() {
  const [images, setImages] = useState([
    img1,
    img2,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
  ])

  return (
    <Container className="gallery_page">
      <p className="page_title">Image Gallery</p>
      <Row>
        {images.map((image) => (
          <Col lg={3} md={4} sm={6} className="mb-4" key={image}>
            <div className="img_box">
              <Image src={image} lazy="true" />
            </div>
          </Col>
        ))}
      </Row>
      <FsLightbox
        sources={[
          'https://i.imgur.com/fsyrScY.jpg',
          'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        ]}
      />
    </Container>
  )
}

export default ImageGalleryPage
