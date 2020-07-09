//jshint esversion : 6

// Classes and Component State Method

class VisibilityToggle extends React.Component{
  constructor(props){
      super(props);
  this.handleToggleVisibility = this.handleToggleVisibility.bind(this);    
  this.state = {
   visibility : false
  };
  }
  

  handleToggleVisibility(){
      this.setState((prevState) => {
          return{
              visibility : !prevState.visibility

          };
      });

  }



  render(){
      return(

          <div>
          <h1>Visibility Toggle</h1>
          <button onClick = {this.handleToggleVisibility} >
              {
                  this.state.visibility ? 'Hide Details' : 'Show Details'
              }
          </button>

          {
              this.state.visibility && (
                  <p>These are your options!</p>
              )
          }

          </div>             
      )         
  }
}

ReactDOM.render(<VisibilityToggle /> , document.getElementById('root'))












//ES6 method

// let visibility = false;

// const app = {
//   title : "Visibility Toggle"
// };

// const clicked = () => {
  
//   visibility = !visibility;
  
//   render();

// };

// const render = () => {

//   const template = (

//     <div>
//     <h1>{app.title}</h1>
//     <button onClick = {clicked}>
//       {
//         visibility ? 'Hide Details' : 'Show Details'
//       } 
      
//     </button>

//     {
//          visibility && (
//            <p>"These are your options!"</p>      
//          )
        
//       }
  
//     </div>
//   );
  
//   ReactDOM.render(template , rootid);
// }

// const rootid = document.getElementById('root');


// render();


