'use strict';

import Listeners from '../listeners';

describe('Listeners View', function() {

  beforeEach(() => {
    this.listeners = new Listeners();
  });

  it('Should run a few assertions', () => {
    expect(this.listeners).toBeDefined();
  });

});
