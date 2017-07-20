import React from 'react';
import { connect } from 'react-redux';
import  { bindActionCreators } from 'redux';
import { logout } from '../../actions/loginActions';
import { Link } from 'react-router';

class SideBar extends React.Component {

    render() {
        return (
        	<div id="sidebar-wrapper" className="sidebar-l-p">
                <nav id="spy">
                    <ul className="sidebar-nav nav">
		                <li className="sidebar-brand">
		                    <div onClick={() => this.props.logout()}><div className="logoutSection"><div className="fa fa-power-off solo logoutIcon"></div><div className="cilFont cilFont14 logoutText">Logout</div></div></div>
		                </li>		                
                    </ul>
                </nav>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({logout: logout}, dispatch);
}

export default connect(null, matchDispatchToProps)(SideBar);
