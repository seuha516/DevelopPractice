import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  static defautProps = {
    name: '기본 이름',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕, 내 이름은 {name}!<br />
        children은 {children}
        <br />
        좋아하는 숫자는 {favoriteNumber} !
      </div>
    );
  }
}

export default MyComponent;
