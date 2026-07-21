import Navbar from "./Navbar"
import Hero from "./Hero"
import Todaysales from "./Todaysales"
import Categories from "./Categories"
import Products from "./Products"
import OurProducts from "./OurProducts"
import Featured from "./Featured"
import Services from "./Services"
import End from "./End"
function Home(){
    return(

        <>
        
            <Navbar />
            <Hero/>
            <Todaysales/>
            <Categories/>
            <Products/>
            <OurProducts />
            <Featured />
            <Services />
            <End />
        
        
        
        </>
    )
}
export default Home;