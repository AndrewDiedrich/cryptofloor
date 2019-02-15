import React, { Component } from 'react';
import Treemap from 'react-vis/dist/treemap';
import ShowcaseButton from './Showcasebutton';
import { connect } from 'react-redux';

function _getRandomData(total) {
  const totalLeaves = total || Math.random() * 20;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    leaves.push({
      name: total ? total : String(Math.random()).slice(0, 3),
      size: Math.random() * 1000,
      color: Math.random(),
      style: {
        border: 'thin solid red'
      }
    });
  }
  return {
    title: '',
    color: 1,
    children: leaves
  };
}

export default class DynamicTreemapmap extends React.Component {
  state = {
    hoveredNode: false,
    treemapData: _getRandomData(20),
    useCirclePacking: false
  };

  render() {
    const {hoveredNode, useCirclePacking} = this.state;
    const treeProps = {
      animation: {
        damping: 9,
        stiffness: 300
      },
      data: this.state.treemapData,
      onLeafMouseOver: x => this.setState({hoveredNode: x}),
      onLeafMouseOut: () => this.setState({hoveredNode: false}),
      onLeafClick: () => this.setState({treemapData: _getRandomData()}),
      height: 300,
      mode: this.state.useCirclePacking ? 'circlePack' : 'squarify',
      getLabel: x => x.name,
      width: 350
    };
    return (
      <div className="dynamic-treemap-example">
        <ShowcaseButton
          onClick={() => this.setState({useCirclePacking: !useCirclePacking})}
          buttonContent={'TOGGLE CIRCLE PACK'}
        />
        <Treemap {...treeProps} />
        click above to the update data
        {hoveredNode && hoveredNode.value}
      </div>
    );
  }
}