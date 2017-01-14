import { ActionTypes } from '../actions/user';
import { IUser } from '../shared/models/user.model';
import { IDialog } from '../shared/models/dialog-item.model';
import { Map } from 'immutable';


export interface State {
  me: IUser;
  dialogs: Array<IDialog>;
}

const initialState = {
  me: {
    id: '',
    name: {
      first: '',
      last: ''
    },
    avatar: {
      thumbnail: ''
    },
    online: false
  },
  dialogs: []
};

export function reducer(state: State = initialState, action: any): any {
  switch (action.type) {
  case ActionTypes.FETCH_USER:
    return Map(state).merge({ me: action.payload }).toJS();

  case ActionTypes.FETCH_DIALOGS:
    return Map(state).merge({ dialogs: action.payload }).toJS();

  default:
    return state;
  }
}
