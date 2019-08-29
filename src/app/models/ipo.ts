export class IPO {
    
    id: number;
    companyName: String;
    stockExchangeName: String;
    pricePerPay: String;
    totalNumberOfShares: String;
    openDateTime: String;

    constructor(companyName?, stockExchangeName?, pricePerPay?, totalNumberOfShares?, openDateTime?){
        this.companyName = companyName;
        this.stockExchangeName = stockExchangeName;
        this.pricePerPay = pricePerPay;
        this.totalNumberOfShares = totalNumberOfShares;
        this.openDateTime = openDateTime;
    }
}