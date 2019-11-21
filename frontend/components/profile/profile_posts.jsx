import React from 'react';
import ProfilePostItem from './profile_post_item';

class ProfilePosts extends React.Component {
    constructor(props) {
        super(props);
        this.renderPosts = this.renderPosts.bind(this); 
    }

   
    renderPosts() {
        const pageId = parseInt(this.props.profileId)
        if ( this.props.posts.length === 0 && pageId === this.props.user.id) {
            return(
                <div className="no-posts">
                    <img src={window.camera}/>
                    <h3>Upload a Photo</h3>
                    <div className="upload-msg">
                        <p>Share photos that you'd like your friends to see</p>
                    </div>
                </div>
            ); 
        } if ( this.props.posts.length === 0 && pageId !== this.props.user.id ){
            return(
                <div className="no-posts">
                    <div className="upload-msg">
                        <p>This user has not made any posts yet.</p>
                    </div>
                </div>
            )
        } else {
            return( 
                <div className="posts-grid">
                    {this.props.posts.reverse().map((post, idx) =>
                    <ProfilePostItem
                        key={idx}
                        post={post} />
                    )} 
                </div>
            );
        }
    }

    render() {
        return(
            <div className="profile-posts">
                <div className="profile-menu">
                    <div className="posts">
                        <img src={window.grid}/>
                        <p>POSTS</p>
                    </div>
                </div>
                {this.renderPosts()}
            </div>
        );
    }
}

export default ProfilePosts;