import Creemains from "./components/Creemains"
import CurrentIssue from "./components/CurrentIssue"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import NewsLetter from "./components/Newsletter"
import Subscribe from "./components/Subscribe"
import TellMore from "./components/TellMeMore"
import ThankYou from "./components/ThankYou"


function App() {
  
  return (
    <>
      <div className='w-full h-auto m-0 p-0  '>
        <Nav />
        <Hero />
        <CurrentIssue />
        <TellMore />
        <Subscribe />
        <ThankYou />
        <Creemains />
        <NewsLetter />
        <Footer />
      </div>
    </>
  )
}

export default App
