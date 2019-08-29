export class Company {

    id: number;
    companyName: String;
    turnover: String;
    ceo: String;
    boardOfDirector: String;
    stockExchange: String;
    sector: String;
    brief: String;

    constructor(companyName?, turnover?, ceo?, boardOfDirector?, stockExchange?, sector?, brief?, id?) {
        this.companyName = companyName;
        this.turnover = turnover;
        this.ceo = ceo;
        this.boardOfDirector = boardOfDirector;
        this.stockExchange = stockExchange;
        this.sector = sector;
        this.brief = brief;
        this.id = id;
    }
}