import Meta from 'components/shared/Meta'
import React from 'react'
import { Container, Image } from 'react-bootstrap'
import about_image from 'assets/images/img_gallery/1.jpg'

function AboutPage() {
  return (
    <div className="about_us_page">
      <Meta title="About us" />

      <Container>
        <p className="page_title my-3">About Us</p>

        <main>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, dolorum?</h2>
          <Image src={about_image} alt="KUP School" className="img-fluid my-3" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero aliquam quia iste natus
            ut reprehenderit facilis sed deleniti, architecto minus delectus facere quo quidem velit
            accusamus totam amet numquam! Quis, ducimus minus excepturi illo voluptatem quam. Vel,
            iusto at, laborum nihil autem quia illum debitis ea voluptas, delectus odio tenetur
            repellendus porro aut! Atque dolorem reiciendis, itaque repudiandae saepe fugiat.
            Quibusdam veniam cumque repudiandae eum corrupti. Distinctio itaque dolore, sit deserunt
            mollitia illo voluptatum inventore tempore reiciendis animi ducimus hic beatae quos!
            Alias, nemo. Eligendi vero officia, quaerat voluptatem ab debitis voluptatum nostrum,
            eveniet praesentium vel quisquam veniam exercitationem natus?
          </p>

          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat culpa libero ad
            sequi tempore rem tempora voluptate nemo? Nulla.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim cupiditate eveniet
            laborum eos quisquam doloremque quasi commodi dolores, provident ab deserunt officia
            voluptas, libero natus repudiandae facilis minima possimus adipisci inventore. Aliquid
            nostrum aperiam numquam ipsam nulla enim sapiente atque placeat dolor vero, cum beatae
            voluptatem quasi laboriosam saepe accusamus dicta debitis, obcaecati a quas! Architecto,
            illum impedit! Consequatur reprehenderit error adipisci dolore nulla ex illum illo.
            Accusantium, officiis itaque! Nihil, natus numquam consequatur error reprehenderit
            quaerat molestiae tempore itaque, non repellendus impedit magnam deleniti rerum
            accusamus blanditiis. Eligendi quae architecto dolore repudiandae culpa saepe vel
            corporis libero voluptas consectetur.
          </p>
        </main>
      </Container>
    </div>
  )
}

export default AboutPage
