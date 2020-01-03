
export const isUndefined = (val:any) => typeof val === 'undefined'

export const isNull = (val:any) => val === null

export const isFunction = (val:any) => typeof val === 'function'

export const isString = (val:any) => typeof val === 'string'

export const isExist = (val:any) => !(isUndefined(val) || isNull(val))

export const isObjectEmpty = (obj:any) => {
  let sum = 0 ;
  for (let x in obj) {
    sum ++ ;
  }
  return sum === 0;
}
