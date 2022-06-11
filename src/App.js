import AboutPage from 'pages/AboutPage'
import HomePage from 'pages/HomePage'
import Navmenu from 'components/shared/Navmenu'
import TopBanner from 'components/shared/TopBanner'
import NewsTicker from 'components/shared/NewsTicker'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import 'assets/scss/app.scss'

function App() {
  return (
    <Container fluid>
      <Router>
        <TopBanner />
        <NewsTicker />
        <Navmenu />

        <div style={{background: '#fff',padding: '1rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginBottom: '2rem'}}>
          <Routes>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </Container>
  )
}

export default App
