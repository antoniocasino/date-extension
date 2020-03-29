// depending on the order of these two imports the comingFrom message change
import 'date-extension';
import {sayHello} from 'hwrld-date';


console.log(`calling from main app`);
let date: Date = new Date();
console.log(`hello ${date.toLocaleString()} ${date.comingFrom()}`);

console.log(`calling say hello from library`);
sayHello();
