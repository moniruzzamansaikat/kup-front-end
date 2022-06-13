import AboutPage from 'pages/AboutPage'
import HomePage from 'pages/HomePage'
import ImageGalleryPage from 'pages/Gallery/ImageGalleryPage'
import VideoGalleryPage from 'pages/Gallery/VideoGalleryPage'
import NoticePage from 'pages/NoticePage'
import MujibCornerPage from 'pages/MujibCornerPage'
import LoginPage from 'pages/LoginPage'
import Navmenu from 'components/shared/Navmenu'
import TopBanner from 'components/shared/TopBanner'
import NewsTicker from 'components/shared/NewsTicker'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/scss/app.scss'

function App() {
  return (
    <>
      <Router>
        <TopBanner />
        <NewsTicker />
        <Navmenu />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/image_gallery" element={<ImageGalleryPage />} />
          <Route path="/video_gallery" element={<VideoGalleryPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/mujib_corner" element={<MujibCornerPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
