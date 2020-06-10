class List
{
    constructor()
    {
        this.data = [];
    }

    add(data)
    {
        this.data.push(data);
        console.log(this.data);
    }

}
class TodoList extends List
{
    constructor()
    {
        super();
    }
}

var myList = new TodoList;

document.getElementById('newTodo').onclick = () => myList.add('Alan');


let array = [2,5,8,9];

const fruit = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'grapes', quantity: 5}
];

const mapped = array.map(function (e, index) {
    console.log(index);
    return e * -2;
});

const sum = array.reduce(function (total, next) {
    return total + next;
});

const even = array.filter((e)=>{
    return e % 2 == 0;
})

const found = fruit.find(e => e.name == 'apples');

console.log(mapped);
console.log(sum);
console.log(even);
console.log(found);

const person = {
    'name':'Alan',
    'age':30,
    'address': {
        'street': 'Snowball',
        'city': 'Coquitlam',
        'country': 'Canada'
    }
}


const { name, age, address: {  country } } = person;

// console.log(`${name}, ${age} years old, lives in ${country}.`);

const returnText = ({name, age, address: { country }}) => console.log(`${name}, ${age} years old, lives in ${country}.`);
returnText(person);


const myPromise = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve('OK')},2000)
});

myPromise().then(response => {
    // console.log(response);
}).catch(erro => {
    console.log(erro)
});

async function executePromise() 
{
    const response = await myPromise();
    console.log(response);
}
executePromise()