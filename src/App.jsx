import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Aboutme from "./components/Aboutme"
import Experience from "./components/Experience"
import Testimonal from "./components/Testimonal"
import Contacts from "./components/Contacts"


function App() {
 

  return (
 <>
 <BlurBackground />
 <Navbar />
 <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
  <Navbar/>
<Hero />
<Projects/>
<Aboutme/>
<Experience/>
<Testimonal/>
<Contacts/>
 </main>
 
 </>
  )
}

export default App
