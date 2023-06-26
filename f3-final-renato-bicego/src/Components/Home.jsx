import { useContext } from "react"
import { ContextGlobal } from "./utils/global.context"


const Home = () => {
    const {dentists} = useContext(ContextGlobal)
    console.log(dentists)
    return (
        <main>
            
        </main>
    )
}

export default Home