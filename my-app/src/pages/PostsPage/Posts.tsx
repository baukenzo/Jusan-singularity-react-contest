import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { fetchPosts } from "../../store/postsSlice";
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
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {posts && posts.map(item => {
                            return (
                                <Grid key={item.id} item xs={3}>
                                    <Card sx={{ minWidth: 275, height: 250 }}>
                                        <CardContent>
                                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                {item.id}
                                                </Typography>
                                                <Typography variant="h5" component="div">
                                                {item.title}
                                                </Typography>
                                                <Typography variant="body2">
                                                {item.body}
                                                <br />
                                                </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </div>
    )
}