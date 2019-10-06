import React from "react";


class AppLinks extends React.Component {
    constructor(props) {
        super(props)
    }

    render() { 
        return (
             <div className="app-links">
                <p>Get the real app</p>
                    <div className="link-photos">
                    <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo"><img src={window.app1} /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source
                    %3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXPxlUwAEAAE7BYcROqbd5bl-TwJy%26utm_
                    content%3Dlo%26utm_medium%3Dbadge"><img src={window.app2} /></a> 
                </div>
            </div> 
        )
    }
}

export default AppLinks;