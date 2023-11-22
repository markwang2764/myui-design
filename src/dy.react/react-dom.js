
function render(element, container) {
    const dom = rederDom(element);
    container.appendChild(dom);
}

function renderDom(element) {
    let dom = null;
    if (!element && element !== 0) {
        return null;
    }
    if (typeof element === "string") {
        dom = document.createTextNode(element);
        return dom;
    }
}

const ReactDom = {
    render,
};
export default ReactDom;