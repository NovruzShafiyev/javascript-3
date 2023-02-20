//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR
// !MUREKKEB OLDUGUNU DUSHUNDUYUNUZ TASKLAR AYRI FAYLDA YAZILMALIDIR. (FAYL ADI TASKA UYGUN QOYULMALIDIR)
// !SONDA BUTUN KODLAR GITHUBA YUKLENILMELIDIR

// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR.

// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN

let SET = "SET_DATA";
let GET = "GET_DATA";
let DELETE = "DELETE_DATA";

// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin

// function data(type = "get") {
//     switch (type) {
//       case "set":
//         console.log(SET);
//         break;
//       case "get":
//         console.log(GET);
//         break;
//       case "remove":
//         console.log(DELETE);
//         break;
//       default:
//         console.log("Invalid type");
//         break;
//     }
//   }

//   data()
//   data("set")
//   data("get")
//   data("remove")

// 1.2  2ci merhelede functiondan kenarda array yaradin ve
//         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// let myArray = [];

// function handleData(type) {
//   switch (type) {
//     case SET:
//       let randomNum = Math.floor(Math.random() * 10) + 1;
//       myArray.push(randomNum);
//       console.log(
//         "Added " + randomNum + " to the array. Array contents: " + myArray
//       );
//       break;
//     case GET:
//       console.log("Array contents: " + myArray);
//       break;
//     default:
//       console.log("Invalid type");
//   }
// }

// handleData(GET);

// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.

// let myArray = [];

// function data(type, arr) {
//     switch (type) {
//         case "set":
//             arr.push(Math.floor(Math.random() * 10) + 1);
//             break;
//         case "remove":
//             if (arr.length > 0) {
//                 arr.pop();
//             } else {
//                 console.log("Error: array is empty");
//             }
//             break;
//         case "get":
//             console.log(arr);
//             break;
//         default:
//             console.log("Error: invalid type");
//             break;
//     }
// }

// data("set", myArray);
// data("set", myArray);
// data("get", myArray);
// data("remove", myArray);
// data("remove", myArray);
// data("remove", myArray);
// data("get", myArray);

// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun

// let myArray = ["Novruz"];

// function data(type, arr) {
//   if (!Array.isArray(arr)) {
//     console.log("Error: The second parameter must be an array");
//     return;
//   }

//   switch (type) {
//     case "get":
//       console.log("Array contents:", arr);
//       break;
//     case "set":
//       let num = Math.floor(Math.random() * 10) + 1;
//       arr.push(num);
//       console.log("Data has been set:", arr);
//       break;
//     case "remove":
//       if (arr.length > 0) {
//         arr.pop();
//         console.log("Data has been removed:", arr);
//       } else {
//         console.log("Error: Array is empty");
//       }
//       break;
//     default:
//       console.log("Error: Invalid type");
//   }
// }

// data("get", myArray);

///////////////////////////////////////////////////////////////////////////////////////////

// let mL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.

// for (let i = 0; i < mL.length; i++) {
//   switch (mL[i]) {
//     case "January":
//     case "March":
//     case "May":
//     case "July":
//     case "August":
//     case "October":
//     case "December":
//       console.log(mL[i] + " has 31 days.");
//       break;
//     case "April":
//     case "June":
//     case "September":
//     case "November":
//       console.log(mL[i] + " has 30 days.");
//       break;
//     case "February":
//       console.log(mL[i] + " has 28 or 29 days.");
//       break;
//     default:
//       console.log("Invalid month name.");
//       break;
//   }
// }

// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// let date = new Date();
// let month = date.getMonth();
// let year = date.getFullYear();
// let daysInMonth;

// switch (month) {
//   case 0: // January
//   case 2: // March
//   case 4: // May
//   case 6: // July
//   case 7: // August
//   case 9: // October
//   case 11: // December
//     daysInMonth = 31;
//     break;
//   case 3: // April
//   case 5: // June
//   case 8: // September
//   case 10: // November
//     daysInMonth = 30;
//     break;
//   case 1: // February
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//       daysInMonth = 29;
//     } else {
//       daysInMonth = 28;
//     }
//     break;
//   default:
//     console.log("Invalid month.");
//     break;
// }

