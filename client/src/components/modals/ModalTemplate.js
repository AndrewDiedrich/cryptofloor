import React from 'react';
import ReactDOM from 'react-dom';


const ModalTemplate = props => {
    return ( //render html not in react app or use in server side with node
        ReactDOM.createPortal(
            <div  
                onClick={props.onDismiss} 
                className="ui dimmer modals visible active"
            >
                <div //e(event) if clicked bubbles up to history push outside of model so stopprop will only only to exit outside of modal and not just outised button 
                    onClick={(e) => e.stopPropagation()}
                    className="ui standard modal visible active"
                >
                    <div className='header'>{props.title}</div>
                    <div className='content'>
                        {props.content}
                    </div>
                    <div className='actions'>
                        {props.actions}
                    </div>
                </div>
            </div>,
            document.querySelector('#modal'))
    );
}

export default ModalTemplate;