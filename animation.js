let body = document.querySelector('body')
let sc1button1 = document.getElementById('sc1button1')
let sc1button2 = document.getElementById('sc1button2')
let sc1button3 = document.getElementById('sc1button3')

let sc1button1mbl = document.getElementById('sc1button1mbl')
let sc1button2mbl = document.getElementById('sc1button2mbl')
let sc1button3mbl = document.getElementById('sc1button3mbl')

let sc1img1 = document.querySelector('.sc1img1')
let sc1img2 = document.querySelector('.sc1img2')
let sc1img3 = document.querySelector('.sc1img3')

let sc1img1mbl = document.querySelector('.sc1img1mbl')
let sc1img2mbl = document.querySelector('.sc1img2mbl')
let sc1img3mbl = document.querySelector('.sc1img3mbl')

let p1sc1 = document.getElementById('p1sc1')
let p2sc1 = document.getElementById('p2sc1')
let p3sc1 = document.getElementById('p3sc1')

let p1sc1mbl = document.getElementById('p1sc1mbl')
let p2sc1mbl = document.getElementById('p2sc1mbl')
let p3sc1mbl = document.getElementById('p3sc1mbl')

let all = document.getElementById('all')
let commerce = document.getElementById('commerce')
let portfl = document.getElementById('portfl')
let Landing = document.getElementById('Landing')
let Prototyping = document.getElementById('Prototyping')

let allmbl = document.getElementById('allmbl')
let commercembl = document.getElementById('commercembl')
let portflmbl = document.getElementById('portflmbl')
let Landingmbl = document.getElementById('Landingmbl')
let Prototypingmbl = document.getElementById('Prototypingmbl')

let mask1 = document.getElementById('mask1')
let mask2 = document.getElementById('mask2')
let mask3 = document.getElementById('mask3')
let mask4 = document.getElementById('mask4')
let mask5 = document.getElementById('mask5')
let mask6 = document.getElementById('mask6')

let mask1mbl = document.getElementById('mask1mbl')
let mask2mbl = document.getElementById('mask2mbl')
let mask3mbl = document.getElementById('mask3mbl')
let mask4mbl = document.getElementById('mask4mbl')
let mask5mbl = document.getElementById('mask5mbl')
let mask6mbl = document.getElementById('mask6mbl')
let menumbl = document.querySelector('.menumbl');
let mnumblbar = document.querySelector('.mnumblbar')
let menunav = document.querySelector('.menunav')

menumbl.addEventListener("click", function () {
    if (menunav.classList.contains('dpnone')) {
        menumbl.classList.toggle('active')
        mnumblbar.classList.toggle('active')
        menunav.classList.toggle('dpflex')
        menunav.classList.toggle('dpnone')
        setTimeout(() => {
            menunav.classList.toggle('active')
            body.classList.toggle('overflow')
        }, 1);
    }
    else {
        menunav.classList.toggle('active')
        menumbl.classList.toggle('active')
        mnumblbar.classList.toggle('active')
        body.classList.toggle('overflow')
        setTimeout(() => {
            menunav.classList.toggle('dpflex')
            menunav.classList.toggle('dpnone')
        }, 500);
    }
})

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

