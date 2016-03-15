import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as constants from '../../lib/constants'
import * as applicationActions from '../../lib/actions/application'
import * as reducers from '../../lib/reducers'

const expect = chai.expect;
chai.use(sinonChai);

describe('application actions', () => {

  it('test login', () => {
    const clock = sinon.useFakeTimers();

    const store = createStore(combineReducers(reducers), {}, applyMiddleware(thunk))
    const dispatch = sinon.spy(store, 'dispatch')
    const fn = applicationActions.login()
    fn(dispatch, store.getState)

    clock.tick(350)

    expect(dispatch).to.be.spy
    expect(dispatch).to.have.been.called.once
    expect(dispatch).to.have.been.calledWith({ payload: { token: sinon.match.any }, type: 'LOGGED_IN' })
  });

  it('test switchLocale', () => {
    const LOCALE = 'myLocale'
    const expectedAction = {
      type: constants.LOCALE_SWITCHED,
      payload: LOCALE
    }
    expect(applicationActions.switchLocale(LOCALE)).to.deep.equal(expectedAction)
  });

  it('test hideError', () => {
    const expectedAction = {
      type: constants.HIDE_ERROR
    }
    expect(applicationActions.hideError()).to.deep.equal(expectedAction)
  });

});
