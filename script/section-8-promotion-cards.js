const promotionsList = [
    {
        id: 1,
        recommended: false,
        discount: 40,
        quantity: 5,
        free: 1,
        imgPath1: './img/section-8/KIT-5.png',
        imgPath2: './img/section-8/Mock-Up-Revita-Gold-deitado-certo.png',
        tablePrice: '2.100',
        parcelPrice: {
            value: 88,
            coins: 24
        },
        inCashPrice: '1.158,20',
    },
    {
        id: 2,
        recommended: true,
        discount: 32,
        quantity: 2,
        free: 1,
        imgPath1: './img/section-8/KIT-2.png',
        imgPath2: './img/section-8/Mock-Up-Revita-Gold-deitado-certo.png',
        tablePrice: '2.100',
        parcelPrice: {
            value: 44,
            coins: 24
        },
        inCashPrice: '1.158,20',
    },
    {
        id: 3,
        recommended: false,
        discount: 20,
        quantity: '1 unidade',
        free: '',
        imgPath1: './img/section-8/Mock-Up-Revita-Gold-deitado-certo.png',
        imgPath2: '',
        tablePrice: '2.100',
        parcelPrice: {
            value: 24,
            coins: 24
        },
        inCashPrice: '1.158,20',
    },

]





const promotionCardElement = (promotion) => {
    return (`
            <!-- promotion-card -->
            <div class="promotion-card">
        ${
        !promotion.recommended
            ? ''
            : '<span class="recommended">Recomendado</span>'
        }
                <!-- discount -->
                <div class="discount">
                    <p><strong>${promotion.discount}%</strong> off</p>
                </div>
                <h2>
                    Compre um kit com <br />
                    <strong>
                    ${promotion.quantity} 
                    ${!promotion.free ? '' : `e ganhe +${promotion.free}`}
                    </strong>
                    <div class="shine-underline"></div>
                </h2>
                <div class="promotion-img">
                    
                    <img src="${promotion.imgPath1}" />
    ${
        !promotion.free
            ? ''
            : `<strong class="free">Grátis</strong> 
                <span>+</span>
                <img src="${promotion.imgPath2}" alt="Revita Gold" />`
        }

                </div>
                <!-- promotion-card > p -->
                <p>Preço de tabela: R$ ${promotion.tablePrice}</p>
                <!-- promotion-card-price -->
                <div class="promotion-card-price">
                    <!-- parceled -->
                    <div class="parceled">
                        <!-- only-twelve -->
                        <div class="only-twelve">
                            <p>Apenas 12X</p>
                            <div>
                                <img src="./img/section-8/FontAwsome (credit-card).svg" alt="Cartão" />
                            </div>
                            <span>R$</span>
                        </div>
                        <!-- value -->
                        <div class="value"><strong>${promotion.parcelPrice.value},</strong>${promotion.parcelPrice.coins}</div>
                    </div>
                    <!-- in-cash -->
                    <p class="in-cash">
                        OU R$ ${promotion.inCashPrice} Á VISTA
                    </p>
                </div>

                <!-- .promotion-card .main-button-2 -->
                <div class="main-button-2">
                    <a href="#">
                        Comprar agora
                    </a>
                </div>
            </div>
        `)
}

const parentElementPromotionCard = document.querySelector('[data-promotion]')
parentElementPromotionCard.innerHTML = promotionsList.map(promotion => promotionCardElement(promotion)).join('')
