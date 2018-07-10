import { expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments_reducer';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles actions with unknown type', () => {
//    expect(commentReducer()).to.be.instanceof(Array);

  expect(commentReducer([], {})).to.eql([]); // because reducer defaults to [] w/o action
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = {type: SAVE_COMMENT, payload: 'Test comment'};
    expect(commentReducer([], action)).to.eql(['Test comment']);
  });

});
