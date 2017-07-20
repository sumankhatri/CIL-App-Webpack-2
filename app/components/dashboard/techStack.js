import React, { Component } from 'react';


export default class TechStack extends Component {
    
    render() {        
        return (            
            
            <div className="col-md-5">
                                <div className="panel dashboard-panel panel-primary">
                                  <div className="panel-heading dashboard CIL-font">Tools and Technologies</div>
                                  <div className="panel-body col-md-12 panel-bg upper-panel">
                                     {/*{this.props.techData.map((tech, i) => {                                
                                       //    return (<span className="tech">{tech.title}</span>);
                                     //})}*/}
                                     
                                    <div className="tech-div"><span className="tech">Backend</span> : <span>JAVA, Spring Boot, Microservices</span></div>
                                    <div className="tech-div"><span className="tech">Frontend</span> : <span>React-redux</span></div>
                                    <div className="tech-div"><span className="tech">Tools</span> : <span>Webpack, Gulp</span></div>
                                    <div className="tech-div"><span className="tech">Mobile</span> : <span>React Native</span></div>
                                    <div className="tech-div"><span className="tech">Blockchain</span> : <span>Truffle</span></div>
                                    
                                  </div>
                              </div>
                          </div>
            
        );
    }

    
}