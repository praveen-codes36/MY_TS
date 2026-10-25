function getChai(kind:string | number){
    if(typeof kind == 'string'){
        return `Making ${kind} chai...`;
    }
    return `chai order : ${kind}`;
}

function orderChai(size: "small" | "medium" | 'large' | number){
    if(size === "small"){
        return `small cutting chai...`;
    }
    if(size === "medium" || "large"){
        return `make extra chai`;
    }
    return `order size ${size}`;
}


class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`;
    }
}
class Cutting{
    serve(){
        return `Serving cutting Chai`
    }
}

function serve(chai: KulhadChai | Cutting){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type:string;
    sugar:number;
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === "object" && 
            obj != null &&
            typeof obj.type === "string" &&
            typeof obj.sugar === "number"
    )
}

type MasalaChai = {type:"masala"; spicelevel: number}
type GingerChai = {type:"ginger"; amount: number}
type ElaichiChai = {type:"elaichi"; aroma: number}


type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order:Chai){
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "elaichi":
            return `Elaichi chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
    }
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }
}

// unknown is more prefered as compare to any
// function isStringArray(arr: unknown) : arr is string[]{

// }