/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const AppWrapper = styled.div`
  //max-width: calc(768px + 16px * 2);
  //margin: 0 auto;
  display: flex;
  min-height: 100%;
  //padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {


  const navHeader = false ?'': '<div>Header</div>';

  return (
    <AppWrapper>

      {React.Children.toArray(props.children)}
    </AppWrapper>
  );

handleReverse: (evt) => {
      alert();
    }

}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
