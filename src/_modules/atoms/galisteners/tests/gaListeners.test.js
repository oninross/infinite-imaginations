'use strict';

import GaListeners from '../galisteners';

describe('GaListeners View', function() {

  beforeEach(() => {
    this.gaListeners = new GaListeners();
  });

  it('Should run a few assertions', () => {
    expect(this.gaListeners).toBeDefined();
  });

});
