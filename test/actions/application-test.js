import { expect } from 'chai';
import * as constants from '../../lib/constants'
import * as applicationActions from '../../lib/actions/application'

describe('application actions', () => {

  it('test login', () => {
    throw Error('not implemented yet');
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
