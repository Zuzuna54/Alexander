import React from 'react'; 

class LikeBar extends React.Component {
    constructor(props) {
        
        super(props);
        this.props = props
        this.renderHeart = this.renderHeart.bind(this);
        this.createLike = this.createLike.bind(this);
        this.removeLike = this.removeLike.bind(this); 
        this.renderNumLikes = this.renderNumLikes.bind(this);
        this.focusOnComment = this.focusOnComment.bind(this); 
    }

    createLike() {
        this.props.createLike({
            post_id: this.props.postId 
        });
    }

    removeLike() {
        let { likes, currUser, removeLike } = this.props; 
        
        for(let i = 0; i < likes.length; i ++) {
            if ( likes[i].user_id === currUser ) {
                removeLike(likes[i]);
                return; 
            }
        }
    }

    focusOnComment() {
        let { history, postId } = this.props; 
        if (history.location.pathname === '/home') {
            history.push(`/post/${postId}`);
        } else {
            document.getElementsByTagName('textarea')[0].focus(); 
        }
    }

    renderHeart() {
        let { likers, currUser } = this.props;
        if(likers === undefined) {
            likers = []
         }
        return likers.includes(currUser) ? (
            <section id="icons">
                <img src={window.red_heart} onClick={this.removeLike}/>
                <img src={window.comment}
                    onClick={this.focusOnComment}/>
            </section>
        ) : (
            <section id="icons">
                <img src={window.heart} onClick={this.createLike}/>
                <img src={window.comment}
                        onClick={this.focusOnComment}/>
            </section>
        ); 
        
    }

    renderNumLikes() {
        let { likes } = this.props; 
        if ( likes.length === 0 ) {
            return (
                <p id="num-likes">
                    <strong style={{fontWeight:'normal'}}>Be the first to </strong>like this
                </p>
            ); 
        } else if ( likes.length === 1 ) {
            return (<p id="num-likes">1 like</p>); 
        } else {
            return (<p id="num-likes">{likes.length} likes</p>);
        }
    }

    render() {
        return(
            <div className='icon-bar'>
                {this.renderHeart()}
                {this.renderNumLikes()}
            </div>
        );
    }
}

export default LikeBar; 