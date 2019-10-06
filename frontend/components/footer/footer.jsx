import React from "react";


class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="footer">
                <a className="links" href="https://www.linkedin.com/in/gio-giorgobiani-282883153" target="_blank">LinkedIn</a>
                <a className="links" href="https://github.com/Zuzuna54" target="_blank">Github</a>
                <p className="footer-mes">© 2019 INSTAGRAM FROM FACEBOOK</p>
            </div>
        )
    }
}

export default Footer;