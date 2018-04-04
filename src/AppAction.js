export const createAction = (URL, actionName, actionType, method) => {
  return (
    `import axios from 'axios'
      // please check path for your actionType
      import {
        ${actionType}
      } from '../../constants/ActionTypes'

      export const ${actionName} = (${(method==='POST'|| method==='PUT') && 'data'}) => async (dispatch, getState, axios) => {
      dispatch({ type: ${actionType}.REQUEST })
      const URL = ${URL}
      return axios({
          method: ${method},
          url${(method==='POST'|| method==='PUT') && ','}
          ${(method==='POST'|| method==='PUT') && 'data'}
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
      }
    )
    }
    `
  )
}