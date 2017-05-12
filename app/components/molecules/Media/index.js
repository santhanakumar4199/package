/**
*
* Media
*
*/

import React from 'react';
import styled, { css } from 'styled-components'
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Block} from 'components';

const Media = ({myDashProp,...props}) => {
  const MediaBlock = styled(Block)`
   border: 1px dashed #e60000;
   margin: 0 auto;
   max-width: 400px;
   padding: 10px;
   &.media {
  	display: table;
  	width: 100%;
  }
  `;
  const MediaImg = styled(Block)`
    padding-right: 15px;
    &.media__image{
    	display: table-cell;
    	vertical-align: top;
    }
  `;

  const MediaBody = styled(Block)`
      &.media__body {
        display: table-cell;
        vertical-align: top;
      }
  `;
  return (
    <MediaBlock class="media">
        <MediaImg class="media__image">
            <img src="/images/products-iphone-6s.png" alt="iPhone 6S"/>
        </MediaImg>
        <MediaBody class="media__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis feugiat ex sit amet suscipit. Suspendisse efficitur libero vitae ipsum tincidunt, sed tristique lacus commodo. Fusce sed risus mollis, lobortis purus nec, eleifend nulla. Integer pharetra lorem a enim interdum egestas.</MediaBody>
    </MediaBlock>
  )
}

Media.propTypes = {

};

export default Media;
