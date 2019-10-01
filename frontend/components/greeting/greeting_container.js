import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greetig";

const msp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})


const mdp = dispatch => ({
    logout: () => dispatch(logout())
})


export default connect(msp, mdp)(Greeting);