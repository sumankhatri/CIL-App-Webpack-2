import React from 'react';

export default class OurValues extends React.Component {
   render() {
        return (
   <div className="valuescontainer-fluid bg-grey text-center">
         <div className="row">
			   <h2>{this.props.data.valuesMainheading}</h2>
			       <hr/>
               <div className="col-sm-12">
                  <div className="row our-values">
                     <div className="col-sm-4">
                        <div className="sectionLink bg-color-1" id="coursesLink">
                           <i className="fa fa-file-text-o linkIcon border-color-1" aria-hidden="true"></i>
                           <h4 className="valuesHeading">{this.props.data.valuesInfo[0].valuesHeading}</h4>
                           <span className="linkText">{this.props.data.valuesInfo[0].valuesDescription}</span>
                           
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="sectionLink bg-color-2" id="teamLink">
                           <i className="fa fa-calendar-o linkIcon border-color-2" aria-hidden="true"></i>
                             <h4 className="valuesHeading">{this.props.data.valuesInfo[1].valuesHeading}</h4>
                           <span className="linkText">{this.props.data.valuesInfo[1].valuesDescription}</span>
                           
                        </div>
                     </div>
                     <div className="col-sm-4">
                        <div className="sectionLink bg-color-3" id="galleryLink">
                           <i className="fa fa-picture-o linkIcon border-color-3" aria-hidden="true"></i>
                            <h4 className="valuesHeading">{this.props.data.valuesInfo[2].valuesHeading}</h4>
                           <span className="linkText">{this.props.data.valuesInfo[2].valuesDescription}</span>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
       );
    }  
}
