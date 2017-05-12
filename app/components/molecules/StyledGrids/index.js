/**
*
* StyledGrids
*
* Developed by SM
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import styled from 'styled-components';



const baseGrid = css`
    display: block;
    letter-spacing: -.215em;
    margin: 0;
    padding-left: 0;
    list-style: none;
    box-sizing: border-box;
    background-color :#ccc;
`
const baseGutter = css`
    display: block;
    letter-spacing: -.215em;
    margin: 0;
    padding-left: 0;
    list-style: none;
    box-sizing: border-box;
    background-color :#ccc;
    margin: 0 -10px;
`
const leftGrid = css`
    letter-spacing: normal;
    margin: 0;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    background-color: #ccc;
    padding: 50px;
    width: 33.3333333333%;
    float:left;
`

const leftGutter = css`
    letter-spacing: normal;
    margin: 0;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    background-color: #ccc;
    padding: 50px;
    width: 33.3333333333%;
    float:left;
    padding: 0 10px;
`

const rightGrid = css`
    letter-spacing: normal;
    margin: 0;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    background-color: #afafaf;
    padding: 50px;
    width: 66.6666666667%;
    float:right;
`
const rightGutter = css`
    letter-spacing: normal;
    margin: 0;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    background-color: #afafaf;
    padding: 50px;
    width: 66.6666666667%;
    float:right;
    padding: 0 10px;
`

const leftContent = css`
    display: block;
    bottom: 0;
    left: 0;
    overflow: hidden;
    padding: 25px 30px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #ccc;
    width: 33.3333333333%;
    box-sizing: border-box;

`
const rightContent = css`
    display: block;
    bottom: 0;
    left: 0;
    overflow: hidden;
    padding: 25px 30px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #ccc;

`
const writing = css`


`




const SimpleGrid = styled.div`${baseGrid}`
const SimpleGutter = styled.div`${baseGutter}`
const FirstGrid = styled.div`${leftGrid}`
const SecondGrid = styled.div`${rightGrid}`
const FirstGutter = styled.div`${leftGutter}`
const SecondGutter = styled.div`${rightGutter}`
const LeftContentGrid = styled.div`${leftContent}`
const RightContentGrid = styled.div`${rightContent}`


const StyledGrids = ({ ...props }) => {
	if (props.gridType === 'gutter') {
    return <SimpleGutter {...props} />
  }
  if (props.gridType === 'left') {
    return <FirstGrid {...props} />
  }
   if (props.gridType === 'right') {
    return <SecondGrid {...props} />
  }
   if (props.gridType === 'leftcontent') {
    return <LeftContentGrid {...props} />
  }if (props.gridType === 'rightcontent') {
    return <LeftContentGrid {...props} />
  }
  if (props.gridType === 'leftgutter') {
    return <FirstGutter {...props} />
  }if (props.gridType === 'rightgutter') {
    return <SecondGutter {...props} />
  }
  return <SimpleGrid {...props} />
}





StyledGrids.propTypes = {
gridType: PropTypes.string,
gridText: PropTypes.string,
palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

export default StyledGrids
