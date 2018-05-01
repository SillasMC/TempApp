import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
	// Action is already the data result from the Promise
	// The ReduxPromise Middleware took care of the Promise
	switch (action.type) {
		case FETCH_WEATHER:
			return [ action.payload.data, ...state ];
	}
	return state;
}