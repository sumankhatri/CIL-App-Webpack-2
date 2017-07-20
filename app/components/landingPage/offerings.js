import React from 'react';

export default class Offerings extends React.Component {
   render() {
        return (
   <div id="offerings" className="container-fluid landing-offering text-center">
         <h2 className="text-center">{this.props.data.serviceMainheading}</h2>
         <hr/>
         <div className="row slideanim ">
            <div className="col-sm-4">
               <span className="fa fa-globe logo-small"></span>
               <h4>{this.props.data.serviceOffering[0].serviceHeading}</h4>
               <p>{this.props.data.serviceOffering[0].serviceDescription}</p>
            </div>
            <div className="col-sm-4">
               <span className="fa  fa-mobile-phone logo-small"></span>
               <h4>{this.props.data.serviceOffering[1].serviceHeading}</h4>
               <p>{this.props.data.serviceOffering[1].serviceDescription}</p>
            </div>
            <div className="col-sm-4">
               <span className="fa fa-lock logo-small"></span>
               <h4>{this.props.data.serviceOffering[2].serviceHeading}</h4>
               <p>{this.props.data.serviceOffering[2].serviceDescription}</p>
            </div>
         </div>
   </div>
      );
    }  
}