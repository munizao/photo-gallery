import images from '../data/images.js';
import './html-equal.js';
import makeImageListItem from '../src/make-image-list-item.js';
import makeTemplateForList from '../src/make-template-for-list.js';

const test = QUnit.test;

QUnit.module('tests for template');



test('test that string interpolation produces expected html', function(assert) {
    const image = images[0];
    const result = makeImageListItem(image);
    const expected = `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>`;
    assert.equal(result, expected);
});

test('test that template content works.', function(assert) {
    const image = images[0];
    const result = makeTemplateForList(image);
    const expected = `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>`;
    assert.htmlEqual(result, expected);
});