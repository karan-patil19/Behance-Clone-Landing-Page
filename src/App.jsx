import Header from './components/Header'
import BehanceList from './components/CardList'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
 
  const [selectedCategory,setSelectedCategory] = useState("Recommended");
  const [searchCategory,setSearchCategory] = useState("")
  return (
    <>
      <Header
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
        setSearchCategory={setSearchCategory}
      />

      <BehanceList 
        selectedCategory={selectedCategory}
        searchCategory={searchCategory}
      />

      <Footer></Footer>
    </>
  )
}

export default App
