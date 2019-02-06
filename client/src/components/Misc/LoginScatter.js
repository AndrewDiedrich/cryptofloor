import React from 'react';
import { connect } from 'react-redux';
import { scatterUser } from '../../actions';

class LoginScatter extends React.Component {
    componentDidMount() {
        this.props.scatterUser();
        console.log(this.props.state);
    }
    

    // renderSurveys() {
    //     return this.props.erse().map(survey => {
    //         return (
    //             <div key={survey._id} className="card darken-1">
    //                 <div className="card-content">
    //                     <span className="card-title">{survey.title}</span>
    //                     <p>
    //                         {survey.body}
    //                     </p>
    //                     <p className="right">
    //                         Sent On: {new Date(survey.dateSent).toLocaleDateString()}
    //                         Last Response Recieved On: {new Date(survey.lastResponded).toLocaleDateString()}
    //                     </p>
    //                 </div>
    //                 <div className="card-action">
    //                     <a>Yes: {survey.yes}</a>
    //                     <a>No: {survey.no}</a>
    //                 </div>
    //             </div>
    //         );
    //     })
    // }
    
    render() {
        return (
            <div>
                Scatter account
            </div>

        )
    }
}

function mapStateToProps(state) {
    return state.auth;
}

//fetchSurveys action creator to 
export default connect(mapStateToProps, { scatterUser })(LoginScatter);