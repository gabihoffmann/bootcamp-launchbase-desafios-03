const modalOverlay = document.querySelector('.overlay');
const modalView = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');


for(let card of cards){
    const cardId = card.getAttribute('id')

    card.querySelector('.card__price').style.background = `var(--color-${cardId})`
    card.querySelector('.card__description--highlight').style.color = `var(--color-${cardId})`
    
    card.addEventListener('mouseover', function(){
        card.style.border = `2px solid var(--color-${cardId})`
    })

    card.addEventListener('mouseout', function(){
        card.style.border = `none`
    })

    card.addEventListener('click', function(){
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cardId}`
    })
}

document.querySelector('.modal__close').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalView.classList.remove('modal--maximmize')
})

document.querySelector('.modal__maximmize').addEventListener('click',function(){
    modalView.classList.toggle('modal--maximmize')
})

