import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';


export const ToDoList = () => {
    const { data, setData, name, setName, deadline, setDeadline } = useContext(TodoContext);
    const handleClick = (e) => {
        e.preventDefault();
        const newItem = {
            id: data.length + 1,
            name: name,
            deadline: deadline,
            isCompleted: false
        };
        setData([...data, newItem]);
        setName('');
        setDeadline('');
    }
    
    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <h2 className='todo list'>TODO LIST</h2>
            {/* 
            
            */}
            <table style={{border: '1px solid blue', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.15', width:'300px', padding: '20px', paddingLeft:'50px', paddingRight:'50px', border: '4px solid #b1154a', boxShadow:'4px 4px 10px rgba(0,0,0,0.4)', borderRadius: '10px'}}>
                <tbody>
                    <tr>
                        <td><b>Name:</b></td>
                        <td>
                        <input style={{width:'200px' ,display:'inline-block', border: 'none', resize:'vertical', padding: '15px', borderRadius:'15px', border: '0', boxShadow:'4px 4px 10px rgba(0,0,0,0.2)'}} value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        </td>
                    </tr>
                    <br/>
                    <tr>
                        <td><b>Deadline:</b></td>
                        <td>
                            <input style={{width:'200px' ,display:'inline-block', border: 'none', resize:'vertical', padding: '15px', borderRadius:'15px', border: '0', boxShadow:'4px 4px 10px rgba(0,0,0,0.2)'}} value={deadline} onChange={(e) => {
                                setDeadline(e.target.value);
                            }} />
                        </td>
                        <br/>
                    </tr>
                </tbody>
                <tfoot>
                    <br/>
                    <tr>
                        <td colSpan="2">
                            <button className="btn" onClick={handleClick}><b>Add Task</b></button>
                        </td>
                    </tr>
                </tfoot>
             </table>
             <br/>
            {data.map((item) => {
                //process js

                return (
                    <div>
                        
                        {item.name} - {item.deadline} : { item.isCompleted ? 'DONE' : 'IN-PROGRESS'}
                        <br/>
                        <br/>
                    </div>

                )
            })}
        </div>
    )
};