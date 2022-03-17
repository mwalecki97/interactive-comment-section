import './header.css'
import Username from './header_elements/username'
import Date from './header_elements/date'
import Reply from './header_elements/reply'

const Header = props => {
    return (
        <div className = 'header'>
        <Username username={props.username} className = 'username'/>
        <Date date={props.date}/>
        <Reply/>
        </div>
    )
}

export default Header;