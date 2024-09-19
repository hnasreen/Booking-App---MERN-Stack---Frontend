import './App.css'
import {Route, Routes} from "react-router-dom";
import IndexPage from "../src/Pages/IndexPage.jsx";
import LoginPage from "../src/Pages/LoginPage.jsx";
import Layout from "../src/Components/Layout.jsx";
import RegisterPage from "../src/Pages/RegisterPage.jsx";
import axios from "axios";
import {UserContextProvider} from '../src/Context/UserContext.jsx';
import ProfilePage from "../src/Pages/ProfilePage.jsx";
import PlacesPage from "../src/Pages/PlacesPage.jsx";
import PlacesFormPage from "../src/Pages/PlacesFormPage.jsx";
import PlacePage from "../src/Pages/PlacePage.jsx";
import BookingsPage from "../src/Pages/BookingsPage.jsx";
import BookingPage from "../src/Pages/BookingPage.jsx";
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://booking-mern-stack-app-backend.onrender.com/api';
axios.defaults.withCredentials = true;

const App = () => {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
