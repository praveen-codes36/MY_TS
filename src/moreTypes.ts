let response: any = "42";

let numericLength:number = (response as string).length

type Book ={
    name:string;
};

let bookString = '{"name":"who is moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement = document.getElementById("username" ) as HTMLInputElement

const data:unknown = "chai or code"
const strData:string =  data as string

type Role = "admin" | "user"

function redirectBasedOnRole(role:Role):void{
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return
    }
    if(role === "user"){
        console.log("Redirecting to user dashboard");
        return
    }
    role;
}

function neverReturn(): never{
    while(true){
        
    }
}