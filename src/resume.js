import React, { Component } from 'react';
import Section from './sections';
import content from './content';
import './resume.scss';

class Resume extends Component {
  componentDidMount() {
    console.log('resume height', this.resumeEl.clientHeight);
  }

  render() {
    // TODO: write better code
    return (
      <main className="Resume" ref={ (el) => this.resumeEl = el }>
        <div className="desktop">
          <div className="left">
            <Section.Header content={ content }/>
            <Section.Employment content={ content }/>
            <Section.Projects content={ content }/>
          </div>
          <div className="right">
            <Section.Contact content={ content }/>
            <Section.Summary content={ content }/>
            <Section.Education content={ content }/>
            <Section.Skills content={ content }/>
          </div>
        </div>
        <div className="mobile">
          <Section.Header content={ content }/>
          <Section.Contact content={ content }/>
          <Section.Summary content={ content }/>
          <Section.Employment content={ content }/>
          <Section.Projects content={ content }/>
          <Section.Skills content={ content }/>
          <Section.Education content={ content }/>
        </div>
      </main>
    );
  }
}

export default Resume;