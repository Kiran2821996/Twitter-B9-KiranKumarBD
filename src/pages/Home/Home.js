
import './Home.css';
import HomeOption from '../../components/HomeOption/HomeOption';
import LoginOption from '../../components/LoginOption/LoginOption';
import Feed from '../../components/Feed/Feed/Feed';

function Home(){
    return (
        <div className="homeContainer">
            <div className="leftContainer">
                <HomeOption />
            </div>
            <div className="centerContainer">
                <Feed />
            </div>
            <div className="rightContainer">
                <LoginOption />
            </div>
        </div>
    )
}

export default Home;