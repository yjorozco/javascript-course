const name="bob";
const lastName="sandra";
const age = 25;
//const phrase = "my fullname is "+name+"  "+lastName+"and I'm"+age+"years";

const phrase = `my fullname is ${name}  ${lastName} and I\'m ${age} years`;

console.log(phrase);

const div = document.createElement('div');

div.innerHTML = `
<h1>my name is ${name}</h1>
<h3>my lastName is ${lastName}</h3>
<h6>my age is ${age}</h6>
<p>${phrase}</p>
`;

document.body.appendChild(div);


