export interface product{
    id:number;
    title:string;
    category: string;
    image:string;
    price:number;
    description:string;
    rating:{
        rate:number;
        count:number;
    }
}

