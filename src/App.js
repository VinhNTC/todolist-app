import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuNgang } from './components/MenuNgang';
import { TodoContextProvider } from './context/TodoContext';
import { About } from './components/About';
import { TodoAppTimeline } from './components/TodoAppTimeline';
import { ToDoList } from './components/Todo';

function App() {
  return (
    <div className="App">
      <div className='Text'>
          <h1>MY APP</h1>
      </div>
        <TodoContextProvider>
          <BrowserRouter>
            {/* <!-- Menu ngang --> */}
            <MenuNgang />
            {/* Định tuyến */}
            <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/todo" element={<ToDoList/>}/>
              <Route path="/timeline" element={<TodoAppTimeline/>}/>
            </Routes>
          </BrowserRouter>
        </TodoContextProvider>
    </div>
  );
}

export default App;