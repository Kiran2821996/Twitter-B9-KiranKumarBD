
import './Profile.css';
import HomeOption from '../../components/HomeOption/HomeOption';
import LoginOption from '../../components/LoginOption/LoginOption';
import ProfileMain from '../../components/ProfileMain/ProfileMain';

function Profile(){
    return (
        <div className="homeContainer">
            <div className="leftContainer">
                <HomeOption />
            </div>
            <div className="centerContainer">
                <ProfileMain />
            </div>
            <div className="rightContainer">
                <LoginOption />
            </div>
        </div>
    )
}

export default Profile;