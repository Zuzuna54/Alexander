
import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';

class CommentIndex extends React.Component {

    constructor(props) {
        super(props);
        this.renderViewAllComments = this.renderViewAllComments.bind(this);
   
    }

    renderViewAllComments() {
        if (this.props.match.path === "/home" && this.props.comments.length > 2) {
            return (
                <p className="view-all-comments" onClick={() =>
                    this.props.history.push(`/post/${this.props.post.id}`)}>
                    View all {this.props.comments.length} comments
                </p>
            );
        }
    }

  

    render() {
        let { comments, removeComment, match } = this.props;
        if (match.path === "/home" && comments.length > 2) {
            comments = comments.slice(comments.length - 2);
        }

        return (
            <>
                {this.renderViewAllComments()}
                <ul>
                    {
                        comments.map((comment, idx) =>
                            <CommentIndexItemContainer
                                location={match.path}
                                key={idx}
                                comment={comment}
                                removeComment={removeComment} />)
                    }
                </ul>
                render last elemet date 
            </>
        );

    }
}

export default CommentIndex;