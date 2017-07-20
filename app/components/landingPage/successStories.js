import React from 'react';

export default class SuccessStories extends React.Component {
   render() {
        return (
<div id="success" className="container-fluid landing-success text-center bg-grey">
         <h2 className="text-center">{this.props.data.successMainheading}</h2>
         <hr/>
         <h4>{this.props.data.successSubheading}</h4>
         <div className="row text-center slideanim">
            <div className="col-sm-4">
               <div className="thumbnail card">
                  <img src={require("../../assets/images/bitcoin.jpg")} alt="BitCoin" width="400" height="300"></img>
                  <h1 className="color-primary">{this.props.data.successInfo[0].successHeading}</h1>
                  <p>{this.props.data.successInfo[0].successDescription}</p>
               </div>
            </div>
            <div className="col-sm-4">
               <div className="thumbnail card">
                  <img src={require("../../assets/images/hyperledger2.jpg")}  alt="Hyperledger" width="400" height="300"></img>
                  <h1 className="color-primary">{this.props.data.successInfo[1].successHeading}</h1>
                  <p>{this.props.data.successInfo[1].successDescription}</p>
               </div>
            </div>
            <div className="col-sm-4">
               <div className="thumbnail card">
                  <img src={require("../../assets/images/consensus.jpg")} alt="Consensus" width="400" height="300"></img>
                  <h1 className="color-primary">{this.props.data.successInfo[2].successHeading}</h1>
                  <p>{this.props.data.successInfo[2].successDescription}</p>
               </div>
            </div>
         </div>
      </div>
     );
   }  
}