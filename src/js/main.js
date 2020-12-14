import printMe from './printMe.js';
export default function helloworld() {
    function component() {
        var element = document.createElement('div');
        var btn = document.createElement('button');
        element.innerHTML = 'hello';

        btn.innerHTML = 'click me';
        btn.onclick = function () {
            printMe();
        }
        element.appendChild(btn);
        return element;
    }
    document.body.appendChild(component());
}