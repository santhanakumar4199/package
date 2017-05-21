/**
*
* StyledBubble
*
*/


// import styled from 'styled-components';
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'


const Style1 = css`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    overflow: hidden;
    padding: 30px;
    position: relative;
    margin-bottom:20px;
`
const Style2 = css`
    background: #3D3D3D;
    border-radius: 35px;
    display: inline-block;
    font-size: 20px;
    padding: 30px;
    position: relative;
    text-align: left;
    width: 100%;
`

const Style3 = css`
    background-color: #FFF;
    color: #333;
`

const BubbleStyleone = styled.div`${Style1}`
const BubbleStyletwo = styled.div`${Style2}`
const BubbleStylethree = styled.div`${Style3}`


const StyledBubble = ({ ...props }) => {
  if (props.type === 'styleone') {
    return <BubbleStyleone {...props} />
  } else if (props.type === 'styletwo') {
    return <BubbleStyletwo {...props} />
  }else if (props.type === 'stylethree') {
    return <BubbleStylethree {...props} />
  }
  return <BubbleStyleone {...props} />
}


StyledBubble.propTypes = {
  type: PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
};

export default StyledBubble;
