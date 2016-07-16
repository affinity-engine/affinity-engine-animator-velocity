import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:affinity-engine/animator-velocity', 'Unit | Service | affinity engine/animator velocity', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

const { run: { later } } = Ember;

test('animate executes Velocity.animate on the provided element', function(assert) {
  assert.expect(1);

  const done = assert.async();
  const service = this.subject();
  const $element = Ember.$('div').first();

  service.animate($element, { height: '1000px' }, { duration: 0 });

  later(() => {
    assert.equal($element.css('height'), '1000px', 'element was animated');

    done();
  }, 300);
});

test('animate returns a promise', function(assert) {
  assert.expect(3);

  const done = assert.async();
  const service = this.subject();
  const $element = Ember.$('div').first();
  let resolved = false;

  const promise = service.animate($element, { height: '1000px' }, { duration: 200 });

  promise.then(() => resolved = true);

  assert.equal(promise.constructor.name, 'Promise', 'it is a promise');
  assert.ok(!resolved, 'not yet resolved');

  later(() => {
    assert.ok(resolved, 'resolved on time');

    done();
  }, 300);
});
