import axios from 'axios'
import { getComponentDataValue } from './values'

const API_ROOT = '/myAlfred/api/studio'
export const ACTIONS = {
  login: ({ props, backend }) => {
    const email = getComponentDataValue(props.email)
    const password = getComponentDataValue(props.password)
    let url = `${API_ROOT}/login`
    return axios.post(url, { email, password }).catch(err => {
      throw new Error(err.response?.data || err)
    })
  },
  openPage: ({ value, props, backend }) => {
    let url = `/${props.page}`
    if (value && value._id) {
      url = `${url}?id=${value._id}`
    }
    // new page
    if (props.open && !(props.open === 'false')) {
      return Promise.resolve(window.open(url, 'blank'))
    } else {
      return Promise.resolve((window.location = url))
    }
  },
  create: ({ value, props, backend }) => {
    let url = `${backend}${API_ROOT}/${props.model}`
    return axios.post(url).then(res => res.data)
  },
  levelUp: ({ value, props, backend, context }) => {
    let url = `${backend}${API_ROOT}/action`
    return axios.post(url, {
      action: 'levelUp',
      parent: context,
      child: value._id,
    })
  },
  levelDown: ({ value, props, backend, context }) => {
    let url = `${backend}${API_ROOT}/action`
    return axios.post(url, {
      action: 'levelDown',
      parent: context,
      child: value._id,
    })
  },
  next: ({ value, props, backend }) => {
    let url = `${backend}${API_ROOT}/action`
    return axios
      .post(url, { action: 'next', id: value._id })
      .then(res => res.data)
  },
  previous: ({ value, props, backend }) => {
    let url = `${backend}${API_ROOT}/action`
    return axios
      .post(url, { action: 'previous', id: value._id })
      .then(res => res.data)
  },
  publish: ({ value, props, backend }) => {
    let url = `${backend}${API_ROOT}/action`
    return axios.post(url, { action: 'publish', id: value._id })
  },
  delete: ({ value, props, backend, context }) => {
    let url = `${backend}${API_ROOT}/action`
    return axios.post(url, {
      action: 'delete',
      parent: context,
      child: value._id,
    })
  },
  gotoSession: ({ value, props, backend }) => {
    let url = `${backend}${API_ROOT}/action`
    return axios
      .post(url, { action: 'session', id: value._id })
      .then(res => res.data)
  },
  addChild: ({ value, props, backend, context }) => {
    const childId = getComponentDataValue(props.child)
    let url = `${backend}${API_ROOT}/action`
    const body = { action: 'addChild', parent: context, child: childId }
    return axios.post(url, body)
  },
  putValue: ({ value, props, backend, context }) => {
    let url = `${backend}${API_ROOT}/action`
    const body = {
      action: 'put',
      model: props.dataModel,
      parent: context,
      attribute: props.attribute,
      value: value,
    }
    return axios.post(url, body)
  },
}
