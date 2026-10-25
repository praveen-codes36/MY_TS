const chai={
    name:"Masala chai",
    price:20,
    isHot:true
}

// {
//     name:string,
//     price:number,
//     isHot:boolean
// }

let tea:{
    name:string,
    price:number,
    isHot:boolean
}

tea={
    name:"Ginger Tea",
    price:25,
    isHot:true
}

type Tea={
    name:string;
    price:number;
    ingredients:string[]
}

const adrakChai: Tea ={
    name:"Adrak Chai",
    price:25,
    ingredients:["ginger","tea leaves"]
}

type Cup ={size:string};
let smallCup: Cup={size:"200ml"}

let bigCup={size:"500ml",material:"steel"}

smallCup=bigCup


