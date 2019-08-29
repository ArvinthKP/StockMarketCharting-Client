export class StockPrice {

    id: number;
    companyId: number;
    stockExchangeName: string;
    currentPrice: number;
    date: string;
    time: string;

    constructor(companyId?, stockExchangeName?, currentPrice?, date?, time?, id?) {
        this.companyId = companyId;
        this.stockExchangeName = stockExchangeName;
        this.currentPrice = currentPrice;
        this.date = date;
        this.time = time;
        this.id = id;
    }

}