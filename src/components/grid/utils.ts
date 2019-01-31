export const addUnitIfNeeded = (value: any | string, propertyUnit?: string): string => {
  const valueType = typeof value
  if ((valueType === 'number' || (valueType === 'string' && !isNaN(value))) && value !== 0) {
    return `${value}${propertyUnit || 'px'}`
  }
  return `${value}`
}
