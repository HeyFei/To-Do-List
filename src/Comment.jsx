import UserInfo from "./component/UserInfo";

const Comment = (props) => {

    function formatDate(date) {
        return date.toLocaleDateString()
    }

    return (
        <div className="Comment">
            <UserInfo author={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment
