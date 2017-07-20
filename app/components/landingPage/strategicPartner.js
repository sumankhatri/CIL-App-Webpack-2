import React from 'react';

export default class StrategicPartner extends React.Component {
   render() {
        return (
        <div id="success" className="container-fluid landing-strategic text-center bg-grey">

            <h2 className="text-center">OUR STRATEGIC PARTNERS</h2>
          <hr/>   
             <div className="strategiccontainer-fluid">
                <div className="strategic-row">
                    <div className="col-md-6">
                        <div className="panel panel-danger">
                            <div className="panel-body landing">
                              <img src={require("../../assets/images/hcl.jpg")} alt="HCL Group"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-success">
                            <div className="panel-body landing">
                                <img src={require("../../assets/images/DBGroup.png")} alt="DB Group"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>   
         );
       }
     }