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
  border: 1px solid #e60000;
  padding-bottom: 10.075em;
  padding-left: 0.075em;
  padding-right: 0.075em;
  padding-top: 0em;
  background-color: #ebebeb;
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
