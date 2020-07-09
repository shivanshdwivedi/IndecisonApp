// jshint esversion :6

const userapp = {
    title : "Indecision App",
    subTitle : "This is some info",
    options : []

};

function getInfo(options){

  if(userapp.options.length > 0){
    return("Here are your options");
  } 
  else{
    return("No options");
  }

}

const onFormSubmit = (e) => {

e.preventDefault();

const opt = e.target.elements.option.value;

if(opt){
  userapp.options.push(opt);
  e.target.elements.option.value = '';
}
renderApp();
};

const reset = () => {

  userapp.options.length = 0;
  renderApp();

};

const makeDecision = () => {

  const decidedNum = Math.floor(Math.random() * userapp.options.length);
  const selectedNum = userapp.options[decidedNum];
  alert(selectedNum);

};




const rootid =  document.getElementById('root');


const renderApp = () => {
  const template = (  
    <div>
    
        <h1>{userapp.title}</h1>
        {userapp.subTitle && <p>{userapp.subTitle}</p>}
         
        <p>{getInfo(userapp.options)}</p>
        <button disabled = {userapp.options.length === 0} onClick = {makeDecision}>What should I do</button>
        <ol>
        {
          userapp.options.map((items) => {

          return <li key = {items}>{items}</li>;

           })
         }
        
        </ol>
        
      <form onSubmit = {onFormSubmit}>
        <input type = "text" name = "option" />
        <button>Add Option</button>
        <button onClick = {reset}>Remove All</button>
      </form>
      </div>
    );

    ReactDOM.render(template , rootid);
}

renderApp();
