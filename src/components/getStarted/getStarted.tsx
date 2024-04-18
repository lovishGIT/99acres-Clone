interface getStartedCardType {
    text: string;
    imgSrc: string;
    link?: string;
}

const getStartedCards: getStartedCardType[] = [
    {
        text: 'Buying a Home',
        imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_buy.webp',
        link: '',
    }, {
        text: 'Renting a home',
        imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_rent.webp',
        link: '',
    }, {
        text: 'Invest in Real Estate',
        imgSrc: 'https://www.99acres.com/universalapp/img/d_hp_invest_new.png',
        link: 'https://www.99acres.com/real-estate-investments-reint?showModal=true',
    }, {
        text: 'Sell/Rent your property',
        imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_ppf.webp',
        link: 'https://www.99acres.com/postproperty/',
    }, {
        text: 'Plots/Land',
        imgSrc: 'https://static.99acres.com/universalhp/img/d_hp_plot_land.webp',
        link: '',
    }
]

export default function GetStarted() {
    return (
        <div>
            <h2 className="text-gray-500 font-bold text-center mb-[2%]">
                GET STARTED WITH EXPLORING REAL ESTATE OPTIONS
            </h2>
            <div className="flex gap-[2%] justify-center items-center">
                {getStartedCards.map((card)=> (
                    <a href={card.link || '/'} className="">
                        <img className="w-[200px] h-[125px]" src={card.imgSrc} alt={card.text} />
                        <p className="text-gray-500 ml-2 text-sm">{card.text}</p>
                    </a>
                ))

                }
            </div>
        </div>
    );
}
