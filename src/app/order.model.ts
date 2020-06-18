export class Order
{
    
    public product? : string;
    public name? : string;
    public count? : number;
    public price? : number;
    public image : string;
    public product_total : number;
   
  
    constructor(product:string,name:string,count:number,price:number)
    {

        this.product = product;
        this.name = name;
        this.count = count;
        this.price = price;
      
       

    }
   
}