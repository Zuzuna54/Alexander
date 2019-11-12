import React from "react";

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post_id: this.props.postId,
            body: ""
        }
        this.props = props;
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.createComment(this.state)
        this.setState({
            body: ""
        })
    }

    renderButton() {
        
        return this.state.body === '' ? (
            <p className="fake-comment-button">
                Post
            </p>
        ) : (
                <p onClick={this.handleSubmit}
                    className="real-comment-button">
                    Post
            </p>
            );
      
    }

    handleUpdate(e) {
        this.setState( { body: e.target.value })
    } 

    render() {

        return (
            <div className="comment-box-create">
                <textarea
                placeholder="Add a comment..."
                onChange={this.handleUpdate}
                value={this.state.content}
                />
                {this.renderButton()}
            </div>
        )
    }
}

export default CreateCommentForm;



