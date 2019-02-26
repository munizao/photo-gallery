import images from '../data/images.js';
import makeTemplateForList from './make-template-for-list.js';

const imageList = document.getElementById('image-list');
images.forEach(function(image) {
    const dom = makeTemplateForList(image);
    imageList.appendChild(dom); 
});