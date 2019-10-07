import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';

// const postComments = (stateComments, postId) => {
//     let arr = Object.values(stateComments);
//     let comments = [];
//     arr.forEach(comment => {
//         if (comment.post_id === postId) {
//             comments.push(comment);
//         }
//     });
//     return comments;
// };

// const msp = (state, ownProps) => {
//     return {
//         comments: postComments(state.entities.comments, ownProps.post.id)
//     };
// };

export default connect(null, null)(PostIndexItem); 