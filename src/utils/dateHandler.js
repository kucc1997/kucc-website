import moment from 'moment'

//for weekly event
export const thisWeekSunday = moment().startOf('week').format('YYYY-MM-DD')
export const thisWeekSaturday = moment().endOf('week').format('YYYY-MM-DD')

//for daily event
export const today = moment().format('YYYY-MM-DD')

//for yearly event
export const startOfYear = moment().startOf('year').format('YYYY-MM-DD hh:mm')
export const endOfYear = moment().endOf('year').format('YYYY-MM-DD hh:mm')

//for monthly event
export const startOfMonth = moment().startOf('month').format('YYYY-MM-DD hh:mm')
export const endOfMonth = moment().endOf('month').format('YYYY-MM-DD hh:mm')
