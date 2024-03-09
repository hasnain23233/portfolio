$('#home').click(function(){
    //alert('script is running')
    $('#mainTextAbout').fadeOut(200, function(){
        $('#mainTextMyPortfolio').fadeOut(200 , function(){
            $('#contactMe').fadeOut(200 , function(){
                $('#potfolioPage').fadeOut(200 , function(){
                    $('#mainText').slideDown(700)
                })
            })
        })
    }) 
    
})
$('#aboutUS').click(function(){
    //alert('script is running')
    $('#mainText').fadeOut(200, function(){
        $('#mainTextMyPortfolio').fadeOut(200 , function(){
            $('#contactMe').fadeOut(200 , function(){
                $('#potfolioPage').fadeOut(200  ,function(){
                    $('#mainTextAbout').slideDown(800)
                })
            })
        })
    }) 
})
let pbtn = document.getElementById('skill')
let homepage = document.getElementById('mainText')
let aboutPage = document.getElementById('mainTextAbout')
let thirdPage = document.getElementById('mainTextMyPortfolio')
let cbtn = document.getElementById('contact')
let portfolioBtn = document.getElementById('portfolio')
let fourthPage = document.getElementById('potfolioPage')
let fivePage = document.getElementById('contactMe')
let hbtn =  document.getElementById('btn')
pbtn.addEventListener('click', function(){
    homepage.style.display = 'none'
    aboutPage.style.display = 'none'
    fivePage.style.display = 'none'
    fourthPage.style.display = 'none'
    $('#mainTextMyPortfolio').slideDown(800)
})
cbtn.addEventListener('click' ,function(){
    //alert('hallo')
    homepage.style.display = 'none'
    aboutPage.style.display = 'none'
    thirdPage.style.display = 'none'
    fourthPage.style.display = 'none'
    $('#contactMe').slideDown(800)
})
portfolioBtn.addEventListener('click', function(){
    //alert('hallo')
    homepage.style.display = 'none'
    aboutPage.style.display = 'none'
    thirdPage.style.display = 'none'
    fivePage.style.display = 'none'
    $('#potfolioPage').slideDown(700)
})
hbtn.addEventListener('click' , function(){
    //alert('script is running')
    homepage.style.display = 'none'
    aboutPage.style.display = 'none'
    thirdPage.style.display = 'none'
    fourthPage.style.display = 'none'
    $('#contactMe').slideDown(800)
})
