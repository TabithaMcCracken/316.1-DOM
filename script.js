console.dir(document.anchors);
const anchors = document.anchors;
for (let anchor of anchors){
    console.log(anchor);
}

const body = document.body;
console.log('parentNode', body.parentNode);
console.log('parentNode', body.childNodes);
console.log('parentNode', body.lastChild);
console.log('parentNode', body.firstChild);
console.log('parentNode', body.previousSibling);
console.log('parentNode', body.nextSibling);

const p = document.querySelector("p");
console.log("parent of P:", p.parentNode);