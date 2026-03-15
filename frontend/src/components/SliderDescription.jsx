
import { Link, useNavigate } from 'react-router-dom';
import styles from './SliderDescription.module.css'

const Description = (props) =>{

  const navigate = useNavigate();
  const handleProductGone = () => {
    if (props.heading == "JACKETS &COATS" || props.heading == "NEW ARRIVALS") {
      navigate("/shop?category=men");
    }
    if (props.heading == "NEW SEASON") {
      navigate("/shop?category=women");
    }
  };

  return(
    <>

        <div className={styles.description}>

          <div className={styles.title} > <span>{props.title}</span>  </div>

          <div className={styles.heading} > <h2>{props.heading}</h2> </div>
          
          <div className={styles.shopButton} > 
            <Link to={`/shop?category=men`} className={styles.a} onClick={handleProductGone}> {props.button} </Link>
           
            </div>
          
          </div>

    
    </>
  )
}

export default Description;