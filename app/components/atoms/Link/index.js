/**
*
* Link
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Link() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Link.propTypes = {

};

export default Link;
