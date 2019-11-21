import React from 'react';

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.renderfollow = this.renderfollow.bind(this);
        this.conditionalPhoto = this.conditionalPhoto.bind(this);
    }

    handleFollow(e) {
        e.preventDefault();
        this.props.props.createFollow({ followed_user_id: this.props.props.profileUser.id })
            .then(() => this.props.props.fetchUser(this.props.props.profileUser.id))
    }

    handleUnfollow(e) {
        e.preventDefault();
        this.props.props.deleteFollow(this.props.props.profileUser.id).then(() => {
            this.props.props.fetchUser(this.props.props.profileUser.id)
        })
    } 

    renderfollow() {
        let { id } = this.props.user 
        return (id === this.props.props.profileUser.id) ? (
                <div></div>
            ) : (
                <div className="profile-follow">
                    {(this.props.props.profileUser.followerIds.includes(this.props.props.user.id)) ? (
                        <button
                            className="profile-button"
                            onClick={this.handleUnfollow}>
                            Unfollow
                        </button>
                    ) : (
                            <button
                                className="profile-button"
                                onClick={this.handleFollow}>
                                Follow
                            </button>
                        )}
                </div>
            )
        
    }
    conditionalPhoto() {
        console.log(this.props)
        if (this.props.user.profilePhoto) {
            return (
                <img className="profile-picture" src={this.props.user.profilePhoto} />
            )
        } else {
            return (
                <img className="profile-picture" src="https://pngimage.net/wp-content/uploads/2018/05/default-user-png-2.png" alt="" />
            )
        }
    }

    render() {
        let { profileUser } = this.props.props; 
        const { followerIds, followingIds } = profileUser
        return(
            <section className="profile-header">
                {this.conditionalPhoto()}
                {/* <img src={profileUser.profilePhoto}/> */}
                <div className="header">
                    <h2>{profileUser.username}</h2>
                    {this.renderfollow()}
                    <p><strong>{profileUser.postIds.length}</strong>  Posts</p>
                    <p><strong>{followerIds.length}</strong>  Followers</p>
                    <p><strong>{followingIds.length}</strong>  Following</p>
                    <p>{profileUser.bio}</p>
                </div>
            </section>
        );  
    }
}

export default ProfileHeader;