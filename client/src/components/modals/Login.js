import React from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ModalTemplate from './ModalTemplate';
import history from '../../history';
//import { fetchStream, deleteStream } from '../../actions';

class Login extends React.Component {
    // componentDidMount() {
    //     //console.log(this.props);//gives path info
    //     //use fetchstream reducer to match stream selected
    //     this.props.fetchStream(this.props.match.params.id);
    // }

    renderActions() {
       // const { id } = this.props.match.params;
        return (
            //React.Fragment return without div wrap multiple jsx elements
            //<React.Fragment>
            // <>
            //     <button onClick={()=> this.props.deleteStream(id)} className='ui button negative'>Delete</button>
            //     <Link to='/' className='ui button'>Cancel</Link>
            // </>
            <>
            <button>Cancel</button>
            </>
        );
    }

    renderContent() {
     //   if(!this.props.stream) {
            return 'Please download Scatter if you Dont already, Desktop version required'
        // }
        // return `Are you sure you want to delete the stream: ${this.props.stream.title}`
    }

    render() {    
        return (
            <ModalTemplate 
                title='Login to CryptoFloor'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
};

//ownProps of path so id of this.props.match.params.id from delete/:id
// const mapStateToProps = (state, ownProps) => {
//     return {
//         stream: state.streams[ownProps.match.params.id] 
//     }
// };

//connect(mapStateToProps, { fetchStream, deleteStream })
export default Login;