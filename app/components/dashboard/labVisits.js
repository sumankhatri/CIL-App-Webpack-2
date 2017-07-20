import React, { Component } from 'react';
import Collapsible from 'react-collapsible';


export default class LabVisits extends Component {
    
    render() {        
        return (            
            
            <div className="col-md-3 ">
                <div className="panel dashboard-panel panel-primary">
                    <div className="panel-heading dashboard CIL-font Lab-visittop">Lab Visits</div>
                    <div className="panel-body scrollit panel-bg">
                            <div className="lab-visitpanel" id="lab-border">
                                 <Collapsible trigger="DB-client visit">
                                        <div><label className="eventLabel">Client-Name:</label> <p className="adjEvent">DB Client</p></div>
                                         <div><label className="eventLabel">Client-Location:</label> <p className="adjEvent">Pune</p></div>
                                         <div><label className="eventLabel">Event-Date:</label> <p className="adjEvent">3.08.2017</p></div>
                                         <div><label className="eventLabel">Miscellaneous:</label> <p className="adjEvent">12:00 A.M</p></div>
                                        <div><label className="eventLabel">Portfolio:</label> <p className="adjEvent">Rob</p></div>
                                         <div><label className="eventLabel">Agenda:</label> <p className="adjEvent">Digitalization</p></div>
                                      </Collapsible>
                              </div>
                            
                                   <div className="lab-visitpanel" id="lab-border">
                                      <Collapsible trigger="London-team visit">
                                         <div><label className="eventLabel">Client-Name:</label> <p className="adjEvent">DB Client</p></div>
                                         <div><label className="eventLabel">Client-Location:</label> <p className="adjEvent">Pune</p></div>
                                         <div><label className="eventLabel">Event-Date:</label> <p className="adjEvent">3.08.2017</p></div>
                                         <div><label className="eventLabel">Miscellaneous:</label> <p className="adjEvent">12:00 A.M</p></div>
                                         <div><label className="eventLabel">Portfolio:</label> <p className="adjEvent">Rob</p></div>
                                         <div><label className="eventLabel">Agenda:</label> <p className="adjEvent">Digitalization</p></div>
                                     </Collapsible>
                                   </div>
                                 
                                 <div className="lab-visitpanel" id="lab-border">
                                    <Collapsible trigger="City-client visit">
                                         <div><label className="eventLabel">Client-Name:</label> <p className="adjEvent">DB Client</p></div>
                                         <div><label className="eventLabel">Client-Location:</label> <p className="adjEvent">Pune</p></div>
                                         <div><label className="eventLabel">Event-Date:</label> <p className="adjEvent">3.08.2017</p></div>
                                         <div><label className="eventLabel">Miscellaneous:</label> <p className="adjEvent">12:00 A.M</p></div>
                                         <div><label className="eventLabel">Portfolio:</label> <p className="adjEvent">Rob</p></div>
                                         <div><label className="eventLabel">Agenda:</label> <p className="adjEvent">Digitalization</p></div>
                                    </Collapsible>
                                </div>
                          </div>
                  </div>
                                    
            </div>
                             
        );
    }
    
}
