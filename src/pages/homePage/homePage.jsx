import SearchBar from "../../components/searchBar/searchBar"
import "./homePage.scss"

function HomePage() {

    
    return(
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                    Find Real Estate & Get Your Dream Place
                </h1>
                <p>
                 LREG is poised to revolutionize the rental home industry with 
                 our commitment to excellence, innovative approach, and unwavering 
                 dedication to customer satisfaction. We look forward to building 
                 lasting relationships with property owners and renters, and to making 
                 the rental experience as smooth and rewarding as possible!
                </p>
                 <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>Years of Experiance</h2>
                    </div>
               
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>

                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage