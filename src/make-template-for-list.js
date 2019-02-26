import makeImageListItem from '../src/make-image-list-item.js';

function makeTemplateForList(image) {
    const html = makeImageListItem(image);
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
} 

export default makeTemplateForList;