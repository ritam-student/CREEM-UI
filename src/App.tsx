import CurrentIssue from "./components/CurrentIssue"
import Hero from "./components/Hero"
import Nav from "./components/Nav"


function App() {
  
  return (
    <>
      <div className='w-full h-auto m-0 p-0  '>
        <Nav />
        <Hero />
        <CurrentIssue />
      </div>
    </>
  )
}

export default App
