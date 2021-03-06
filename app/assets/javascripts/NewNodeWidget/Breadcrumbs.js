import React, { Component } from 'react';
import classNames from 'classnames';

import I18n from '../common/I18n';
import { immutableListOf } from '../common/propTypes';

import Section from './models/Section';
import { OVERVIEW } from './models/sections';

const { func, instanceOf } = React.PropTypes;

class Breadcrumbs extends Component {
  static propTypes = {
    sections: immutableListOf(instanceOf(Section)).isRequired,
    activeSection: instanceOf(Section),
    onNavigate: func.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return this.props.activeSection !== nextProps.activeSection;
  }

  render() {
    const { sections, activeSection, onNavigate } = this.props;
    const className = classNames({ done: activeSection === OVERVIEW });
    const activeSectionIndex = sections.findIndex(section => section === activeSection);

    const items = sections.map((section, index) => {
      // Skip overview as this section is not part of the breadcrumbs
      if (section === OVERVIEW) {
        return null;
      }

      const done = index < activeSectionIndex;
      const className = classNames({ active: section === activeSection, done });

      const onClick = event => {
        event.preventDefault();

        onNavigate(section);
      };

      return (
        <li key={section} className={className}>
          <a href="#" onClick={onClick}>
            <I18n scope={`nodes.new.form.section.${section}.name`} />
          </a>
        </li>
      );
    });

    return (
      <div className="nodes-new-breadcrumbs">
        <ul className={className}>
          {items}
        </ul>
      </div>
    );
  }
}

export default Breadcrumbs;
