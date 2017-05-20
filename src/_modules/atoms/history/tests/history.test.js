'use strict';

import History from '../history';

describe('History View', function() {

  beforeEach(() => {
    this.history = new History();
  });

  it('Should run a few assertions', () => {
    expect(this.history).toBeDefined();
  });

});
