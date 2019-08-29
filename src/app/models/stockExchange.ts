export class StockExchange {

    id: number;
    stockExchangeName: String;
    brief: String;
    address: String;

    constructor(stockExchangeName?, brief?, address?, id?){
        this.stockExchangeName = stockExchangeName;
        this.brief = brief;
        this.address = address;
        this.id = id;
    }
}