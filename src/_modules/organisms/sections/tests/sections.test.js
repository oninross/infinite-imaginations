'use strict';

import Sections from '../sections';

describe('Sections View', function() {

  beforeEach(() => {
    this.sections = new Sections();
  });

  it('Should run a few assertions', () => {
    expect(this.sections).toBeDefined();
  });

});
