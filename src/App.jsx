import Navbar from "./components/Navbar"
import ExplorePage from "./components/ExplorePage"
import ImagePage from "./components/ImagePage"
import AddImagePage from "./components/AddImagePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ExplorePage />}/>
        <Route path="/add-image" element={<AddImagePage />} />
        <Route path="/image/:imageId" element={<ImagePage />} />
      </Routes>
    </BrowserRouter>
  )
}
