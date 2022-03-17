import './comment.css';
import Likecount from './UI/likecount';
import Avatar2 from './UI/Avatar2';
import Header from './UI/header';
import Text from './UI/commentText';


const Comment = props => {

    return(
        <div>
           <div className="comment">
                <div className="rest">
                    <Likecount/>
                    <Avatar2 avatar2={props.avatar2}/>
                    <Header username={props.username} date={props.date}/>     
                </div>
                <div className="content">
                    <Text class="commentText" commentText={props.input}/>
                </div>
            </div>
        </div>
    )
}

export default Comment;