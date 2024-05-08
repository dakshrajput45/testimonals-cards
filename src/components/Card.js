
    
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

function Card({review}) {
    console.log(review.name);
    return (
        <div className="card">
            <div className="img-container">
                <img className="img" src={review.image} alt="daksh"/>
                <div className="img-back"></div>
            </div>
            <div className="name">
                <p className="para-name">{review.name}</p>
            </div>
            <div className="name">
                <p className="para-job">{review.job}</p>
            </div>
            <div className="icon">
                <FaQuoteLeft/>
            </div>
            <div className="para-desc">
                <p>{review.description}</p>
            </div>
            <div className="icon">
                <FaQuoteRight/>
            </div>
            
        </div>
    );
}

export default Card;