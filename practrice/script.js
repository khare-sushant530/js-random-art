// var btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {

//     // var h1 = document.createElement('h1');
//     // h1.innerHTML = 'Hello world';
//     // console.log(h1);


// })

// var div = document.createElement('div');
// div.style.width = '200px';
// div.style.height = '200px';
// div.style.backgroundColor = 'blue';

//-->make h1 using js 
// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello world';
// h1.style.color = 'yellow';

//-->make button using js
// var button = document.createElement('button');
// button.innerHTML = 'Click me';

// main.appendChild(h1);
// main.appendChild(button);
// main.appendChild(div);

var btn = document.querySelector('#btn');

var main = document.querySelector('main');


btn.addEventListener('click', function () {

    var div = document.createElement('div');

    var x = Math.random() * 100
    var y = Math.random() * 100

    var rot = Math.random() * 360

    var r = Math.floor(Math.random()*256)
    var g = Math.floor(Math.random()*256)
    var b = Math.floor(Math.random()*256)

    div.style.width = '50px'
    div.style.height = '50px'
    div.style.position = 'absolute'
    div.style.left = x + '%'
    div.style.top = y + '%'
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    div.style.rotate = r+'deg'

    main.appendChild(div);
})

