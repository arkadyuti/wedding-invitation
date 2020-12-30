/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import logoImg from '../../images/logo.png';

import "../../css/styles.css";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  return (
    <div>
      <div className="logo-wrapper">
        <img src={logoImg} className="logo" />
      </div>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
