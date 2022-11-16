
import './Trending.css'

// props is an object which contains all attributes passed to the component.

function Trending(props){
    const data =props.data;
    return(
        <div className="trendingMain">
            <p className="header_small">{data.header}</p>
            <p className="text">{data.text}</p>
            <p className="header_small">{data.tweetCount}</p>
        </div>
    )
}

export default Trending;
