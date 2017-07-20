import React, { Component } from 'react';


export default class NewsLetter extends Component {
    open () {
        window.open('/pdf/Newsletter_feb.pdf', '_blank', 'fullscreen=yes'); return false;
    }
    render() {        
        return (            
            <div className="col-md-3">
            {/*<div className="col-md-3 newsFeed">
                <div><h3 className="dashboardHead">Newsletter</h3></div>
                <a href="#" onClick={this.open} className="cilFont14"><img src="assets/images/image2.jpg" alt="BitCoin" width="40" height="38"></img>Newsletter: February 2017</a>                                */}
                
                              <div className="panel dashboard-panel panel-primary">
                                  <div className="panel-heading dashboard CIL-font">Newsletter</div>
                                  <div className="panel-body panel-bg upper-panel">
                                      
                                    <a href="#" onClick={this.open} className="cilFont14">
                                        <img src={require("assets/images/image2.jpg")} alt="BitCoin" width="40" height="38"></img>Newsletter: February 2017</a>            

                                  </div>
                              </div>
                            </div>
            
                         
            
        );
    }

    
}