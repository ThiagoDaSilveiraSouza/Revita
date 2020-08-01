const reviewList = [
    {
        id: 1,
        name: 'Thiago',
        imgPath1: './img/section-5/Matheus.jpg',
        imgPath2: './img/section-5/Matheus.jpg',
        starts: 2,
        reviewDescription: 'Gostei muito do Revita Gold, ele se adapta perfeitamente a minha pele, trazendo uma incrível sensação, uniformidade e firmeza',
    },
    {
        id: 2,
        name: 'Matheus',
        imgPath1: './img/section-5/Matheus.jpg',
        imgPath2: './img/section-5/Matheus.jpg',
        starts: 5,
        reviewDescription: 'Gostei muito do Revita Gold, ele se adapta perfeitamente a minha pele, trazendo uma incrível sensação, uniformidade e firmeza',
    },
    {
        id: 3,
        name: 'Matheus',
        imgPath1: './img/section-5/Matheus.jpg',
        imgPath2: './img/section-5/Matheus.jpg',
        starts: 5,
        reviewDescription: 'Gostei muito do Revita Gold, ele se adapta perfeitamente a minha pele, trazendo uma incrível sensação, uniformidade e firmeza',
    },
    {
        id: 4,
        name: 'Matheus',
        imgPath1: './img/section-5/Matheus.jpg',
        imgPath2: './img/section-5/Matheus.jpg',
        starts: 5,
        reviewDescription: 'Gostei muito do Revita Gold, ele se adapta perfeitamente a minha pele, trazendo uma incrível sensação, uniformidade e firmeza',
    },
    {
        id: 5,
        name: 'Matheus',
        imgPath1: './img/section-5/Matheus.jpg',
        imgPath2: './img/section-5/Matheus.jpg',
        starts: 5,
        reviewDescription: 'Gostei muito do Revita Gold, ele se adapta perfeitamente a minha pele, trazendo uma incrível sensação, uniformidade e firmeza',
    },
    {
        id: 6,
        name: 'Matheus',
        imgPath1: './img/section-5/Matheus.jpg',
        imgPath2: './img/section-5/Matheus.jpg',
        starts: 5,
        reviewDescription: 'Gostei muito do Revita Gold, ele se adapta perfeitamente a minha pele, trazendo uma incrível sensação, uniformidade e firmeza',
    },
]


const createStar = (numberOfStarts) => {
    const starElement = `<img src="./img/section-5/star-icon.svg" alt="start" />`
    let elements = []
    for (let cont = 0; cont < numberOfStarts; cont++) {
        elements.push(starElement)
    }
    return elements.join('')
}
const reviewCardElement = (person) => {
    return (
        `
    <div class="review-card">
        <!-- photos -->
        <div class="photos">
            <div class="photo-circle">
                <img src="${person.imgPath1}" alt="${person.name}" />
            </div>
            <div class="photo-circle">
                <img src="${person.imgPath2}" alt="${person.name}" />
            </div>
        </div>
        <div class="star-icons">
                ${createStar(person.starts)}
        </div>
        <h3>${person.name}</h3>
        <p>
            “${person.reviewDescription}”
        </p>
    </div>
    `
    )
}
const teste = (name) => `<h1>${name}</h1>`

const parentElement = document.querySelector('[data-review]')

parentElement.innerHTML = reviewList.map((person) => reviewCardElement(person)).join('')
