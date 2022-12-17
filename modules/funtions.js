const validate = (string) => {
    let length = string.length || 0
    if (typeof string !== 'string' || !length || length>10) throw new Error('Invalid input')
}

const stringLength = string => {
  validate(string)

  return string.length
}

const reverseString = (string) => {
  validate(string)
  
  return string.split('')
        .reverse()
        .join('')
}

const capitalizeString = string => {
  return string.toUpperCase()
}

export  {stringLength, reverseString, capitalizeString}