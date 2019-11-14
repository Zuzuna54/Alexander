import React from 'react'; 
import { Link } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/post_form_container';
import { diffDate, reformatDate } from '../../util/general_util';
import DropDown from '../drop_down/drop_down_container';
import EditPostForm from '../post_form/edit_post_form';
import CommentIndexContainer from '../comments/comment_index_container';
import CreateCommentFormContainer 
    from '../comments/create_comment_form_container';
import LikeBarContainer from '../likes/like_bar_container';
import Footer from '../footer/footer';

class PostShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            edit: null,
            loading: true
        };

        this.renderPopUp = this.renderPopUp.bind(this);
        this.changeSelected = this.changeSelected.bind(this);
        this.renderEditButton = this.renderEditButton.bind(this);
        this.changeEdit = this.changeEdit.bind(this);
        this.renderEditForm = this.renderEditForm.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
    }

    changeSelected(id) {
        this.setState({
            selected: id
        });
    }

    changeEdit(id) {
        this.setState({
            edit: id
        });
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id)
            .then( () => this.setState({loading: false}));
    }

    renderEditForm() {
        return this.state.edit === null ? (
            <></>
        ) : (
            <EditPostForm
                post={this.props.post}
                history={this.props.history}
                updatePost={this.props.updatePost}
                closeModal={this.changeEdit} />
        );
    }

    renderPopUp() {
        return this.state.selected === null ? (
            <></>
        ) : (
            <DropDown
                postId={this.props.post.id}
                closeModal={this.changeSelected} />
        );
    }

    renderEditButton() {
        return this.props.user.id === this.props.currentUserId ? (
            <strong
                onClick={() => this.changeEdit(this.props.post.id)}>
                Edit Post
            </strong>
        ) : (
            null
        );
    }

    render404() {
        return(
            <div className="not-found">
                <h2>
                    Sorry, this page isn't available.
                </h2>
                <p>
                    The page is removed. <Link to="/home"> Go back to Fiestagram.</Link> 
                </p>
            </div>
        );
    }

    handleDropDown() {
        $(`.dropdown`).click(function () {
            $('#dropdown-container').removeAttr('class').addClass("five");
            $('body').addClass('dropdown-active');
        })
    }

    render() {
        if ( this.state.loading === true) {
            return (
                <div className="loading">
                    <i className="fab fa-instagram" />
                </div>
            );
        } else {
            if (this.props.post === undefined ) {
                return (
                    <>
                        <NavBarContainer/>
                        {this.render404()}
                        <div className="footer">
                            <Footer />
                        </div>
                        <CreatePostFormContainer />
                    </>
                ); 
            } else {
                return(
                    <>
                        <NavBarContainer/>
                        <div className ="post-show-container">
                        <div className="post-show-main">
                            <div className="post-show-img">
                                    <img src={this.props.post.photoUrl}/>
                            </div>
                            <div className="post-show-section">

                                <header>
                                    <div className="header-left">
                                        {/* <Link to={`/profile/${this.props.user.id}`}>
                                            <img src={this.props.user.profilePhoto}/>
                                        </Link> */}
                                        <div>
                                            <p>{this.props.user.username}</p>
                                            <p className="location">
                                                {this.props.post.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="dropdown" onClick={this.handleDropDown}>
                                    <img  src={window.menu_bar}
                                        onClick={() => 
                                            this.changeSelected(this.props.post.id)}/>
                                    </div>
                                </header>

                                <section>

                                    <div className="show-caption">
                                        <Link to={`/profile/${this.props.user.id}`}>
                                            <img src={this.props.user.profilePhoto} />
                                        </Link>
                                        <div>
                                            <div>
                                                <strong id='show-username'>
                                                    {this.props.user.username}
                                                </strong>
                                                {this.props.post.caption}
                                            </div>
                                            <div className='ribbon'>
                                                <p id='dates'>
                                                    {diffDate(this.props.post.updated_at)}
                                                </p>
                                                {this.renderEditButton()}
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="comments-section">
                                        <CommentIndexContainer 
                                            post={this.props.post}/>
                                    </div>

                                </section>
                                
                                <LikeBarContainer postId={this.props.post.id}/>
                                <p className="post-create-date">
                                    {reformatDate(diffDate(this.props.post.updated_at))
                                        .toUpperCase()}
                                </p>
                                <CreateCommentFormContainer postId={this.props.post.id}/>
                            </div>
                        </div>
                        </div>
                        <div className="footer">
                          <Footer />
                        </div>
                        
                        {this.renderEditForm()}
                        {this.renderPopUp()}
                        <CreatePostFormContainer/>
                    </>
                ); 
            }    
        }        
    }
}

export default PostShow; 