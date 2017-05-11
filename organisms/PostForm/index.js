/**
*
* PostForm
*
*/
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`;
const FormButton = styled(Button)`
  &.button {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    padding: 11px 37px;
    text-align: center;
    color:red;
  }
  &.button:hover {
    cursor: pointer;
  }
  &.button--primary {
  	color: #FFFFFF;
  	background-color: #E60000;
  }

  &.button--primary:hover {
  	background-color: #990000;
  }
`;

const PostForm = ({ handleSubmit, submitting }) => {
  return (
    <Form >
      <Heading level={2}>Create a post</Heading>
      <Field name="title" label="Title" component={ReduxField} />
      <Field name="body" label="Body" type="textarea" className="true" component={ReduxField} />
      <FormButton type="submit" className="button button--primary button--disabled" disabled={submitting}>Create</FormButton>
    </Form>
  )
}

PostForm.propTypes = {
  submitting: PropTypes.bool,
}

export default PostForm
