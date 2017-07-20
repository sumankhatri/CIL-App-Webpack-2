import React from 'react';
import './landingPage.scss';
import Menu from './menu';
import Jumbotron from './jumbotron';
import AboutSection from './aboutSection';
import OurValues from './ourValues';
import Offerings from './offerings';
import SuccessStories from './successStories';
import StrategicPartner from './strategicPartner';
import ContactUs from './contactUs';
import Footer from './footer';
import {connect} from 'react-redux';
import  { bindActionCreators } from 'redux';
import InvalidLogin from './invalidLogin';
import {showInvalidLogin, hideInvalidLogin, getLandingPage} from '../../actions';

class Greetings extends React.Component {    
    
    componentWillMount() {      
     if(this.props.dashboard){

         this.props.showInvalidLogin();
          
     }
      this.props.getLandingPage();
   }
    openInvalidLogin () {
        
        this.props.showInvalidLogin();
       return( <InvalidLogin showModal={this.props.invalidLogin[invalidLogin]} error={this.props.dashboard.invalidLogin} close={this.props.hideInvalidLogin}/>);
    }
    close () {
        this.props.hideInvalidLogin();
        
    }
    
    render() {
        if(!this.props.landingPage) {
            return (<div><h4>Loading Landing page....</h4></div>);
        }
        else {
            if(this.props.dashboard && this.props.dashboard.invalidLogin){
            return (<div>
              
                   <InvalidLogin showModal={this.props.invalidLogin ? this.props.invalidLogin.invalidLogin : true} error={this.props.dashboard.invalidLogin} close={this.props.hideInvalidLogin} heading="Session Expired"/>
                
                <Menu /> 
                <Jumbotron data={this.props.landingPage.landingPage.header}/>
                <AboutSection data={this.props.landingPage.landingPage.about} />
                <OurValues data={this.props.landingPage.landingPage.values} />
                <Offerings data={this.props.landingPage.landingPage.service} />
                <SuccessStories data={this.props.landingPage.landingPage.success} />
                <StrategicPartner data={this.props.landingPage.landingPage.strategic}/>
                <ContactUs data={this.props.landingPage.landingPage.contact}/>
                <Footer />
            </div>);
        }
        if(this.props.landingPage.invalidLogin){
            return <InvalidLogin showModal={this.props.invalidLogin ? this.props.invalidLogin.invalidLogin === true : true} error={this.props.landingPage.invalidLogin} close={this.props.hideInvalidLogin} heading="Oops some problem occured !!"/>
        }
        return (
            <div>              
                <Menu/> 
                <Jumbotron data={this.props.landingPage.landingPage.header}/>
                <AboutSection data={this.props.landingPage.landingPage.about} />
                <OurValues data={this.props.landingPage.landingPage.values} />
                <Offerings data={this.props.landingPage.landingPage.service} />
                <SuccessStories data={this.props.landingPage.landingPage.success} />
                <StrategicPartner data={this.props.landingPage.landingPage.strategic}/>
                <ContactUs data={this.props.landingPage.landingPage.contact}/>
                <Footer />
            </div>
        );
        }
    }

    
}

function mapStateToProps(state) {
    return {
        
        dashboard: state.dashboard,
        invalidLogin: state.invalidLogin,
        landingPage: state.landingPage
        
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({showInvalidLogin: showInvalidLogin, hideInvalidLogin: hideInvalidLogin, getLandingPage: getLandingPage}, dispatch);
}



export default connect(mapStateToProps, matchDispatchToProps)(Greetings);
