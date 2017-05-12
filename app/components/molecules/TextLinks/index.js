/**
*
* TextLinks
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/*class TextLinks extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}*/






const SimpleLink = css`
color: inherit;
background-color: transparent;
margin-left: 10px;
   
    text-decoration: none;
        display: inline-block;

&:hover {
 color: #E60000;
 text-decoration: none;
}

&:focus{
  color: #E60000;
}

`
const onlyLink = css`
color: inherit;
background-color: transparent;
margin-left: 10px;
   
    text-decoration: underline;
        display: inline-block

`
const Linkbody = css`
color: inherit;
background-color: transparent;
display: inline-block;
	text-decoration: underline;

&:hover {
 text-decoration: none;
 color: #E60000;
}

&:focus{
  text-decoration: none;
  color: #E60000;
}

`
const darkback = css`
color: #FFFFFF;

&:hover {
 color: #CCCCCC;
	text-decoration: none;
}

&:focus{
  color: #CCCCCC;
	text-decoration: none;
	outline-color: #00B0CA;
}

`
const bodydark = css`
 color: #CCCCCC;
 text-decoration: underline;

&:hover {
 color: #CCCCCC;
	text-decoration: none;
}

&:focus{
  color: #CCCCCC;
	text-decoration: none;
	outline-color: #00B0CA;
}
}

`

const Standalone = styled.a`${SimpleLink}`
const BodyLinks = styled.a`${Linkbody}`
const BackgroundDark = styled.a`${darkback}`
const LineBodyDark = styled.a`${bodydark}`
const SimpleOne = styled.a`${onlyLink}`

const TextLinks = ({ ...props }) => {
  if (props.linkType === 'linkbody') {
    return <BodyLinks {...props} />
  }
   if (props.linkType === 'darkback') {
    return <BackgroundDark {...props} />
  }
  if (props.linkType === 'linebody') {
    return <LineBodyDark {...props} />
  }
  if (props.linkType === 'only') {
    return <SimpleOne {...props} />
  }
  return <Standalone {...props} />
}

TextLinks.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  linkType: PropTypes.string,

}

export default TextLinks