sc1button1mbl.onclick = function() {
    sc1button1mbl.classList.add('set')
    sc1button2mbl.classList.remove('set')
    sc1button3mbl.classList.remove('set')

    sc1img1mbl.classList.remove('dpnone')
    sc1img2mbl.classList.add('dpnone')
    sc1img3mbl.classList.add('dpnone')

    p1sc1mbl.classList.remove('dpnone')
    p2sc1mbl.classList.add('dpnone')
    p3sc1mbl.classList.add('dpnone')
}
sc1button2mbl.onclick = function() {
    sc1button1mbl.classList.remove('set')
    sc1button2mbl.classList.add('set')
    sc1button3mbl.classList.remove('set')

    sc1img1mbl.classList.add('dpnone')
    sc1img2mbl.classList.remove('dpnone')
    sc1img3mbl.classList.add('dpnone')

    p1sc1mbl.classList.add('dpnone')
    p2sc1mbl.classList.remove('dpnone')
    p3sc1mbl.classList.add('dpnone')
    
}
sc1button3mbl.onclick = function() {
    sc1button1mbl.classList.remove('set')
    sc1button2mbl.classList.remove('set')
    sc1button3mbl.classList.add('set')
    
    sc1img1mbl.classList.add('dpnone')
    sc1img2mbl.classList.add('dpnone')
    sc1img3mbl.classList.remove('dpnone')

    p1sc1mbl.classList.add('dpnone')
    p2sc1mbl.classList.add('dpnone')
    p3sc1mbl.classList.remove('dpnone')
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






allmbl.onclick = function() {
    allmbl.classList.add('select')
    commercembl.classList.remove('select')
    portflmbl.classList.remove('select')
    Landingmbl.classList.remove('select')
    Prototypingmbl.classList.remove('select')

    mask1mbl.classList.remove('dpnone')
    mask2mbl.classList.remove('dpnone')
    mask3mbl.classList.remove('dpnone')
    mask4mbl.classList.remove('dpnone')
    mask5mbl.classList.remove('dpnone')
    mask6mbl.classList.remove('dpnone')
    
    mask1mbl.classList.add('dpflex')
    mask2mbl.classList.add('dpflex')
    mask3mbl.classList.add('dpflex')
    mask4mbl.classList.add('dpflex')
    mask5mbl.classList.add('dpflex')
    mask6mbl.classList.add('dpflex')
}

commercembl.onclick = function() {
    allmbl.classList.remove('select')
    commercembl.classList.add('select')
    portflmbl.classList.remove('select')
    Landingmbl.classList.remove('select')
    Prototypingmbl.classList.remove('select')

    mask1mbl.classList.remove('dpnone')
    mask2mbl.classList.add('dpnone')
    mask3mbl.classList.add('dpnone')
    mask4mbl.classList.add('dpnone')
    mask5mbl.classList.add('dpnone')
    mask6mbl.classList.add('dpnone')

    mask2mbl.classList.add('dpflex')
    mask2mbl.classList.remove('dpflex')
    mask3mbl.classList.remove('dpflex')
    mask4mbl.classList.remove('dpflex')
    mask5mbl.classList.remove('dpflex')
    mask6mbl.classList.remove('dpflex')
}

portflmbl.onclick = function() {
    allmbl.classList.remove('select')
    commercembl.classList.remove('select')
    portflmbl.classList.add('select')
    Landingmbl.classList.remove('select')
    Prototypingmbl.classList.remove('select')

    mask1mbl.classList.add('dpnone')
    mask2mbl.classList.remove('dpnone')
    mask3mbl.classList.add('dpnone')
    mask4mbl.classList.add('dpnone')
    mask5mbl.classList.add('dpnone')
    mask6mbl.classList.add('dpnone')

    mask1mbl.classList.remove('dpflex')
    mask2mbl.classList.add('dpflex')
    mask3mbl.classList.remove('dpflex')
    mask4mbl.classList.remove('dpflex')
    mask5mbl.classList.remove('dpflex')
    mask6mbl.classList.remove('dpflex')
}

Landingmbl.onclick = function() {
    allmbl.classList.remove('select')
    commercembl.classList.remove('select')
    portflmbl.classList.remove('select')
    Landingmbl.classList.add('select')
    Prototypingmbl.classList.remove('select')

    mask1mbl.classList.add('dpnone')
    mask2mbl.classList.add('dpnone')
    mask3mbl.classList.remove('dpnone')
    mask4mbl.classList.add('dpnone')
    mask5mbl.classList.remove('dpnone')
    mask6mbl.classList.add('dpnone')

    mask1mbl.classList.remove('dpflex')
    mask2mbl.classList.remove('dpflex')
    mask3mbl.classList.add('dpflex')
    mask4mbl.classList.remove('dpflex')
    mask5mbl.classList.add('dpflex')
    mask6mbl.classList.remove('dpflex')
}

Prototypingmbl.onclick = function() {
    allmbl.classList.remove('select')
    commercembl.classList.remove('select')
    portflmbl.classList.remove('select')
    Landingmbl.classList.remove('select')
    Prototypingmbl.classList.add('select')

    mask1mbl.classList.add('dpnone')
    mask2mbl.classList.add('dpnone')
    mask3mbl.classList.add('dpnone')
    mask4mbl.classList.remove('dpnone')
    mask5mbl.classList.add('dpnone')
    mask6mbl.classList.add('dpnone')

    mask1mbl.classList.remove('dpflex')
    mask2mbl.classList.remove('dpflex')
    mask3mbl.classList.remove('dpflex')
    mask4mbl.classList.add('dpflex')
    mask5mbl.classList.remove('dpflex')
    mask6mbl.classList.remove('dpflex')
}