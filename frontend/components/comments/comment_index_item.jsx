import React from 'react';
import { Link } from 'react-router-dom';
// import { diffDate } from '../../util/general_util'; // need to write this 

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.renderDelete = this.renderDelete.bind(this);
    }

    componentDidMount() {
        let { comment } = this.props;
        if (this.props.user === undefined) {
            this.props.fetchUser(comment.user_id);
        }
    }

    handleDelete() {
        this.props.removeComment(this.props.comment);
    }

    renderDelete() {
        let { currentUserId, user } = this.props;

        return currentUserId === user.id ? (
            <strong onClick={() => this.handleDelete()}>
                Delete
            </strong>
        ) : (
                null
            );
    }

    render() {
        console.log(this.props)
        if (this.props.user === undefined) {
            return null;
        } else {

            if (this.props.location === '/home') {
                return (
                    <p>
                        <strong id='show-username'>
                            {this.props.user.username}
                        </strong>  {this.props.comment.body}
                    </p>
                );
            } else {
                return (
                    <div className="show-caption">
                        <Link to={`/profile/${this.props.user.id}`}>
                            <img src={this.props.user.profilePhoto} />
                        </Link>
                        <div>
                            <div>
                                <strong id='show-username'>
                                    {this.props.user.username}
                                </strong>
                                {this.props.comment.body}
                            </div>
                            <div className='ribbon'>
                                <p id='dates'>
                                    dates {/* {diffDate(this.props.comment.created_at)} */}
                                </p>
                                {this.renderDelete()}
                            </div>
                        </div>
                    </div>
                );
            }

        }
    }
}


export default CommentIndexItem;