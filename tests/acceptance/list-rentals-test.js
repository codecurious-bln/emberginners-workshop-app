import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function (assert) {
    await visit('/');
    /* TODO: re-enable in a later step */
    // assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    assert.equal(currentURL(), '/', 'shows the index page');
  });

  test('should link to information about the company.', async function (assert) {
    // await visit('/'); TODO: re-enable in a later step
    await visit('/rentals');
    await click('.menu-about');
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information.', async function (assert) {
    // await visit('/'); TODO: re-enable in a later step
    await visit('/rentals');
    await click('.menu-contact');
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list available rentals.', async function (assert) {
  });

  test('should filter the list of rentals by city.', async function (assert) {
  });

  test('should show details for a selected rental', async function (assert) {
  });
});
