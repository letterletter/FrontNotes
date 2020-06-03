import _ from 'lodash';
import * as constants from './constants';

const defaultState = {
  basicInfo: {
    configName: '',
    description: ''
  },
  dataFormat: {
    type: '',
    data: {}
  },
  apiArgu: [],
  DBConList: [],
  tableList: [],
  targetDBInfos: {
    rowLen: '',
    rollback: false,
    beforeWrite: '',
    deleteClause: ''
  },
  sourceDBInfos: {
    database: '',
    table: '',
    clause: ''
  },
  inOutArgu: [],
  fieldConfigInfo: [
    
  ],
  docInfo: {

  },
  
  previewData: {},

}
//{name: '', path: '', fieldType: '', delSpace: ''}
export default(state=defaultState, action) => {

  if(action.type === constants.SETBASICINFOFIELDS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.basicInfo[`${action.inputType}`] = action.value;
    return newState
  }
  if(action.type === constants.SETDATAFORMAT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.dataFormat[`${action.inputType}`] = action.value;
    return newState
  }
  if(action.type === constants.SETAPIARGUCOUNt) {
    let obj ={key: action.count,  arguName: '', arguValue: '', desc: ''}
    let apiArguCpy = _.get(state, 'apiArgu')
    return _.extend({}, state, {apiArgu: apiArguCpy.push(obj)})
  }
  if(action.type === constants.DELETEAPIARGUROW) {
    let apiArguCpy = _.get(state, 'apiArgu')
    return _.extend({}, state,
       {apiArgu: _.remove(apiArguCpy, item => {
        return item.key === action.key
       }
    )})
  }
  if(action.type === constants.SETAPIARGUINFO) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.apiArgu[action.key][`${action.inputType}`] = action.value
    return newState
  }
  if(action.type === constants.SETDBCONLIST) {
    return _.extend({}, state, {DBConList: action.value})
  }
  if(action.type === constants.SETTABLELIST) {
    return _.extend({}, state, {tableList: action.value})
  }
  if(action.type === constants.SETTARGETINFOS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.targetDBInfos[`${action.inputType}`] = action.value
  }
  if(action.type === constants.SETPREVIEWDATA) {
    return _.extend({}, state, {previewData: action.data})
  }
  if(action.type === constants.SETFIELDCONFIGINFO) {
    const newState = JSON.parse(JSON.stringify(state));
    // value, key, inputType
    console.log('in reducer', action.key, action.inputType,action.value)
    newState.fieldConfigInfo[action.key][`${action.inputType}`] = action.value;
    return newState;
  }
  if(action.type === constants.SETFIELDSCONFIGCOUNT) {
    const newState = JSON.parse(JSON.stringify(state));
      let obj = {
        id: -1-action.count,
        fieldName: '', path: '', type: '', trimType: '', key: action.count
      }
    newState.fieldConfigInfo.push(obj);
    // console.log(newState)
    return newState;
  }
  if(action.type === constants.DELETEFIELDCONFIGROW) {
    const newState = JSON.parse(JSON.stringify(state));
    let fieldConfigInfoNew = newState.fieldConfigInfo.filter(item => item.key !== action.key)
    newState.fieldConfigInfo = fieldConfigInfoNew
    return newState;
    // const FieldConfigCpy = _.get( state, 'fieldConfigInfo' )
    // return _.extend({}, state, {fieldConfigInfo: FieldConfigCpy.splice(action.key, action.key+1)})
  }
  if(action.type === constants.SETDOCINFO) {
    return _.extend({}, state, {docInfo: action.value})
  }
  if(action.type === constants.SETSOURCEINFO) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.sourceDBInfos[`${action.inputType}`] = action.value
    return newState
  }
  if(action.type === constants.SETINOUTARGU) {
    return _.extend({}, state, {inOutArgu: action.data})
  }
  return state
}