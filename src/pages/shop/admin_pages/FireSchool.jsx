import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { db } from '../../../../firebase';
import { collection, doc, deleteDoc, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import DeleteIcon from '@mui/icons-material/Delete';

const q = query(collection(db, 'schools'), orderBy('timestamp', 'desc'));

function App() {
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState('');
   

    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            setTodos(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [name]);

    const addTodo = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'schools'), {
            name: name,
            

       
            timestamp: serverTimestamp()
        })
        setName('')
    };



    // useEffect(() => {
    //     addToMilestone(todos);
    // }, [name, todos])
    
    // const addToMilestone = (data) => {
    //     console.log('data', data)
    //     for (let i = 0; i < data.length; i++) {
    //         let temp_data = {};
    //         temp_data = data[i]
    //         addDoc(collection(milestone_db, 'orders'), {
    //             email: temp_data.email,
    //             image: temp_data.image,
    //             imageurl: temp_data.imageurl,
    //             picid: temp_data.picid,
    //             picname: temp_data.picname,
    //             picprice: temp_data.picprice,
    //             plaque: temp_data.plaque,
    //             playername: temp_data.playername,
    //             school: temp_data.school,
    //             sign: temp_data.sign,
    //             signurl: temp_data.signurl,
    //             size: temp_data.size,
    //             timestamp: temp_data.timestamp,
    //         })
    //     }
    // };

    return (
        <div className="App mt-10">
            <h4 className='h4 text-center my-5'> School List</h4>
            <form className='flex flex-row justify-between m-3'>
                <TextField id="outlined-basic" label="name" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={name}
                    onChange={e => setName(e.target.value)} />
              
                
               
                <Button variant="contained" color="primary" onClick={addTodo}  >Add</Button>
            </form>
            <ul>
                {todos.map((item, index) => <List className="todo__list" key={index}>
                    <ListItem>                     
                        <ListItemText primary={item.item.name}/>
                    </ListItem>
                    <DeleteIcon fontSize="large" style={{ opacity: 0.7 }} onClick={() => { deleteDoc(doc(db, 'schools', item.id)) }} />
                </List>)}
            </ul>
        </div>
    );
}
export default App;