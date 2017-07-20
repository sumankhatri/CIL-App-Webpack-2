import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

export default class ProjectModal extends React.Component {
    
    render () {
      if(!this.props.projectData) {  
          //console.log(typeof(this.props.projectData.activeProject.projects[0].technologies))          
            return (<div></div>);
        }   
    return (
    <div className="modal fade projectModal" id="reset-password-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" >
            <div className="loginmodal-container">
            <Modal show={this.props.showModal} onHide={this.props.hideModal} className="projectModal" id="project-data">
                   <div className="modal-header proj-mod-head" >
                       <h1 className="project-header">Project Details</h1><span className="fa fa-close cil-close" onClick={this.props.hideModal}></span>
                      <br/>
                    </div>
                    <div className="modal-body">
                        <div className="">
                <div className="project_section">
                 <div className="container">
                <h2 className="project_title"> {this.props.projectData.activeProject.projects[0].projectName}| Duration: {this.props.projectData.activeProject.projects[0].duration} | Domain: {this.props.projectData.activeProject.projects[0].domain}</h2>
                <p className="project_item_description">{this.props.projectData.activeProject.projects[0].shortDesc}</p>
                <label className="label-projects project_sub_title">Technologies used: </label>
                 <p className="project_item_description">                     
                     {this.props.projectData.activeProject.projects[0].technologies.map((tech, i) => {                                
                        return (<span key={i}>{tech}</span>);                            
                    })}                 
                    <br />
                 </p>               
                <label className="label-projects project_sub_title">Tools : </label>
                    <p className="project_item_description">                    
                        {this.props.projectData.activeProject.projects[0].tools.map((tool, i) => {                           
                            return (<span className="tools" key={i}>{tool}</span>);                                                        
                        })}
                    </p>

            
                <label className="label-projects project_sub_title">Team :</label> 
               {/* <p className="project_item_description">sdasds, sdsdsda, sdasdsd, sdsads, sdsadasdsd</p>*/}
                <div className="project_tools">
                    <div className="card-box team-card-box widget-box-three">
                        
                        <div className="pull-left">
                            <img className="team-img" src='/assets/images/team.jpg' alt="BitCoin" width="100" height="100"></img>
                        </div>
                        <div className="team-mem">
                            {this.props.projectData.activeProject.projects[0].teamMembers.map((team, i) => {
                               return(
                                <div className="team-mem-list" key={i}>
                                    <p className="text-success m-t-25 text-uppercase ">{team.name}</p>
                                    <span>{team.desig}</span>
                                </div >
                               ); 
                            })}                            
                        </div>
                    </div>

                </div>
                
                <label className="label-projects project_sub_title">Details : </label>
                <p className="project_item_description">{this.props.projectData.activeProject.projects[0].longDesc}
                </p>
              </div> 
            </div>
        </div> <div className="modal-footer">
                    <input type="button" name="login" className="login loginmodal-submit closeModal" value="Close" onClick={this.props.hideModal} />  
                    </div>
                    </div>
                        
                </Modal> 
            </div>
            
    </div>
  );
    
   }
}

