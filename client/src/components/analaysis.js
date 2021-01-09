import '../styles/styles.css';


function Analysis({ setPage, insights }) {
    

    return (
      <div>
          <h1>RESULTS</h1>
          <p>Study time: {insights[0]}</p>  
          <p>Chores: {insights[1]}</p>  
          <p>Break: {insights[2]}</p>  
          <p> Insights: {console.log("some message")}</p> 
          <button onClick = {() => { 
              
          }}>RESET</button>
      </div>
    );
  }
  
  export default Analysis;
  