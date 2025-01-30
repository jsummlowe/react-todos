import './App.css';
import TodoTable from './components/TodoTable'; 

function App() {
  const todos=[
    {rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "Eric"},
    {rowNumber: 2, rowDescription: "FeedS cat", rowAssigned: "Jessica"},
    {rowNumber: 3, rowDescription: "Feed fish", rowAssigned: "Baba"},
  ]
  return (
    <div className='mt-5 container'>
      <div className='card'> 
            <div className='card-header'>
               <p>Your todo's</p>
            </div>
            <div className='card-body'>
               <TodoTable todos={todos} />
          </div>
        
      </div>
   
    </div>
  );
}

export default App;
