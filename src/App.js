import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const Names=['abid','hossain','masum'];
  const jobs=['cricket','football','audience'];
  const products=[
    {name:'photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
        {products.map(product=><Product product={product}></Product>)}
        {Names.map(name=><Person name={name}></Person>)}
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    margin:'10px'
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:'2px solid goldenrod',
    width:'400px'

  }
  return (
  <div style={personStyle}>
    <h1>Name : {props.name}</h1>
    <h3>My Profession: {props.job}</h3>
  </div>
  );
}
function Users(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users </h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count,setCount]=useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  );
}
export default App;
