import React, { Component } from 'react';
import MyPopover from './popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';



export default class TrendingIdeas extends Component {    
    render() {
        var jumboBg= { backgroundImage: 'url(../../assets/images/Idea.jpg)' };
               
        return (            
            
            <div className="col-md-4 scrollit dashboardImg" style={jumboBg}>
                <div><h3 className="dashboardHead">Trending Ideas</h3></div>                
                <div> 
                    <ul>
                        <li className="ideas">
                            <div className="tooltip"><i className="fa fa-lightbulb-o" aria-hidden="true"></i><a>Government citizen docket </a>– By Vinay Ghonasgi <div className="tooltiptext">lskdfh</div></div>             
                        </li>
                         <li className="ideas"><i className="fa fa-lightbulb-o" aria-hidden="true"></i><a>automate the process of the loan prediction  </a>– By Manoj K</li>
                         <li className="ideas"><i className="fa fa-lightbulb-o" aria-hidden="true"></i><a>Capturing Customer Information </a>– By Samir Tilak</li>
                         <li className="ideas"><i className="fa fa-lightbulb-o" aria-hidden="true"></i><a>Capturing Customer Information </a>– By Samir Tilak</li>
                         <li className="ideas"><i className="fa fa-lightbulb-o" aria-hidden="true"></i><a>Capturing Customer Information </a>– By Samir Tilak</li>
                    </ul>
                </div>
                                {/*<div className="panel dashboard-panel panel-primary">
                                  {/*<div className="panel-heading dashboard CIL-font">Trending Ideas</div>
                                  <div className="panel-body trend-ideas panel-bg scrollit">
                                     <div className="ideas-content"> 
                                        TrendingIdeas
                                     </div>

                                  </div>
                              </div>*/}
                          </div>
            
        );
    }

    
}