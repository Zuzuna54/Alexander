import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            caption: '',
            photo: null 
        }
        
        this.closeModal = this.closeModal.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderSubmitForm = this.renderSubmitForm.bind(this);
        this.handlefile = this.handlefile.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderSubmitButton = this.renderSubmitButton.bind(this)
    }

    closeModal() {
        this.setState({
            location: '',
            caption: '',
            photo: null 
        })
            $('#modal-close').click(function () {
            $('#modal-container').addClass('out');
            $('body').removeClass('modal-active');
            $('body').removeClass('modal-active');
        })
        
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
        this.closeModal();
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[caption]', this.state.caption);
        formData.append('post[location]', this.state.location);
        formData.append('post[photo]', this.state.photo);
        this.props.action(formData);
    }
    
    renderSubmitButton() {
        if (this.state.caption === '') {
            return (
                <div>
                    <p className="disabled-submit-button">
                        Post
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <button id="modal-close" onClick={this.handleSubmit} 
                        className="submit-button">
                        Post
                    </button>
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

    renderSubmitForm() {
        if (this.state.photo !== null) {
        return (
            <div className="modal upload">

                <div className="submit-form">
                    <div className="preview">
                        <img src={this.state.preview} />
                    </div>
                    <div className="user-inputs">
                        
                        <div className="title">
                            <div> New post </div>
                            <div className="close"><button id="modal-close" onClick={this.closeModal} >Back</button></div>
                        </div>
                        <p className="subtitle">Details</p>
                        <input type="text"
                            value={this.state.location}
                            placeholder="Location"
                            onChange={this.handleUpdate('location')} />
                        <textarea
                            value={this.state.caption}
                            placeholder="What's on your mind ..."
                            onChange={this.handleUpdate('caption')} />
                        {this.renderSubmitButton()}

                    </div>
                </div>
            </div>
        )
        }
    }

    renderForm() {   
        if (this.state.photo === null) {
            return (
            <div className="modal upload"> 
                <div className="close"><button id="modal-close" onClick={this.closeModal} >X</button></div>
                <img src={window.camera} />
                <div className="modal-header">
                    <h4 className="modal-title">Upload a Photo</h4>
                </div>
                <div className="upload-text">
                    <p>Share photos that you'd like your friends and family to see</p>
                </div>
                <label>
                    <div><p>Upload</p></div>
                    <input  type="file" accept="image/*" onChange={this.handlefile} onClick={this.renderSumbit} />
                </label>
            </div>   
            )
        } 
    }

    render()  {
        return (
            <div id="modal-container" >
                <div className="modal-background">
                    {this.renderForm()}
                    {this.renderSubmitForm()}
                </div>
            </div>

        )
    } 
}

export default PostForm;