// console.log("The current month has " + daysInMonth + " days.");

// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

// let date = new Date();
// let month = date.getMonth() + 1;
// let half;

// switch (month) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//     half = "first";
//     break;
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//   case 11:
//   case 12:
//     half = "second";
//     break;
//   default:
//     console.log("Invalid month.");
//     break;
// }

// console.log("The current month is in the " + half + " half of the year.");

// 5) 4 cu taski heftenin gunleri ile yoxlayin

// let date = new Date();
// let day = date.getDate();
// let half;

// switch (true) {
//   case (day <= 15):
//     half = "first";
//     break;
//   case (day > 15):
//     half = "second";
//     break;
//   default:
//     console.log("Invalid day.");
//     break;
// }

// console.log("The current day is in the " + half + " half of the month.");

// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun

// let date = new Date();
// let currentDate = date.getDate();
// let weekNumber = Math.ceil(currentDate/7);

// console.log("We are currently in week " + weekNumber + " of the month.");

///////////////////////////////////////////////////////////////////////////////////////////

// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.

// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5

// 1.1 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January'],
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'],
//     ['August'],
//     ['September'],
//     ['October'],
//     ['November'],
//     ['December']
// ];

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let nestedML = [];

// for (let i = 0; i < mL.length; i++) {
//   let monthArray = [mL[i]];
//   nestedML.push(monthArray);
// }

// console.log(nestedML);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'],
//     ['May','June','July','August'],
//     ['September' , 'October', 'November', 'December']
// ];

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let quarters = [];

// let i = 0;
// while (i < 12) {
//   let quarter = mL.slice(i, i + 4);
//   quarters.push(quarter);
//   i += 4;
// }

// console.log(quarters);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['May','June',['July','August']],
//     ['September' , ['October', 'November', 'December']]
// ];

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let quarters = [];

// for (let i = 0; i < mL.length; i += 4) {
//   let quarter = [];
//   quarter.push(mL[i], mL[i+1], [mL[i+2], mL[i+3]]);
//   quarters.push(quarter);
// }

// console.log(quarters);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]],
//     ['May','June',['July',['August']]],
//     ['September' , ['October', 'November', ['December']]]
// ];

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// let result = [];

// let i = 0;
// while (i < mL.length) {
//   let arr = [mL[i], mL[i + 1]];
//   if (i + 2 < mL.length) {
//     let innerArr = [mL[i + 2]];
//     if (i + 3 < mL.length) {
//       innerArr.push([mL[i + 3]]);
//       arr.push(innerArr);
//       i += 4;
//     } else {
//       arr.push([mL[i + 2]]);
//       i += 3;
//     }
//   } else {
//     i += 2;
//   }
//   result.push(arr);
// }

// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']],
// ];

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// let arr=[];
// for (let i = 0; i < mL.length; i+=4) {
    
//     if (i+4<mL.length) {
//         arr.push([mL[i], mL[i+1], [mL[i+2], mL[i+3]]]);
//     } else {
//         arr.push([mL[i], [mL[i+1], mL[i+2], mL[i+3]]]);
//     }
     
// }
// console.log(arr);



///////////////////////////////////////////////////////////////////////////////////////////

// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// let fullName = "Novruz Shafiyev";
// let result = [];

// let names = fullName.split(" ");

// let firstName = names[0];
// let lastName = names[names.length - 1];

// let maxLength = Math.max(firstName.length, lastName.length);

// for (let i = 0; i < maxLength; i++) {
//   let char1 = firstName[i] || "X";
//   let char2 = lastName[i] || "X";
//   result.push([char1, char2]);
// }

// console.log(maxLength);

///////////////////////////////////////////////////////////////////////////////////////////

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var)
// sonra onlari umumi arraya elave etmelisiz

///////////////////////////////////////////////////////////////////////////////////////////

// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

// let a = "Ey babeK kebaB ye!";
// let reversed = '';

// for (let i = a.length - 1; i >= 0; i--) {
//   reversed += a[i];
// }

