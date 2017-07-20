import React from 'react';

export default class ContactUs extends React.Component {
   render() {
        return (
   <div id="contact" className="container-fluid landing-contact">
         <h2 className="text-center">{this.props.data.contactMainheading}</h2>
		 <hr/>
         <div className="row">
            <div className="col-sm-5">
               <p>{this.props.data.contactSubheading}</p>
			   <br/>
               <p><span className="fa fa-map-marker"></span> {this.props.data.contactInfo[0]}</p>
               <p><span className="fa  fa-mobile-phone"></span> {this.props.data.contactInfo[1]}</p>
               <p><span className="glyphicon glyphicon-envelope"></span> {this.props.data.contactInfo[2]}</p>
            </div>
            <div className="col-sm-7 slideanim">
               <div className="row">
                  <div className="col-sm-6 form-group">
                     <input className="form-control" id="name" name="name" placeholder="Name" type="text" required></input>
                  </div>
                  <div className="col-sm-6 form-group">
                     <input className="form-control" id="email" name="email" placeholder="Email" type="email" required></input>
                  </div>
               </div>
               <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea>
               <br/>
               <div className="row">
                  <div className="col-sm-12 form-group">
                     <button className="btn btn-default pull-right" type="submit">Send</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      );
    }
  }      