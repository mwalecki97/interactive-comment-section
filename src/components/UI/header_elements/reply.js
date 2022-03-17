import './reply.css'
import reply from './icon-reply.svg'


const Reply = props => {
    return (
        <a href={props.link} className='reply'><img src={ reply } className='icon-reply'/>Reply</a>
    )
}

export default Reply;