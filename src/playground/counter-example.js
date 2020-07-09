 //jshint esversion :6

 //Classes and Component State Approach


 class Counter extends React.Component {

  constructor(props){
  super(props);
     this.handleAdd = this.handleAdd.bind(this);
     this.handleSub = this.handleSub.bind(this);
     this.handleReset = this.handleReset.bind(this);
     this.state = {
      count : 0
  };
  }

  componentDidMount(){
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount , 10);

      if(!isNaN(count)){
          this.setState(() => ({count}));
      }
  }

  componentDidUpdate(prevProps , prevState){
      if(prevState.count !== this.state.count){
          localStorage.setItem('count' , this.state.count);
      }
  }

  handleAdd(){
      this.setState((prevState) => {
          return{
          count : prevState.count + 1
          };

      });     
  }

  handleSub(){
      this.setState((prevState) => {
          return{
              count : prevState.count - 1

          };
      });
  }

  handleReset(){
      this.setState(() => {
          return{
              count : 0
          };

      });
  }

  render() {

    return(
         <div>
           <h1>Counter : {this.state.count}</h1>
           <button onClick = {this.handleAdd}>+1</button>
           <button onClick = {this.handleSub}>-1</button>
           <button onClick = {this.handleReset}>Reset</button>
         </div>

    );
  }
 }
 ReactDOM.render(<Counter /> , document.getElementById('root'));


 //ES6 approach

// let count = 0;

// const addOne = () => {
//   count++;
//   renderApp();
// };


// const minusOne = () => {
//  count--;
//  renderApp();
// };

// const Reset = () => {
//   count = 0;
//   renderApp();
// };

 

// const rootid =  document.getElementById('root');



// const renderApp = () => {

//   const templateTwo = (
//     <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//      <button onClick={minusOne}>-1</button>
//      <button onClick={Reset}>Reset</button>
//     </div>
//   )

//   ReactDOM.render(templateTwo , rootid);
// }

// renderApp();


