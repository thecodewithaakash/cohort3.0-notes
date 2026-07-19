// “Events in JS are browser‑triggered actions (like click, keypress, load) that run attached handlers via addEventListener.”
// syntax: addEventListener('event',callback,options)

/* 
### Types of Events:
1. mouse Events - dblclick,mouseover,mouseleave
2. Pointer events - click
3. keyboard events - keypress,keydown,keyup
4. Input Events - input
5. Submit Events - submit - the form

*/

// const btn = document.querySelector('button');

// PointerEvent
// btn.addEventListener('click',(events)=> {
//     console.log(events);
// })

// btn.addEventListener('dblclick',(events)=> {
//     console.log(events);
// })

// moveover - events will fired when we hover on mouse
// btn.addEventListener('mouseover',(events)=> {
//     console.log(events);
// })

// mouseleave
// btn.addEventListener('mouseleave',(events)=> {
//     console.log(events);
// })

//keyboardEvent
// btn.addEventListener('keypress',(events)=> {
//     console.log(events);
// })

// window.addEventListener('keypress',(events)=> {
//     console.log(events);
// })

// window.addEventListener('keydown',(events)=> {
//     console.log(events);
// })

// ### Event Propagation
// - Event propagation is proportional to even traversal --> “Event propagation mirrors event traversal.”
// “Event propagation is the mechanism by which events travel through the DOM hierarchy in capturing and bubbling phases.”
// By default, JavaScript uses the bubbling phase for event propagation.
// Top → Bottom → Capturing phase (event travels from root(body) down to target).
// Bottom → Top → Bubbling phase (event travels back up from target(buton,div etc..) to root(body,html)).
// “Event propagation has two phases: capturing (top‑down) and bubbling (bottom‑up).”

// const btn = document.querySelector("button");
// const div = document.querySelector("div");
// const main = document.querySelector("main");
// const body = document.body;

// btn.addEventListener('click',(e) => {
//     console.log("button triggered");
// })

// div.addEventListener('click',(e) => {
//     console.log("div triggered");
// })

// main.addEventListener('click',(e) => {
//     console.log("main triggered");
// })

// body.addEventListener('click',(e) => {
//     console.log("body triggered");
// })

// “DOM hierarchy flows as: window → document → html → body → main → div → button.”

// ### capturing phase
// btn.addEventListener(
//   "click",
//   (e) => {
//     console.log("button triggered");
//   },
//   { capture: true },
// );

// div.addEventListener("click", (e) => {
//   console.log("div triggered");
// },{capture:true});

// main.addEventListener("click", (e) => {
//   console.log("main triggered");
// },{capture:true});

// body.addEventListener("click", (e) => {
//   console.log("body triggered");
// },{capture:true});

// shortcut way

// btn.addEventListener("click",(e) => {console.log("button triggered")},true);

// div.addEventListener("click", (e) => {
//   console.log("div triggered");
// },true);

// main.addEventListener("click", (e) => {
//   console.log("main triggered");
// },true);

// body.addEventListener("click", (e) => {
//   console.log("body triggered");
// },true);

// ### form events
// -- “Form events reload the page by default because the browser submits the form to the server when the submit button is clicked, triggering a full page refresh.”

// const form = document.querySelector("form");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");

// form.addEventListener('submit',(e) => {
//     e.preventDefault()
//     console.log('form event',e);

//     // console.dir(e.target);
//     // console.log("Name: ",e.target[0].value);
//     // console.log("Email: ",e.target[1].value);

//     let fullname = name.value;
//     let emailId = email.value;
//     console.log(fullname,emailId);

//     // name.value = ""
//     // email.value = ""

//     form.reset();
// })

// showing users card when user click on "submit" button
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const url = document.querySelector('#url')
const users = document.querySelector(".users");

form.addEventListener("submit", (e) => {
  console.log("submitted");
  e.preventDefault();

  card = `
    <div class="user_card">
               <div class="img_box">
                 <img src=${url.value}
                alt="">
               </div>
               <div class="text">
                <h3>Name - ${name.value}</h3>
                <p>Email - ${email.value}</p>
               </div>
            </div>
    `;

//   if (name.value.trim() === "" && email.value.trim() === "" & url.value.trim() === "") return;
//   users.innerHTML += card;

  //   ### more optimized
     if(name.value !== '' && email.value !== ''){
       users.innerHTML += card;
       form.reset();
     }else{
      alert("Name & Email must be provide")
     }
});

// ### iterating users
let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    dob: "1998-04-15",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    dob: "1996-09-28",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    dob: "2000-01-12",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    dob: "1997-07-03",
  },
  {
    id: 5,
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
    dob: "1995-12-19",
  },
];


usersData.forEach((user) => {
  users.innerHTML += `
    <div class="user_card">
                <div class="img_box">
                  <img src=${user.image} 
                 alt="">
                </div>
                <div class="text">
                 <h3>Name - ${user.name}</h3>
                 <p>Email - ${user.email}</p>
                </div>
             </div>
    `;
});

/* 
### Notes
- 

### Questions:
- real world implementation of bubbling & capturing phase ? 
*/
