import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import AboutPage from './pages/aboutPage/AboutPage';
import BlogPage from './pages/blogPage/BlogPage';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
