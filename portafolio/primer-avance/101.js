// /* Hdez Muñoz Fernando D. 4°B. */

// var object = {"a":"foo", "b":"bar", "c":"baz"}
// `a` is inaccessible
// Object.defineProperty(object , 'a', {
// enumerable: false,
// });
// for (var key in object) {
// if (object.hasOwnProperty(key)) {
// console.log('object.' + key + ', ' + object[key])
// }
// }

// /* ======================================== */

// const foo = function() {
//         console.log("I am the LIFE")
// } ();

// var msg = "Hello"
// const bar = (function (msg)) {
//     console.log("Message: ")
// }

// /* ========================================= */

// const foo = function sun(x, y) {
//     return x + y
// }

// console.log(foo(56, 34))
// console.log(sum(45, 89)) // No se puede invoxcar directamente a la funcion.

// /* ============================================ */

// var say = function say(times) {
//     if (times > 0) {
//         console.log("Hello")
//         say(times - 1)
//     }    
// }

// var saysay = say
// say = "Oops!"
// saysay(5)

// /* ============================================ */

// var bar = (msg) => { console.log("Hola")

//     foo()
//     bar("Hello")
// }

// /* ============================================ */

// son para los api, consumo de datos
// function persons(p, ...person){
// 	person.forEach(args => {
// 	 console.log("P -- " + args + ":" + p);
//  	});
// }

// persons("Hola" ,"Foo", "Bar", "Joe", "Doe")

// API: SWAPI (the star wars api)

// /* ============================================ */

// function persons(p, ...person) {
//     person.forEach(args => {
//         console.log("P -- " + args + persons);
//     });
// }

// /function hello(msg="Hello World", person = "foo"){
//   console.log(msg + person)
// }

// hello("Ray", "Hello")

// /* ============================================= */

// var url = "https://api.stackexchange.com/2.2/questions/featured order=desc&sort=activity&site=stackoverflow"

// var responseData = fetch(url).then(response => response.json());
// responseData.then(({items, has_more, quoata_,ax, quota_remaining}) => {
//   for({title, owner, is_answered} of items) {
// 	console.log("Q: " + title + ".. is answered: " + is_answered)
//   }
// })

// /* ============================================== */

// fetch(url)
//   .then(response => response.json())
//   .then(response => {
//     response.forEach(element => {
//       console.log(element.title);
//     });
//   });
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content_type": "application/json"
//     },
//     body: JSON.stringify({
//       userId: 1, 
//       title: "lorem ipsum etc etc"
//     })
//   }).then(response => response.json())
//   .then(response => console.log(response))

// /* =============================================== */

// /* Fin de portfolio */
