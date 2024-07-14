import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router'
import EmployeeDetails from './components/EmployeeDetails'
import Header from './components/Header'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NotFoundPages from './pages/NotFoundPages'
import SearchPage from './pages/SearchPage'

const App = () => {
  return (
    <div className="app">
      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/employee/:company/:index" element={<EmployeeDetails />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </div>
  )
}

export default App