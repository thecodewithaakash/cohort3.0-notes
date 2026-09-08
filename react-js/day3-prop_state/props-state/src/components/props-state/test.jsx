
export const one = () => {
    console.log("One");
}

export const two = () => {
    console.log("two");
}

const Three = () => {
    console.log("three");
}

const Four = () => {
    console.log("four");
}

export {Four}

// Only one default export allowed per module. 
export default Three;
// export default Four;