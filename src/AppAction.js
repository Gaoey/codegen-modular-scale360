
export const createAction = (URL, actionName, actionType, method) => {
  const urlString = `
  // ${URL}
  // looking at constant/endpoint.js
  // looking at utils/buildEndpoint.js
  // looking at const/xActivity.js
  `
  return (`
      import axios from 'axios'
      // please check path for your actionType
      import {
        ${actionType}
      } from '../../constants/ActionTypes'

      export const ${actionName} = (${(method === 'POST' || method === 'PUT') ? 'data' : ''}) => async (dispatch, getState, axios) => {
      dispatch({ type: ${actionType}.REQUEST })
      const URL = ${urlString}
      return axios({
          method: ${method},
          url${(method === 'POST' || method === 'PUT') && ','}
          ${(method === 'POST' || method === 'PUT') && 'data'}
        })
        .then((response) => dispatch({
          type: ${actionType}.SUCCESS,
          payload: response.data
        }),
        error => {
        dispatch({
          type: ${actionType}.FAILURE,
          payload: error.response.data
        })
      })
    }`
  )
}

export const createActionType = (actionType) => {
  return `export const ${actionType} = buildActionTypes('${actionType}')`
}

export const createReducer = (actionType, actionName) => {
  return (
    `import { combineReducers } from 'redux'
    import {
      ${actionType}
    } from '../../constants/ActionTypes
    
    const initialState = {
      loading: false,
      data: {},
      error: {}
    }

    export const ${actionName}Reducer = (state = initialState, action) => {
      switch (action.type) {
        case ${actionType}.REQUEST:
          return {
            ...state,
            loading: true
          }
        case ${actionType}.SUCCESS:
          return {
            ...state,
            loading: false,
            data: action.payload
          }
        case ${actionType}.FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload
          }
        default:
          return state
      }
      
      export default combineReducers({
        ${actionName}Reducer
      })
      `
  )
}

export const createContainer = (containerName, actionName) => {
  return (
    `
  import React, { Component } from 'react'
  import {  View, Text, } from 'react-native'
  import PropTypes from 'prop-types'
  import { connect } from 'react-redux'
  import { ${actionName} } from './${containerName}Action'
  import project from '../../config/project'
  
  class ${containerName} extends Component {
    static propTypes = {
      ${actionName}: PropTypes.func
    }
    static defaultProps = {
      ${actionName}: () => {}
    }

    constructor(props) {
      super(props)
    }
    
    render() {
      return (
        <View>
          <Text> ${containerName} </Text>
        </View>
      );
    }
  }

  const mapStateToProps = state => ({
    
  })
  
  const mapDispatchToProps = {
    ${actionName}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(${containerName})`
  )
}

export const createIndex = (containerName) => {
  return (
    `
    export { default as ${containerName}Container } from './${containerName}Container'
    export { default as ${containerName}Reducer } from './${containerName}Reducer'
    `
  )
}

export const addInReducer = (containerName) =>{
  return (
    `
    // in ./feature/reducer.js
    import { ${containerName}Reducer as ${containerName} } from './...'
    // in ./feature/index.js
    export { ${containerName}Container } from './...'
    `
  )
}
