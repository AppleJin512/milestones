import React, { useEffect, useState } from 'react';
import Picture from './Picture';
import { FormControl, Grid, Pagination, Typography, Divider, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import useStyles from '../../styles/shop_style';

const styles = {
    select: {
        height: '25px',
        fontSize: '13px',
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '5px',
        paddingRight: '20px',
        marginLeft: '10px',
        backgroundPosition: 'right 0.2rem center'
    },
    ptext: {
        fontSize: '14px',
        marginTop: '2px',
        marginLeft: '7px',
        marginRight: '7px'
    }
}

const ColorButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: ' #f47064',
    width: '100px',
    borderRadius: '0px',
    fontSize: '16px',
    '&:hover': {
        backgroundColor: ' #f47064',
    },
}));

function ProductList() {
    const [pictures, setPictures] = useState([]);
    const [picbump, setPicbump] = useState([]);
    const [paginationCount, setPaginationCount] = useState(0);
    const [totalNum, setTotalNum] = React.useState(0);
    const [pageNum, setPageNum] = React.useState(12);
    const [pageid, setPageid] = React.useState(1);
    const [openBackdrop, setOpenBackdrop] = useState(false);
    
    
    useEffect(() => {
        setOpenBackdrop(true);
        const q = query(collection(db, 'pictures'));
        onSnapshot(q, (snapshot) => {
            setTotalNum(snapshot.docs.length);
            setPaginationCount(Math.ceil(snapshot.docs.length / pageNum));
            setPicbump(snapshot.docs.map(doc => ({
                    id: doc.id,
                    item: doc.data()
                })
            ));
        });
    }, []);


    useEffect(() => {
        let buf = [];
        if (picbump.length === 0) return;
        for (let i = 0; i < pageNum; i++) {
            if (picbump[i + (pageid - 1) * pageNum] !== undefined){
                buf.push(picbump[i + (pageid - 1) * pageNum]);
            } 
            
        }     
        setPictures(buf);
        setOpenBackdrop(false);
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageid, picbump]);
    useEffect(()=>{
        setOpenBackdrop(true);
        setPaginationCount(Math.ceil(picbump.length / pageNum));
        setPageid(1);
        let buf=[];
        for (let i = 0; i < pageNum; i++) {
            if (picbump[i] !== undefined){
                buf.push(picbump[i]);
            } 
            
        }     
        setPictures(buf);
        setOpenBackdrop(false);
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNum])

    const handleChange = (e) => {
        setPageNum(e.target.value);
    };

    const classes = useStyles();

    return (
        <div className='container mx-auto pt-5'>
            <div className='flex flex-row mt-3 mb-btn-hide px-6 justify-between'>
                <div>
                    <ColorButton
                        onClick={e=>{
                            e.preventDefault();
                            setPageid(pageid-1);
                        }}
                        
                        disabled={pageid===1?true:false}
                    >PREVIOUS</ColorButton>
                </div>
                <div>
                    <p className='mt-2'>Page {pageid} of {paginationCount}</p>
                </div>
                <div>
                    <ColorButton
                        onClick={e=>{
                            e.preventDefault();
                            setPageid(pageid+1);
                        }}
                        disabled={pageid===paginationCount?true:false}
                    >NEXT</ColorButton>
                </div>


            </div>
            <div className='mt-3 md:px-12 lg:px-24 mb-btn-show'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 6, md: 12 }} >
                    <Grid item sm={3} md={6} className="flex item-stretch content-center">
                        <Typography component="p" style={styles.ptext}>FOUND : {totalNum} </Typography> <Divider orientation="vertical" flexItem /> <Typography component="p" style={styles.ptext}> ITEM PER PAGE </Typography>
                        <FormControl>
                            <select
                                value={pageNum}
                                onChange={handleChange}
                                style={styles.select}
                            >
                                <option value={12}>12</option>
                                <option value={24}>24</option>
                                <option value={48}>48</option>
                                <option value={72}>72</option>
                            </select>

                        </FormControl>

                    </Grid>
                    <Grid item xs={3} sm={3} md={6} className="grid justify-items-end">
                        <Pagination
                            count={paginationCount}
                            size="small"
                            value={pageid}
                            onChange={(e, v) => {
                                e.preventDefault();
                                setPageid(v);
                                // console.log(v)
                            }}
                        />
                    </Grid>
                </Grid>
            </div>

            <div className='flex container flex-wrap md:px-12 sm:px-12 lg:px-24 px-6  justify-con '>
                {pictures.map((ele, i) => {
                    if (ele.item.show_state === true) ele.display_style = classes.customize_button_container;
                    else if (ele.item.show_state === false) ele.display_style = classes.customize_button_container_hidden;

                    return (
                        <Picture key={i} {...ele} />
                    )
                    })}
            </div>
            {/* <PageBackdrop openBackdrop={openBackdrop} /> */}
        </div>
    );
}

export default ProductList;