import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortedBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state, 
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state, 
        sortedBy: 'amount'
      }
    case 'SORT_BY_DATE': 
      return {
        ...state,
        sortedBy: 'date'        
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      }
    case 'SET_END_DATE':
      return {
        ...state, 
        endDate: action.date
      }
    default:
      return state;
  }
}