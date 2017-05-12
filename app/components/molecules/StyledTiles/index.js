/**
*
* StyledTiles
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

// import styled from 'styled-components';

const baseTile = css`
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    display: block;
    background-color:red;

`
const leftTile = css`
    background-position: center center;
    background-size: cover;
    float: left;
    position: relative;
    z-index: 1;
    min-height: 1px;
    box-sizing: border-box;
    display: block;
    width: 25%;
    padding-bottom: 33.3333333333%;

`
const leftcontent = css`
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
const rightTile = css`
    background-position: center center;
    background-position: center center;
    background-size: cover;
    float: left;
    position: relative;
    z-index: 1;
    min-height: 1px;

    box-sizing: border-box;
    display: block;
    width: 75%;
    padding-bottom: 33.3333333333%;

`
const rightcontent = css`
    display: block;
    bottom: 0;
    left: 0;
    overflow: hidden;
    padding: 25px 30px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #afafaf;

`
const Simpletiles = styled.div`${baseTile}`
const LeftTile = styled.div`${leftTile}`
const LeftTileContent = styled.div`${leftcontent}`
const RightTile = styled.div`${rightTile}`
const RightTileContent = styled.div`${rightcontent}`



const StyledTiles = ({ ...props }) => {
	if (props.tileType === 'left') {
    return <LeftTile {...props} />
  }
  if (props.tileType === 'right') {
    return <RightTile {...props} />
  }
  if (props.tileType === 'left') {
    return <LeftTile {...props} />
  }
	 if (props.tileType === 'leftcontent') {
    return <LeftTileContent {...props} />
  }
   if (props.tileType === 'rightcontent') {
    return <RightTileContent {...props} />
  }
  return <Simpletiles {...props} />
}



StyledTiles.propTypes = {
tileType: PropTypes.string,
palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

export default StyledTiles
