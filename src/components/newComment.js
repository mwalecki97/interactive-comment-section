import './newComment.css'
import Avatar1 from './UI/Avatar1'
import { useState } from 'react'
import db from '../DB'


const NewComment = () => {
    
    const [enteredInput, setEnteredInput] = useState('');
   
    const enteredInputHandler = event => {
        console.log(event.target.value)
    };

    return(
        <div className="commentInput">
            <Avatar1 avatar1={db[0].avatar}/>
            <textarea name="comment"
                placeholder="Add a comment..." 
                cols="43" rows="4" 
                onChange={enteredInputHandler}/>
            <button className="button" 
            
            >SEND</button>
        </div>
    )
}

export default NewComment;