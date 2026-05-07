import { name } from "./index1.mjs";

try {
    console.log(name
    );
    console.log("i am try");
} catch (error) {
    console.log("i am catch");
    console.log(error.message);
    
}