import React from 'react';

export default class Footer extends React.Component {
   render() {
      
        return (
<div>
   <footer className="container-fluid landing-footer text-center">
         <a href="#myPage" title="To Top" className="footer-up">
         <span id="arrow" className="fa fa-chevron-up"></span>
         </a>
   </footer>
      <footer className="footer-bottom container-fluid">
         <div className="col-xs-12">
            <div className="padding">
               <div className="row">
                  <p className="copycolor adjFooter1">Co-Innovation Labs | Copyright 2017 | All Rights Reserved</p>
                  <ul className="list-inline privacyLinks adjFooter">
                     <ul className="social">
                        <li className="facebook"><i className="fa fa-facebook"></i></li>
                        <li className="twitter"><i className="fa fa-twitter"></i></li>
                        <li className="google-plus"><i className="fa fa-google-plus"></i></li>
                        <li className="linkedin"><i className="fa fa-linkedin"></i></li>
                        <li className="faq"><a href="faq"><span className="label-theme copycolor">FAQ</span></a></li>
                        <li className="privacy"><a href="faq"><span className="label-theme copycolor">Privacy</span></a></li>
                        <li className="terms"><a href="faq"><span className="label-theme copycolor">Terms Of Use</span></a></li>
                     </ul>
                  </ul>
               </div>
            </div>
         </div>
      </footer>  
</div>

      );
    }
  }    
