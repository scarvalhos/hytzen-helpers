import React from 'react'

type ReducerState = {
  loading: boolean
  value: unknown
  error: unknown
}

type ReducerAction = Partial<ReducerState>

const initialState = {
  loading: true,
  value: null,
  error: null,
}

const reducer: React.Reducer<ReducerState, ReducerAction> = (
  state,
  action
) => ({ ...state, ...action })

export const useFetch = (url: string, options: RequestInit = {}) => {
  const [{ loading, value, error }, dispatch] = React.useReducer(
    reducer,
    initialState
  )

  React.useEffect(() => {
    fetch(url, options)
      .then(async (response) => dispatch({ value: await response.json() }))
      .catch((error) => dispatch({ error }))
      .finally(() => dispatch({ loading: false }))
  }, [url])

  return { loading, value, error }
}
