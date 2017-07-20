///container component 
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import  { bindActionCreators } from 'redux';
import  { opinionPollSub } from 'actions/dashboardActions';

class Polling extends React.Component {
    divStyle (progress) {
        return {
            width: progress+'%'
        };
    }
    opinionPollSubmit () {        
        let self = this;
        this.props.dashboard.dashboard.polling.options.map((polling, i) => {
            let radioRef = `item-${i}`;
            if(self.refs[radioRef].checked){
                self.props.opinionPollSub({id : self.props.dashboard.dashboard.polling.qid, 'options' : self.refs[radioRef].value});
            }
        });
    }
    render() {        
        if(!this.props.dashboard.dashboard.polling_result) {
            return (
            <div className="col-md-2">
                <div className="panel dashboard-panel panel-primary">
                    <div className="panel-heading dashboard">Opinion Poll</div>
                        <div className="panel-body event-panel panel-bg">                                   
                            <p className="quesPoll">
                              {this.props.dashboard.dashboard.polling.qname} 
                            </p><hr className="adjustSep" />    
                            <ul>
                                {this.props.dashboard.dashboard.polling.options.map((polling, i) => {
                                    return <li key={i} className="list-group-item polling-list">
                                            <div className="radio cilFont14">
                                                <label>
                                                    <input type="radio" name="optionsRadios" ref = {`item-${i}`} value={polling}/>
                                                    {polling}
                                                </label>
                                            </div>
                                        </li>;
                                 })
                                }                            
                            </ul><hr className="adjustSep1" /> 
                        </div>
                                            
                        <div className="Eventpanel-footer">
                            <button type="button" className="btn btn-primary vote-btn cilFont14" onClick={() => this.opinionPollSubmit()}>Vote Now!</button>                                    
                        </div>                        
                    </div>
            </div>
                 
            );
        } 
        return (
            <div className="col-md-2">
                <div className="panel dashboard-panel panel-primary">
                    <div className="panel-heading dashboard">Opinion Poll</div>
                        <div className="panel-body">
                            <p className="quesPoll">
                              {this.props.dashboard.dashboard.polling.qname} 
                            </p>
                            <div className="pollResult">Opinion Poll Results</div>
                            <ol className="resList">
                                {this.props.dashboard.dashboard.polling_result.polling.qoptions.map((polling, i) => {
                                    return <li key={i} className="">
                                                {polling.value}<br/>
                                                <div className="pollProgress">
                                                    <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow={polling.poll}
                                                    aria-valuemin="0" aria-valuemax="100" style={this.divStyle(polling.poll)}>                                                       
                                                    </div>                                                     
                                                </div>
                                                {polling.poll}%
                                                </div>
                                            </li>;
                                 })
                                }                             
                            </ol>
                            <hr/>
                            <label>Total Responses : {this.props.dashboard.dashboard.polling_result.polling.total}</label>
                        </div>
                </div>
            </div>
        );
    }   
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({opinionPollSub: opinionPollSub}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Polling);