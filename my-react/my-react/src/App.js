import React from 'react';
import Copyright from './Components/Copyright';
import Home from './Components/Home';
import Industries from './Components/Industries';
import Footer from './Components/Layouts/Footer';
import Header from './Components/Layouts/Header';
import Ourblogs from './Components/OurBlogs';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Scrollbar from "./assets/css/Scrollbar.css";
import Index from "./assets/css/index.css";


function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Industries />
      <Testimonials />
      <Ourblogs />
      <Footer />
      <Copyright />
    </div>
  );
}
export default App;
