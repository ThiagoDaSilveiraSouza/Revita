const mediasComments = [
    {
        id: 1,
        name: 'Terra',
        imgPath: './img/section-6/terra-logo.svg',
        comment: '"Tratamento milagroso que acabar com os sinais de envelhecimento de forma saudável"'
    },
    {
        id: 1,
        name: 'Bem estar',
        imgPath: './img/section-6/bem-estar-logo.svg',
        comment: '"Com esse tratamento é possível remover as rugas do rosto de maneira natural sem precisar de procedimento agressivos que podem prejudicar seriamente a pele"'
    },
    {
        id: 1,
        name: 'Tua Saúde',
        imgPath: './img/section-6/tua-saude-logo.svg',
        comment: '"Tratamento ideal para todas as mulheres que buscam suavizar rugas, linhas de expressão, marcas de acne e eliminar bolsões abaixo dos olhos"'
    },
]

const cardMediaComments = (mediaComment) => {
    return (
        `
        <div class="media-card">
            <img src="${mediaComment.imgPath}" alt="${mediaComment.name}" />
            <img src="./img/section-6/duplas.PNG" alt="aspas" />
            <p>"${mediaComment.comment}"</p>
        </div>
        `
    )
}

const parentElement2 = document.querySelector('[data-comments]')

parentElement2.innerHTML = mediasComments.map((media) => cardMediaComments(media)).join('')