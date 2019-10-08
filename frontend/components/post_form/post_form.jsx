import React from "react";


class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.post
        this.closeModal = this.closeModal.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.handlefile = this.handlefile.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    closeModal() {
    this.setState({
        location: '',
        caption: '',
        photo: null 
    })
    
    document.getElementById("post-form").className = "hidden"
    }

    handlefile(e) {
        const file = e.target.files[0];
        const fileType = new FileReader();
        fileType.onloadend = () => {
            this.setState({ photo: file, preview: fileType.result });
        };
        if (file) {
            fileType.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        formData.append('post[location]', this.state.location);
        formData.append('post[photo]', this.state.photo);
        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }
    
    renderSumbit() {
        if (this.state.caption === '') {
            return (
                <div>
                    <p className="fake-submit-button">
                        Post
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <p onClick={this.handleSubmit}
                        className="submit-button">
                        Post
                    </p>
                </div>
            );
        }
    }

    handleUpdate(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            });
        };
    }

    renderForm() {
        console.log(this.state)
        if (this.state.photo === null) {
            return (
            <div className="upload-form">
            <img src={window.camera} />
            <h1>Upload a Photo</h1>
            <div className="upload-text">
                <p>Share photos that you'd like your friends and family to see</p>
            </div>
            <label>
                <p>Upload</p>
                <input type="file" accept="image/*" onChange={this.handlefile} />
            </label>
            </div> 
            )
        } else {  
            return (
                <div className="upload-window">
                <div className="upload-form">
                    <div className="user-inputs">
                        <p className="title">New post</p>
                        <p className="subtitle">Details</p>
                    <textarea
                        value={this.state.caption}
                        placeholder="What's on your mind ..."
                        onChange={this.handleUpdate('caption')} />
                    <input type="text"
                        value={this.state.location}
                        placeholder="Location"
                        onChange={this.handleUpdate('location')} />
                    {this.renderSumbit()}
                    
                    </div>
                </div>
                </div>
            );
        }
    }

    render()  {
        return (
            <div id="post-form" className="hidden">
                {this.renderForm()}
                <div className="modal-background" onClick={this.closeModal}>
                </div>
            </div>
        )
    } 
}

export default PostForm;