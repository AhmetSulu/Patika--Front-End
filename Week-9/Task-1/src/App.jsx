import './App.css'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Stats from "./components/Stats/Stats"
import Classes from "./components/Classes/Classes"
import BmiCalculator from "./components/BmiCalculator/BmiCalculator"
import Trainers from "./components/Trainers/Trainers"
import Products from "./components/Products/Products"
import Reviews from "./components/Reviews/Reviews"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Classes />
      <BmiCalculator />
      <Trainers />
      <Products />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App