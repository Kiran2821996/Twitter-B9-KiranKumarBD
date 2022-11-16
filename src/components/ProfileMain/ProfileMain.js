import "./ProfileMain.css";
import AddTweets from "../Feed/AddTweets/AddTweets";
import {fecthedData} from "../NewTweet/NewTweet";
import { useContext } from "react";

function ProfileMain() {
  const {newTweet} = useContext(fecthedData);
  return (
    <div>
      <div className="profile-main">
      <div className="cover">
        <a href="#">
          <img
            className="profile-img"
            src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"></img>
        </a>
      </div>
      <div className="follow-btn-container fw-bold float-end">
        <button className="follow-btn">Follow</button>
      </div>
    </div>
    
    {newTweet.map((newData)=>(
  <div>
  <AddTweets data={newData} />
  <hr />
</div>
))}
    </div>
    


  );
}

export default ProfileMain;
