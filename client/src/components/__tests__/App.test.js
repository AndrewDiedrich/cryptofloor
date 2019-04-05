import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


//Jest runs in CL, React includes JSDOM which mimics browser so Jest can test
//JSDOM makes fake div/component/func in cl to test
it('renders without crashing', () => {
  const div = document.createElement('div');
  //wrapped in mock store
  const store = mockStore({ })
  //render app in div
  ReactDOM.render(<App />, div);
  //inspects div element to see if component is in there
  expect(div.innerHTML).toContain('')

  //console.log(div.innerHTML);
  //clean up after test, unmounts component from div, 
  //free up memory
  ReactDOM.unmountComponentAtNode(div);
});

// it('The Landing page renders', () => {
//   const landing = document.createElement('Landing');
//   ReactDOM.render(<Landing />, div);
//   ReactDOM.unmountComponentAtNode
// })
