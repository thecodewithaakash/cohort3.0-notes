// attributes and properties
// - setAttribute,getAttribute,removeAttribute,hasAttribute;
// - with dataset
// input.value(property,current state) vs input.getAttribute("value") (attribute,initial state)


// ### Attributes vs Properties
// 1. Attributes(static hote hai not dynamic): static & registered attribute - jisko hum change nhi kr sakte
    // - Predefined keywords in html.
    // - id,classes,src,alt,type,placeholder

// 2. Properties: values passed in attributes(current values present in attributes)
    // - id = "paraText"-> id is attribute but "paraText" is property
    

const h3 = document.querySelector('#paraText')
let res = h3.getAttribute('id') // it gives property of attribute --> "id" --> "paraText"
h3.setAttribute('width',"200") // ('AttributeName','argument')
console.log(res);
console.log(h3.getAttribute('class'));
console.log(h3.getAttribute('width'));
console.log(h3.hasAttribute('class')); // "true" if found else "false"
h3.removeAttribute('class')
console.log(h3);

/*
### Attributes
1. setAttribute("AttributeName","value") - Sets or updates an attribute on element
2. getAttribute("AttributeName") - get the value of attribute
3. removeAttribute("AttributeName") - Removes the attribute entirely
4. hasAttribute('AttributeName') - if found then return -> "True" else "false"
*/


// ### Creating inserting and removing elements from dom