// console.log(reversed);

// let arr = [
//   3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342,
//   34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34,
// ];

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin

// let sum = 0;

// for (let num of arr) {
//   if (num % 5 === 0 && num % 7 === 0) {
//     sum += num;
//   }
// }

// console.log(sum);

// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)

// let largestEven = 0;

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (num % 2 === 0 && num >= 100 && num < 1000 && num > largestEven) {
//     largestEven = num;
//   }
// }

// console.log(largestEven);

// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

// let arr2 = []

// for(let i = 0; i < arr.length; i++){
//     let num = arr[i];
//     if(num%3===0 && num !==3){
//       arr2.push(num)
//     }
// }

// console.log(Math.min(...arr2))

// 7) verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//   key1: 0,
//   key2: 3,
//   key3: 2,
//   key4: 4,
//   key5: 53,
//   key7: 7,
//   key8: 8,
//   key9: 91,
// };

// for (const [key, value] of Object.entries(obj)) {
//   if (value === Number(key.slice(-1))) {
//     console.log(value);
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.

// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.

// const div1 = document.createElement('div');

// div.style.position = 'fixed';
// div.style.top = '0';
// div.style.left = '0';
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.backgroundColor = 'red';

// document.body.appendChild(div);

// let count = 0;
// const intervalId = setInterval(() => {
//   if (count >= 10) {
//     clearInterval(intervalId);
//   } else {
//     count++;
//     div.style.left = `${parseInt(div.style.left) - 20}px`;
//   }
// }, 2000);

// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.

// const div = document.createElement('div');

// div.style.position = 'fixed';
// div.style.top = '0';
// div.style.left = '0';
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.backgroundColor = 'red';
// div.style.transition = 'all 1s ease-in-out';

// Append the div to the document body

// document.body.appendChild(div);

// Move the div down and to the right every 1 second

// setInterval(() => {
//   const currentTop = parseInt(div.style.top) || 0;
//   const currentLeft = parseInt(div.style.left) || 0;
//   div.style.top = `${currentTop + 10}px`;
//   div.style.left = `${currentLeft + 10}px`;
// }, 1000);

// 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
//  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.

// function growingDiv() {
//   const body = document.body;
//   const div = document.createElement("div");

//   div.innerHTML = "Salam";
//   div.style.backgroundColor = "blue";
//   div.style.color = "black";
//   div.style.transition = "all .5s";
//   div.style.width = "200px";
//   div.style.height = "200px";
//   div.style.lineHeight = "200px";
//   div.style.textAlign = "center";
//   body.appendChild(div);

//   const centerDiv = () => {
//     body.style.display = "flex";
//     body.style.justifyContent = "center";
//     body.style.alignItems = "center";
//     body.style.alignContent = "center";
//     body.style.minHeight = "100vh";
//   };

//   const grow = () => {
//     div.style.width = "400px";
//     div.style.height = "400px";
//     div.style.lineHeight = "400px";
//   };

//   const normal = () => {
//     div.style.width = "200px";
//     div.style.height = "200px";
//     div.style.lineHeight = "200px";
//   };

//   let growed = false;
//   let start = null;

//   const animate = (timestamp) => {
//     if (!start) start = timestamp;
//     const progress = timestamp - start;
//     if (progress >= 1000) {
//       growed ? normal() : grow();
//       growed = !growed;
//       start = timestamp;
//     }
//     requestAnimationFrame(animate);
//   };

//   centerDiv();
//   requestAnimationFrame(animate);
// }

// growingDiv();

// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.

// const myDiv = document.createElement("div");
// myDiv.id = "my-div";
// myDiv.style.width = "100px";
// myDiv.style.height = "100px";
// myDiv.style.backgroundColor = "red";
// myDiv.style.transform = "rotate(0deg)";
// myDiv.style.transition = "transform 0.5s ease";
// myDiv.style.marginTop = "50px";
// document.body.appendChild(myDiv);

// const startBtn = document.createElement("button");
// startBtn.id = "start-btn";
// startBtn.textContent = "Start";
// document.body.appendChild(startBtn);

// const stopBtn = document.createElement("button");
// stopBtn.id = "stop-btn";
// stopBtn.textContent = "Stop";
// document.body.appendChild(stopBtn);

// let intervalId;

// function rotateDiv() {
//   const currentAngle = parseInt(myDiv.style.transform.replace("rotate(", "").replace("deg)", ""));
//   myDiv.style.transform = `rotate(${currentAngle + 90}deg)`;
// }

// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(rotateDiv, 2000);
//   setTimeout(() => {
//     myDiv.style.transformOrigin = "center";
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   let count = 3;
//   stopBtn.textContent = `Stop ${count}`;
//   const countDownIntervalId = setInterval(() => {
//     count--;
//     stopBtn.textContent = `Stop ${count}`;
//     if (count === 0) {
//       clearInterval(countDownIntervalId);
//       clearInterval(intervalId);
//     }
//   }, 1000);
// });

// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin

// let div = document.createElement("div");
// div.style.position = "fixed";
// div.style.top = "0";
// div.style.left = "0";
// div.style.width = "150px";
// div.style.height = "150px";
// div.style.backgroundColor = "red";

// document.body.appendChild(div);

// let clickCount = 0;

// div.addEventListener("click", function() {
//     clickCount++;
//     if (clickCount === 1) {

//         div.style.left = window.innerWidth - parseInt(div.style.width) + "px";
//     } else if (clickCount === 2) {

//         div.style.top = window.innerHeight - parseInt(div.style.height) + "px";
//     } else if (clickCount === 3) {
//         div.style.left = "0";
//     } else {
//         clickCount = 0;
//         div.style.top = "0";
//         div.style.left = "0";
//     }
// });

// const LEFT_ARROW_KEY = 37;
// const UP_ARROW_KEY = 38;
// const RIGHT_ARROW_KEY = 39;
// const DOWN_ARROW_KEY = 40;

// function moveDiv(x, y) {
//   div.style.left = parseInt(div.style.left) + x + "px";
//   div.style.top = parseInt(div.style.top) + y + "px";
// }

// window.addEventListener("keydown", function (event) {
//   let distance = 10;
//   switch (event.keyCode) {
//     case LEFT_ARROW_KEY:
//       moveDiv(-distance, 0);
//       break;
//     case UP_ARROW_KEY:
//       moveDiv(0, -distance);
//       break;
//     case RIGHT_ARROW_KEY:
//       moveDiv(distance, 0);
//       break;
//     case DOWN_ARROW_KEY:
//       moveDiv(0, distance);
//       break;
//   }
// });

// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin.
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.

// let div = document.createElement("div");
// div.style.position = "fixed";
// div.style.top = "0";
// div.style.left = "0";
// div.style.width = "150px";
// div.style.height = "150px";
// div.style.backgroundColor = "red";

// document.body.appendChild(div);

// let clickCount = 0;

// div.addEventListener("click", function () {
//   clickCount++;
//   if (clickCount === 1) {
//     div.style.left = window.innerWidth - parseInt(div.style.width) + "px";
//   } else if (clickCount === 2) {
//     div.style.top = window.innerHeight - parseInt(div.style.height) + "px";
//   } else if (clickCount === 3) {
//     div.style.left = "0";
//   } else {
//     clickCount = 0;
//     div.style.top = "0";
//     div.style.left = "0";
//   }
// });

// const LEFT_ARROW_KEY = 37;
// const UP_ARROW_KEY = 38;
// const RIGHT_ARROW_KEY = 39;
// const DOWN_ARROW_KEY = 40;

// function moveDiv(x, y) {
//   div.style.left = parseInt(div.style.left) + x + "px";
//   div.style.top = parseInt(div.style.top) + y + "px";
// }

// window.addEventListener("keydown", function (event) {
//   let distance = 10;
//   switch (event.keyCode) {
//     case LEFT_ARROW_KEY:
//       moveDiv(-distance, 0);
//       break;
//     case UP_ARROW_KEY:
//       moveDiv(0, -distance);
//       break;
//     case RIGHT_ARROW_KEY:
//       moveDiv(distance, 0);
//       break;
//     case DOWN_ARROW_KEY:
//       moveDiv(0, distance);
//       break;
//   }
// });

// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin.
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin.

// let div = document.createElement("div");
// div.style.position = "fixed";
// div.style.top = "0";
// div.style.left = "0";
// div.style.width = "50px";
// div.style.height = "50px";
// div.style.backgroundColor = "red";

// if (localStorage.getItem("boxPosition")) {
//   let boxPosition = JSON.parse(localStorage.getItem("boxPosition"));
//   div.style.top = boxPosition.top + "px";
//   div.style.left = boxPosition.left + "px";
// }

// document.body.appendChild(div);

// let clickCount = 0;

// div.addEventListener("click", function() {
//   clickCount++;
//   if (clickCount === 1) {
//     div.style.left = window.innerWidth - parseInt(div.style.width) + "px";
//   } else if (clickCount === 2) {
//     div.style.top = window.innerHeight - parseInt(div.style.height) + "px";
//   } else if (clickCount === 3) {
//     div.style.left = "0";
//   } else {
//     clickCount = 0;
//     div.style.top = "0";
//     div.style.left = "0";
//   }

//   let boxPosition = { top: parseInt(div.style.top), left: parseInt(div.style.left) };
//   localStorage.setItem("boxPosition", JSON.stringify(boxPosition));
// });

// window.addEventListener("keydown", function(event) {
//   let distance = 10;
//   if (event.keyCode === 37) { // Left arrow key
//     div.style.left = parseInt(div.style.left) - distance + "px";
//   } else if (event.keyCode === 38) { // Up arrow key
//     div.style.top = parseInt(div.style.top) - distance + "px";
//   } else if (event.keyCode === 39) { // Right arrow key
//     div.style.left = parseInt(div.style.left) + distance + "px";
//   } else if (event.keyCode === 40) { // Down arrow key
//     div.style.top = parseInt(div.style.top) + distance + "px";
//   }

//   let boxPosition = { top: parseInt(div.style.top), left: parseInt(div.style.left) };
//   localStorage.setItem("boxPosition", JSON.stringify(boxPosition));
// });

// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur.
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq

// let img = document.createElement("img");
// img.src = "https://media.istockphoto.com/id/1449391563/photo/wild-baby-pig-tailed-macaque-in-the-tropical-paradise-of-da-nang-vietnam-in-southeast-asia.jpg?s=1024x1024&w=is&k=20&c=yLpy7gFCj9D0ezzMgvfoDQCzP-9O5kxrMIJ8PdG5NdE=";
// img.style.cssText = "width: 200px; height: 200px; position: absolute; left: 50%; bottom: 0; transform: translateX(-50%);";

// document.body.appendChild(img);

// document.addEventListener("keydown", function(event) {
//     if (event.code === "Space") {
//         img.style.bottom = parseInt(img.style.bottom) + 200 + "px";
//         setTimeout(function() {
//             img.style.bottom = "0";
//         }, 500);
//     }
// });

// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin.

// function addBox() {

//   function getRandomColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   const newBox = document.createElement("div");
//   newBox.style.width = "100px";
//   newBox.style.height = "100px";
//   newBox.style.margin = "10px";
//   newBox.style.float = "left";
//   newBox.style.backgroundColor = getRandomColor();

//   document.body.appendChild(newBox);
// }

// const newButton = document.createElement("button");
// newButton.innerHTML = "Add Box";
// newButton.onclick = addBox;

// document.body.appendChild(newButton);

// 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun

// let input = document.createElement("input");
// input.type = "number";
// input.addEventListener("input", function() {
//     let size = parseInt(input.value);
//     let width = size + 10;
//     let height = size + 10;
//     box.style.width = width + "px";
//     box.style.height = height + "px";
// });

// let box = document.createElement("div");
// box.style.width = "10px";
// box.style.height = "10px";
// box.style.backgroundColor = "red";

// document.body.appendChild(input);
// document.body.appendChild(box);
