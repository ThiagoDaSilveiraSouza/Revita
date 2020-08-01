const formulasList = [
    {
        id: 1,
        side: 'left',
        formulaText: 'O <strong>Revita Gold</strong> é um sérum facial que utiliza uma fórmula exclusiva que previne e repara os sinais da idade à curto e longo prazo.'
    },
    {
        id: 2,
        side: 'right',
        formulaText: 'O <strong>Revita Gold</strong> é um sérum facial que utiliza uma fórmula exclusiva que previne e repara os sinais da idade à curto e longo prazo.'
    },
    {
        id: 3,
        side: 'left',
        formulaText: 'O <strong>Revita Gold</strong> é um sérum facial que utiliza uma fórmula exclusiva que previne e repara os sinais da idade à curto e longo prazo.'
    },
    {
        id: 4,
        side: 'right',
        formulaText: 'O <strong>Revita Gold</strong> é um sérum facial que utiliza uma fórmula exclusiva que previne e repara os sinais da idade à curto e longo prazo.'
    },
]

const cardFormula = (mediaComment) => {
    if (mediaComment.side === 'left') {
        return (
            `
        <div class="formula-card formula-left">
            <div class="formula-img">
                <img src="./img/section-7/sum.svg" alt="sum" />
                <div class="shine-underline"></div>
            </div>
            <p>${mediaComment.formulaText}</p>
        </div>
        `
        )
    } else if (mediaComment.side === 'right') {
        return (
            `
        <div class="formula-card formula-right">
            <div class="formula-img">
                <div class="shine-underline"></div>
                <img src="./img/section-7/sum.svg" alt="sum" />
            </div>
            <p>${mediaComment.formulaText}</p>
        </div>
        `
        )
    }
}

const parentElement3 = document.querySelector('[data-formula]')

parentElement3.innerHTML += formulasList.map((formula) => cardFormula(formula)).join('')