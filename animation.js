let body = document.querySelector('body')
let pheader22 = document.querySelector('.pheader2-2')
let sc1button1 = document.getElementById('sc1button1')
let sc1button2 = document.getElementById('sc1button2')
let sc1button3 = document.getElementById('sc1button3')
let sc1img1 = document.querySelector('.sc1img1')
let sc1img2 = document.querySelector('.sc1img2')
let sc1img3 = document.querySelector('.sc1img3')
let p1sc1 = document.getElementById('p1sc1')
let p2sc1 = document.getElementById('p2sc1')
let p3sc1 = document.getElementById('p3sc1')

let all = document.getElementById('all')
let commerce = document.getElementById('commerce')
let portfl = document.getElementById('portfl')
let Landing = document.getElementById('Landing')
let Prototyping = document.getElementById('Prototyping')

let mask1 = document.getElementById('mask1')
let mask2 = document.getElementById('mask2')
let mask3 = document.getElementById('mask3')
let mask4 = document.getElementById('mask4')
let mask5 = document.getElementById('mask5')
let mask6 = document.getElementById('mask6')


pheader22.onclick = function() {
        
}

sc1button1.onclick = function() {
    sc1button1.classList.add('set')
    sc1button2.classList.remove('set')
    sc1button3.classList.remove('set')

    sc1img1.classList.remove('dpnone')
    sc1img2.classList.add('dpnone')
    sc1img3.classList.add('dpnone')

    p1sc1.classList.remove('dpnone')
    p2sc1.classList.add('dpnone')
    p3sc1.classList.add('dpnone')
}
sc1button2.onclick = function() {
    sc1button1.classList.remove('set')
    sc1button2.classList.add('set')
    sc1button3.classList.remove('set')

    sc1img1.classList.add('dpnone')
    sc1img2.classList.remove('dpnone')
    sc1img3.classList.add('dpnone')

    p1sc1.classList.add('dpnone')
    p2sc1.classList.remove('dpnone')
    p3sc1.classList.add('dpnone')
    
}
sc1button3.onclick = function() {
    sc1button1.classList.remove('set')
    sc1button2.classList.remove('set')
    sc1button3.classList.add('set')
    
    sc1img1.classList.add('dpnone')
    sc1img2.classList.add('dpnone')
    sc1img3.classList.remove('dpnone')

    p1sc1.classList.add('dpnone')
    p2sc1.classList.add('dpnone')
    p3sc1.classList.remove('dpnone')
}

all.onclick = function() {
    all.classList.add('select')
    commerce.classList.remove('select')
    portfl.classList.remove('select')
    Landing.classList.remove('select')
    Prototyping.classList.remove('select')

    mask1.classList.remove('dpnone')
    mask2.classList.remove('dpnone')
    mask3.classList.remove('dpnone')
    mask4.classList.remove('dpnone')
    mask5.classList.remove('dpnone')
    mask6.classList.remove('dpnone')
    
    mask1.classList.add('dpflex')
    mask2.classList.add('dpflex')
    mask3.classList.add('dpflex')
    mask4.classList.add('dpflex')
    mask5.classList.add('dpflex')
    mask6.classList.add('dpflex')
}

commerce.onclick = function() {
    all.classList.remove('select')
    commerce.classList.add('select')
    portfl.classList.remove('select')
    Landing.classList.remove('select')
    Prototyping.classList.remove('select')

    mask1.classList.remove('dpnone')
    mask2.classList.add('dpnone')
    mask3.classList.add('dpnone')
    mask4.classList.add('dpnone')
    mask5.classList.add('dpnone')
    mask6.classList.add('dpnone')

    mask2.classList.add('dpflex')
    mask2.classList.remove('dpflex')
    mask3.classList.remove('dpflex')
    mask4.classList.remove('dpflex')
    mask5.classList.remove('dpflex')
    mask6.classList.remove('dpflex')
}

portfl.onclick = function() {
    all.classList.remove('select')
    commerce.classList.remove('select')
    portfl.classList.add('select')
    Landing.classList.remove('select')
    Prototyping.classList.remove('select')

    mask1.classList.add('dpnone')
    mask2.classList.remove('dpnone')
    mask3.classList.add('dpnone')
    mask4.classList.add('dpnone')
    mask5.classList.add('dpnone')
    mask6.classList.add('dpnone')

    mask1.classList.remove('dpflex')
    mask2.classList.add('dpflex')
    mask3.classList.remove('dpflex')
    mask4.classList.remove('dpflex')
    mask5.classList.remove('dpflex')
    mask6.classList.remove('dpflex')
}

Landing.onclick = function() {
    all.classList.remove('select')
    commerce.classList.remove('select')
    portfl.classList.remove('select')
    Landing.classList.add('select')
    Prototyping.classList.remove('select')

    mask1.classList.add('dpnone')
    mask2.classList.add('dpnone')
    mask3.classList.remove('dpnone')
    mask4.classList.add('dpnone')
    mask5.classList.remove('dpnone')
    mask6.classList.add('dpnone')

    mask1.classList.remove('dpflex')
    mask2.classList.remove('dpflex')
    mask3.classList.add('dpflex')
    mask4.classList.remove('dpflex')
    mask5.classList.add('dpflex')
    mask6.classList.remove('dpflex')
}

Prototyping.onclick = function() {
    all.classList.remove('select')
    commerce.classList.remove('select')
    portfl.classList.remove('select')
    Landing.classList.remove('select')
    Prototyping.classList.add('select')

    mask1.classList.add('dpnone')
    mask2.classList.add('dpnone')
    mask3.classList.add('dpnone')
    mask4.classList.remove('dpnone')
    mask5.classList.add('dpnone')
    mask6.classList.add('dpnone')

    mask1.classList.remove('dpflex')
    mask2.classList.remove('dpflex')
    mask3.classList.remove('dpflex')
    mask4.classList.add('dpflex')
    mask5.classList.remove('dpflex')
    mask6.classList.remove('dpflex')
}