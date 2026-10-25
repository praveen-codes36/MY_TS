type ChaiOrder ={
    type:string;
    sugar:number;
    strong:boolean;
};

function makeChai(order:ChaiOrder){
    console.log(order);
}

function serveChai(order:ChaiOrder){
    console.log(order);
}

// type TeacRecipe={
//     water:number,
//     milk:number;
// }

//above type convert to interface

interface TeacRecipe {
    water:number;
    milk:number;
}

// class MasalaChai implements TeacRecipe{
//     water=100;
//     milk=50;
// }

interface CupSize{
    size:"small" | "large"
}

class Chai implements CupSize{
    size: "small" | "large"="large";
}

// type Response = {ok:true} | {ok:false}
// class myRes implements Response{
//     ok:boolean=true;
// }
// is case me type nhi kam kerta interface bananna hi pedega



type TeaType="masala" |"ginger" |"leamon" // this know as liternal type

function orderChai(t:TeaType){
    console.log(t);
}

type BaseChai = {teaLeaves : number}
type Extra ={masala:number}

type MasalaChai = BaseChai & Extra

const cup:MasalaChai={
    teaLeaves:2,
    masala:1,
}

type User = {
    username:string;
    bio?: string
}

const u1:User={username:"Hitesh"}
const u2:User={username:"Praveen",bio:"hitesh.ai"}

type Config={
    readonly appName:string
    version:number 
}

const cfg:Config={
    appName:"Masterji",
    version:1
}

//readonly property k bad apn usme change nhi kerskte this give error
// cfg.appName="ChaiCode"
