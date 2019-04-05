import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAssetTeamImg } from '../../actions';

class AssetTeam extends Component {

    componentDidMount() {
        this.props.fetchAssetTeamImg(); 
        console.log(this.props.linkedin)
    }

    render() {
        return(
            <div>
            
                <a href="#" class="ui medium image">
                    <img src={this.props.linkedin} alt="profile"/>
                </a>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { 
            linkedin: state.linkedin
    };
}

export default connect(mapStateToProps, { fetchAssetTeamImg })(AssetTeam);