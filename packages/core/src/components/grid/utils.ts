export const addUnitIfNeeded = (value: any | string, propertyUnit?: string): string => {
  const valueType = typeof value
  if ((valueType === 'number' || (valueType === 'string' && !isNaN(value)))) {
    return `${value}${propertyUnit || 'px'}`
  }
  return `${value}`
}
