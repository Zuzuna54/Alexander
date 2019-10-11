import React from "react";

class CreateCommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post_id: this.props.post.id,
            body: ""
        }
        this.props = props;
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        // console.log(this.props)
        this.props.createComment(this.state)
        this.setState({
            body: ""
        })
    }

    renderButton() {
        
        return this.state.body === "" ? (
            <div className="fake-button">
                Post
            </div>
        ) : (
            <div className="real-button" onClick={this.handleSubmit}>
                Post
            </div>
        )
      
    }

    handleUpdate(e) {
        this.setState( { body: e.target.value })
    } 

    render() {
        // console.log(this.props)
        return (
            <div className="create-comment">
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



