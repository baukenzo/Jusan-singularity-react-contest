import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { fetchPosts, removePost } from "../../store/postsSlice";
import { useEffect, useState, } from "react";
import axios, {AxiosResponse} from 'axios'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


interface IPosts {
    id: number
    title: string
    body: string
}


export const Posts: React.FC<{}> = props => {
    const posts = useAppSelector(state => state.posts.list)

    const dispatch = useAppDispatch();

    /// пренос логики в другой компонент т.к каждый раз перезаписывался стейт при переходе по роутер дому
    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/`)
    //         .then((response: AxiosResponse) => {
    //             dispatch(fetchPosts(response.data))
    //             console.log('responsing', response.data)
    //         })
    // }, [])
    return (
        <div style={{padding: '15px', position: 'relative'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {posts && posts.map(item => {
                            return (
                                <Grid key={item.id} item xs={12} md={3} sm={5}>
                                    <Card sx={{ minWidth: 275, height: 250 }}>
                                        <CardContent style={{position: 'relative'}}>
                                                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                                {item.id}
                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                {item.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                {item.body}
                                                <br />
                                                </Typography>
                                                <button 
                                                    style={{position: 'absolute', top: '10px', right: '10px'}}
                                                    onClick={() => dispatch(removePost(item.id))}> ✕ </button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <button 
            style={{position: 'fixed', bottom: '25px', right: '25px', fontSize: '25px', height: '45px', width: '40px', backgroundColor:'dimgray', textAlign: 'center', color: 'white', cursor: 'pointer'}}
            onClick={() => window.scrollTo(0, 9200)}
            >{'↓'}</button>
        </div>
    )
}