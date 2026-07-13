
import Header from "../components/Header"
import {useState, useEffect} from "react"
import { ToastContainer, toast } from "react-toastify"


export default function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
     const fetchData = async () => {
      try {
        const response = await fetch("https://dragonball-api.com/api/characters")
  
        const data = await response.json()
  
        const characterDetails = data.items
  
        setCharacters(characterDetails)
        toast.success("Data fetched successfully!")
      } catch (err) {
        toast.error(err)
      }
     }

     fetchData()
  }, [])


    return(
        <main>
          <ToastContainer/>
          <Header/>

          <section>
            {characters.map((character, index) => (
              <div key={index}>
                 <div className="w-[3rem]">
                  <img src={character.image} alt={character.name} className="w-full object-cover" />
                 </div>

                 <h1>
                  {character.name}
                 </h1>

                 <p>
                  {character.race}
                 </p>

                 <p>
                  {character.gender}
                 </p>
              </div>
            ))}
          </section>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus, deleniti recusandae deserunt iusto harum aspernatur sit quis illo quos tempore nesciunt obcaecati rerum odio perferendis a minima labore vero!
          </p>
        </main>
    )
}