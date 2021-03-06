


export const isUndefined = val => typeof val === 'undefined'

export const isNull = val => val === null

export const isFunction = val => typeof val === 'function'

export const isString = val => typeof val === 'string'

export const isExist = val => !(isUndefined(val) || isNull(val))

export const isObjectEmpty = (obj) => {
  let sum = 0 ;
  for (let x in obj) {
    sum ++ ;
  }
  return sum === 0;
}
