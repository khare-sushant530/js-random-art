var btn = document.querySelector('#btn')
var btn1 = document.querySelector('#btn1')


var main = document.querySelector('main')
var section = document.querySelector('section')

btn.addEventListener('click', function () {
    var div = document.createElement('div')
    
    var x = Math.random() * 100
    var y = Math.random() * 100
    
    var cr = Math.floor(Math.random() * 256)
    var cg = Math.floor(Math.random() * 256)
    var cb = Math.floor(Math.random() * 256)
    
    var rot = Math.random() * 360
    
    var size = Math.random() * 100
    
    
    div.style.height = size + 'px'
    div.style.width = size + 'px'
    div.style.backgroundColor = `rgb(${cr},${cg},${cb})`
    div.style.position = 'absolute'
    div.style.left = x + '%'
    div.style.top = y + '%'
    div.style.rotate = rot + 'deg'
    div.style.borderRadius = '50%'
    
    main.appendChild(div)
})

var arr = [
  "U are beautiful in a way that feels calm, not loud.",
  "U carry a kind of beauty that doesn’t try to impress, it just exists.",
  "U look like someone love feels safe around.",
  "U have a smile that makes moments softer.",
  "U are the kind of beauty that stays in the mind, not just the eyes.",
  "U look peaceful, and that makes U attractive.",
  "U have a warmth that doesn’t need words.",
  "U look like love, quiet and real.",
  "U are beautiful without trying, and that’s rare.",
  "U have a presence that makes everything feel lighter."
];


btn1.addEventListener('click',function(){
    var h1 = document.createElement('h1')
    var A = Math.floor(Math.random()*arr.length)
    h1.innerHTML= arr[A]

    var scl = Math.random()*2
    var x = Math.random()*100
    var y = Math.random()*100
    h1.style.position ='absolute'
    h1.style.left = x +'%'
    h1.style.top = y +'%'
    h1.style.color = 'black';
    h1.style.fontSize = scl + 'em'
    section.appendChild(h1)
})