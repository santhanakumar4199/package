/**
*
* Page
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 160px 0;
  border: 1px dashed #e60000;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
`
const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
  max-width: 920px;
`
const Page= ({children, ...props }) => {
  return (
    <Wrapper {...props}>
      <content>{children}</content>
    </Wrapper>
  )
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Page
