export const initValue = {
  name: '',
  email: '',
  phone: ''
}

export const ACTIONS = {
  NAME: 'NAME_ACTION',
  PHONE: 'PHONE_ACTION',
  EMAIL: 'EMAIL_ACTION'
}

const reducerAction = {
  [ACTIONS.NAME]: (state, payload) => ({
    ...state,
    name: payload
  }),
  [ACTIONS.PHONE]: (state, payload) => ({
    ...state,
    phone: payload,
  }),
  [ACTIONS.EMAIL]: (state, payload) => ({
    ...state,
    email: payload,
  })
}

export const reducer = (state = initValue, action) => reducerAction[action.type](state, action.payload)
