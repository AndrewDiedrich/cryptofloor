import React from 'react';
import ShowcaseButton from './Showcasebutton';

import {XYPlot, XAxis, YAxis, HexbinSeries, Borders, Hint} from 'react-vis';

import DATA from './old-faithful.json';

function updateData() {
  return DATA.map(row => ({
    waiting: row.waiting + (Math.random() - 0.5) * 10,
    eruptions: row.eruptions + (Math.random() - 0.5) * 2
  }));
}
export default class HexMap extends React.Component {
  state = {
    data: DATA,
    hoveredNode: null,
    radius: 10,
    offset: 0
  };
  render() {
    const {data, radius, hoveredNode, offset} = this.state;

    return (
      <div>
        <XYPlot
          xDomain={[40, 100]}
          yDomain={[1.5, 8]}
          width={300}
          getX={d => d.waiting}
          getY={d => d.eruptions}
          onMouseLeave={() => this.setState({hoveredNode: null})}
          height={300}
        >
          <HexbinSeries
            animation
            className="hexbin-example"
            style={{
              stroke: '#125C77',
              strokeLinejoin: 'round'
            }}
            onValueMouseOver={d => this.setState({hoveredNode: d})}
            xOffset={offset}
            yOffset={offset}
            colorRange={['orange', 'cyan']}
            radius={radius}
            data={data}
          />
          <Borders style={{all: {fill: '#fff'}}} />
          <XAxis />
          <YAxis />
          {hoveredNode && (
            <Hint
              xType="literal"
              yType="literal"
              getX={d => d.x}
              getY={d => d.y}
              value={{
                x: hoveredNode.x,
                y: hoveredNode.y,
                value: hoveredNode.length
              }}
            />
          )}
        </XYPlot>
        <ShowcaseButton
          onClick={() => this.setState({data: updateData()})}
          buttonContent={'UPDATE DATA'}
        />
        <ShowcaseButton
          onClick={() =>
            this.setState({radius: (Math.random() - 0.5) * 10 + 10})
          }
          buttonContent={'UPDATE RADIUS'}
        />
        <ShowcaseButton
          onClick={() =>
            this.setState({offset: (Math.random() - 0.5) * 10 + 10})
          }
          buttonContent={'UPDATE OFFSET'}
        />
      </div>
    );
  }
}
