import React from "react";
import "./App.css";
import { Route,Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import BlogArticlePage from "./pages/BlogArticlePage";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='contact' element={<ContactPage />}/>
        <Route path='/blog' element={<BlogPage />}/>
        <Route path='blog/:postId' element={<BlogArticlePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
