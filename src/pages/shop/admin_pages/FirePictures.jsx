import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { db } from '../../../../firebase';
import { collection, doc, deleteDoc, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import DeleteIcon from '@mui/icons-material/Delete';

const q = query(collection(db, 'pictures'), orderBy('timestamp', 'desc'));

function App() {
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState('');
    const [imgurl, setImgurl] = useState('');
    const [price, setPrice] = useState('');
    const [oldprice, setOldprice] = useState('');

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
        addDoc(collection(db, 'pictures'), {
            name: name,
            imgurl: imgurl,
            price: price,
            oldprice: oldprice,
            timestamp: serverTimestamp()
        })
        setName('')
    };

    return (
        <div className="App mt-10">
            <h4 className='h4 text-center my-5'> Picture List</h4>
            <form className='flex flex-row justify-between m-3'>
                <TextField id="outlined-basic" label="name" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={name}
                    onChange={e => setName(e.target.value)} />
                <TextField id="outlined-basic" label="img url" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={imgurl}
                    onChange={e => setImgurl(e.target.value)} />
                <TextField id="outlined-basic" label="price" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={price}
                    onChange={e => setPrice(e.target.value)} />
                <TextField id="outlined-basic" label="old price" variant="outlined" style={{ margin: "0px 5px" }} size="small" value={oldprice}
                    onChange={e => setOldprice(e.target.value)} />
                <Button variant="contained" color="primary" onClick={addTodo}>Add</Button>
            </form>
            <ul>
                {todos.map((item, index) => <List className="todo__list" key={index}>
                    <ListItem>
                    
                        <ListItemText primary={item.item.name}/>
                        <ListItemText secondary={item.item.imgurl} />
                        <ListItemText secondary={item.item.price} />
                        <ListItemText secondary={item.item.oldprice} />
                    </ListItem>
                    <DeleteIcon fontSize="large" style={{ opacity: 0.7 }} onClick={() => { deleteDoc(doc(db, 'pictures', item.id)) }} />
                </List>)}
            </ul>
        </div>
    );
}
export default App;