import './style.css'

// Basic Error handling
try{ 
  throw new Error('hellow world!');
} catch (e) {
  console.error(e);
}

console.log('afer the error');

// Error when element is not found 
const app = document.getElementById('appp');

// Option 1

/*
if (!app) {
  throw new Error('Cannot find element with id "appp".');
}
app.addEventListener('click', () => console.log('Hello from the event listener!'));
*/

// Option 2:
try{
  app.addEventListener('click', () => console.log('Hello from the event listener!'));
} catch (e) {
  console.error("Something went wrong.")
  console.error(e);
}

// setTimeout
function addOne(num) {
  return num + 1;
}

function logNumber(num) {
  console.log(num);
}

function addOneToOneAndLog() {
  const result = addOne(1);
  logNumber(result)
}

setTimeout(addOneToOneAndLog, 1000);

console.log('after setTimeout');