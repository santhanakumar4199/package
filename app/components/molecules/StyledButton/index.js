/**
*
* StyledButton
*
*Developed by SM
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const fontSize = ({ height }) => `${height / 40}rem`

const backgroundColor = ({ transparent, disabled }) =>
  transparent ? 'transparent' : palette(disabled ? 2 : 1)

const foregroundColor = ({ transparent, disabled }) =>
  transparent ? palette(disabled ? 2 : 1) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette(0)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0)

const styles = css`
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  padding: 11px 37px;
  text-align: center;



  &:hover {
    cursor: pointer;
  }

  &:reset {
    border: none;
  padding: 0;
  background: none;
  }
`
const pstyles = css`
 color: #FFFFFF;
  background-color: #E60000;


  &:hover {
   background-color: #990000;

  }

`
const pstylesdark = css`
 background-color: #BD0000;

 
  &:hover {
   background-color: #990000;

  }

`
const sstyles = css`
 color: #ffffff;
  background-color: #666666;

&:hover {
   background-color: #333333;
  
}

`
const sstylesdark = css`
background-color: #AFAFAF;
  color: #333333;


   &:hover {
  background-color: #CCCCCC;
  color:white;

  }

`
const tstyles = css`

    background-color: #FFFFFF;
  border: 1px solid #ddd;
  color: #666666;




   &:hover {
  background-color: #f4f4f4;
  border-color: #333333;
  color: #333333;
  } 

`
const tstylesdark = css`

      background-color: transparent;
    border: 1px solid white;
    color: white;
        



&:hover {
  background-color: #F4F4F4;
  color: black;
}

&:focus{
  color: #FFFFFF;
  background-color: #F4F4F4;
}

`
const disabledbutton= css`
background-color: #CCCCCC;
  border-color: #CCCCCC;
  color: #FFFFFF;
  cursor: default;
  &:hover {
  background-color: #CCCCCC;
  border-color: #CCCCCC;
  color: #FFFFFF;
  cursor: default;
}

&:focus{
  background-color: #CCCCCC;
  border-color: #CCCCCC;
  color: #FFFFFF;
  cursor: default;
}

`
const disabledbuttondark = css`
background-color: #666666;
  border-color: #666666;
  color: #333333;
  cursor: default;

`
const buttonfullwidth = css`
display: block;
  width: 100%;
  text-align: center;
   color: #FFFFFF;
  background-color: #E60000;


  &:hover {
   background-color: #990000;

  }

`

const buttonstyle = css`
    background-color: #CCC;
    border-color: #CCC;
    color: #FFF;
    cursor: default;
    padding: 11px 37px;
    width:8em;
    height: 3.5em;
    border-radius: 0.125em;

`

const ButtonPrimary = styled.button`${pstyles}`
const ButtonPrimaryDark = styled.button`${pstylesdark}`
const ButtonSecondary = styled.button`${sstyles}`
const ButtonSecondaryDark = styled.button`${sstylesdark}`
const ButtonTertiary = styled.button`${tstyles}`
const ButtonTertiaryDark = styled.button`${tstylesdark}`
const ButtonDisabled = styled.button`${disabledbutton}`
const ButtonDisabledDark = styled.button`${disabledbuttondark}`
const ButtonfullWidth = styled.button`${buttonfullwidth}`
const StyledButtonOne = styled.button`${buttonstyle}`

 /* <Link {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`*/
const BasicButton = styled.button`${styles}`
const StyledButton = ({ ...props }) => {
  if (props.colID === 'primary') {
    return <ButtonPrimary {...props} />
  } 
  else if (props.colID === 'primarydark') {
    return <ButtonPrimaryDark {...props} />
  }
    else if (props.colID === 'secondarydark') {
    return <ButtonSecondaryDark {...props} />
  }
    else if (props.colID === 'secondary') {
    return <ButtonSecondary {...props} />
  } else if (props.colID === 'tertiarydark') {
    return <ButtonTertiaryDark {...props} />
  }
    else if (props.colID === 'tertiary') {
    return <ButtonTertiary {...props} />
  }
  else if (props.colID === 'disabled') {
    return <ButtonDisabled {...props} />
  }
  else if (props.colID === 'disableddark') {
    return <ButtonDisabledDark {...props} />
  }
  else if (props.colID === 'full') {
    return <ButtonfullWidth {...props} />
  }
  else if (props.buttonType === 'buttonone') {
  
    return <StyledButtonOne {...props} />

  }
  else if (props.href) {
    return <Anchor {...props} />
  }
  if (props.to) {
    return <StyledLink {...props} />
  }
  return <BasicButton {...props} />
}


/*const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } else if (props.href) {
    return <Anchor {...props} />
  }
  else if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}*/

StyledButton.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  colID: PropTypes.string,

}

StyledButton.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
}

export default StyledButton
