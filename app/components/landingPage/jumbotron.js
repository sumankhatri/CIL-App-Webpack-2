import React from 'react';
 
export default class Jumbotron extends React.Component {
  
   render() {
    var jumboBg= { backgroundImage: 'url(../../assets/images/CIL_BG.jpg)' };
        return (
        <div   id="myPage" className="jumbotron bg adjustJumbo text-center">
            <div className="container-fluid padContainer jumboBg">
                <div className="row">
                  <div className="col-sm-12 header-content">
                       <h1>{this.props.data.headerMainheading}</h1>
                       <p className="secTitle">{this.props.data.headerSubheading}</p>
                       <p className="thrTitle">
                        {this.props.data.headerDescription}
                       </p>
                  </div>
                </div>
              </div>              
         </div>       
               
         );
   }
}