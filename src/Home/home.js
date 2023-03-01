import Footer from "../Footer/footer";
import Header from "../Header/header";
import Purchase from "../Purchase/purchase";
import Qa from "../QA/qa";
import Reviews from "../Reviews/reviews";
import TopComponent from "../TopComponent/topComponent";
import './home.css'
const Home = () =>{
    return(
        <div className="home-container">
        <Header/>
        <TopComponent/>
        <Purchase/>
        <Reviews/>
        <Qa/>
        <Footer/>
        </div>
    )
}


export default Home;