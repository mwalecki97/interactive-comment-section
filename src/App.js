import './App.css';
import NewComment from './components/newComment'
import Comment from './components/comment'
import db from './DB';

const App = () => {

  const newComment = commentText => {
    
  
  }
  
  return(
    <div>
      <Comment avatar2={db[1].avatar} username={db[1].username} date={db[1].date} input={db[1].comment}/>
      <NewComment/>
    </div>
  )

}

export default App;
  
