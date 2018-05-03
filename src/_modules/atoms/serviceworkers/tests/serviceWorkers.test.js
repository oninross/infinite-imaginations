'use strict';

import ServiceWorkers from '../serviceworkers';

describe('ServiceWorkers View', function() {

  beforeEach(() => {
    this.serviceWorkers = new ServiceWorkers();
  });

  it('Should run a few assertions', () => {
    expect(this.serviceWorkers).toBeDefined();
  });

});
