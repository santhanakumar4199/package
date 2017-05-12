/**
*
* StyledLink
*
*/


// import styled from 'styled-components';

import React from 'react';
// import styled from 'styled-components';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #41addd;
  

  &:hover {
    color: #6cc0e5;
    cursor:pointer;
  }
`;

StyledLink.propTypes = {

};

export default StyledLink;
