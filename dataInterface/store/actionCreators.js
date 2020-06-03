import * as constants from './constants';


//设置基本信息字段值
export const setBasicInfoFields = (value, inputType) => ({
  type: constants.SETBASICINFOFIELDS,
  value,
  inputType
})

export const setDataFormat = (data, inputType) => ({
  type: constants.SETDATAFORMAT,
  data,
  inputType
})

export const addApiArguRow = (count) => ({
  type: constants.SETAPIARGUCOUNt,
  count
})

export const deleteApiArguRow = (key) => ({
  type: constants.DELETEAPIARGUROW,
  key
})

export const setApiConfigRow = (value, key, inputType) => ({
  type: constants.SETAPIARGUINFO,
  value, key, inputType
})

export const setDBConList = (value) => ({
  type: constants.SETDBCONLIST,
  value
})

export const setTableList = (value) => ({
  type: constants.SETTABLELIST,
  value
})

export const setTargetFieldInfo = (value, inputType) => ({
  type: constants.SETTARGETINFOS,
  value, inputType
})


//改变字段配置某一行的值
export const setFieldConfigRow = (value, key, inputType) => ({
  type: constants.SETFIELDCONFIGINFO,
  value, 
  key, 
  inputType
})
//增加一行
export const addFieldConfigRow = (count) => ({
  type: constants.SETFIELDSCONFIGCOUNT,
  count,
})
//删除一行
export const deleteFieldConfigRow = (key) => ({
  type: constants.DELETEFIELDCONFIGROW,
  key, 
})

export const setDocInfo = (value) => ({
  type: constants.SETDOCINFO,
  value
})


export const setSourceInfo = (value, inputType) => ({
  type: constants.SETSOURCEINFO,
  value, inputType
})

export const setInOutArgu = (data) => ({
  type: constants.SETINOUTARGU,
  data
})
export const setPreviewData = (data) => ({
  type: constants.SETPREVIEWDATA,
  data

})