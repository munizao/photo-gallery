function makeImageListItem(image) {
    const html = `<li>
    <h2>${image.title}</h2>
    <img src="${image.url}">
</li>`;
    return html;
}

export default makeImageListItem;