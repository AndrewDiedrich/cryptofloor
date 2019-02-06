import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowcaseButton from './Showcasebutton';

import {XYPlot, XAxis, YAxis, HexbinSeries, Borders, Hint} from 'react-vis';

import DATA from './old-faithful.json';
import { hexmapData } from '../../actions';

function updateData() {
  return this.props.state.map(row => ({
    circulating_supply: row.circulating_supply+ (Math.random() - 0.5) * 10,
    price: row.quote.USD.price + (Math.random() - 0.5) * 2
  }));
}
class HexMap extends Component {

  

  render() {
    const {data, radius, hoveredNode, offset} = this.state;

    return (
      <>
        <XYPlot
          xDomain={[40, 100]}
          yDomain={[1.5, 8]}
          width={300}
          getX={d => d.circulating_supply}
          getY={d => d.quote.USD.price}
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
            colorRange={['green', 'red']}
            radius={radius}
            data={data}
          />
          <Borders style={{all: {fill: '#000'}}} />
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
      </>
    );
  }
}

const mapeStateToProps = (state) => {
  return { data: state.data }
}
export default connect(mapeStateToProps)(HexMap);