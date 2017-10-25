import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
          text: '',
          startDate: undefined,
          endDate: undefined,
          sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});


test('Should set text filter', () => {
    const currentState = {
          text: '',
          startDate: undefined,
          endDate: undefined,
          sortBy: ''
    };

    const text = 'rent';              
    const action = { type: 'SET_TEXT_FILTER',
                     text};
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe(text);
});


test('Should set start date  filter', () => {
    const startDate = moment(5000);                  
    const action = { type: 'SET_START_DATE',
                     startDate
                   };

    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(5000));
});

test('Should set end date  filter', () => {

    const endDate = moment(99999999);                      
    const action = { type: 'SET_END_DATE',
                     endDate
                   };
    const state = filtersReducer(undefined, action);
    console.log(state);
    expect(state.endDate).toEqual(moment(99999999));
});