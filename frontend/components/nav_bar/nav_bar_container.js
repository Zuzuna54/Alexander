import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const msp = state => {
    let user = state.entities.users[state.session.id];
    return ({
        user
    });
};

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar); 