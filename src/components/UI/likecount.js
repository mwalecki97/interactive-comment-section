import './likecount.css'
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';
import { useState } from 'react'

const Likecount = props => {
    const [count, setCount] = useState(0);
    return(
        <div className="main">
            <div className="plus" onClick={() => {
                setCount(count++);
            }}>
                <img src= { plus } />
            </div>

            <div className="counter">
                <p>{ count }</p>
            </div>

            <div className="minus" onClick={() => {
                setCount(count--)
            }}>
                <img src= { minus } />
            </div>
        </div>
    ) 
}
export default Likecount;