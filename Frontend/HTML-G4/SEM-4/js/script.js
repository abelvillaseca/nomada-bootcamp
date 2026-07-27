const tasks = [
    {
        title: 'Aprender HTML',
        description: 'HTML semántico',
        image: 'https://static.semrush.com/blog/uploads/media/0a/0f/0a0fd07d0a6ee7a7f893b0e21379c0ae/ES-Semantic-Search-Non-Semantic.png',
    },
    {
        title: 'Aprender CSS',
        description: 'Flexbox, Grid y Responsive',
        image: 'https://web.dev/static/css/image/hero-css.png?hl=es-419',
    },
    {
        title: 'Aprender HTML',
        description: 'HTML semántico',
        image: 'https://static.semrush.com/blog/uploads/media/0a/0f/0a0fd07d0a6ee7a7f893b0e21379c0ae/ES-Semantic-Search-Non-Semantic.png',
    },
    {
        title: 'Aprender CSS',
        description: 'Flexbox, Grid y Responsive',
        image: 'https://web.dev/static/css/image/hero-css.png?hl=es-419',
    },
]

const board = document.querySelector('.board')

const template = document.querySelector('#task-template')

const dialog = document.querySelector('#dialog')

const dialogTitle = document.querySelector('#dialogTitle')

const dialogImage = document.querySelector('#dialogImage')

const dialogDescription = document.querySelector('#dialogDescription')

let draggedCard = null

tasks.forEach((task) => {
    const clone = template.content.cloneNode(true)

    const card = clone.querySelector('.card')

    const image = clone.querySelector('img')

    image.src = task.image
    image.loading = 'lazy'

    clone.querySelector('h2').textContent = task.title
    clone.querySelector('p').textContent = task.description

    card.addEventListener('click', () => {
        dialogTitle.textContent = task.title
        dialogDescription.textContent = task.description
        dialogImage.src = task.image

        dialog.showModal()
    })

    card.addEventListener('dragstart', () => {
        draggedCard = card
    })

    card.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    card.addEventListener('drop', () => {
        if (card !== draggedCard) {
            board.insertBefore(draggedCard, card)
        }
    })

    card.addEventListener('dragend', () => {
        draggedCard = null
    })

    board.appendChild(clone)
})

document.querySelector('#closeDialog').addEventListener('click', () => {
    dialog.close()
})
