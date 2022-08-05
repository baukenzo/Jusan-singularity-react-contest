import React from "react";
import { useEffect, useState } from "react";
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
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then((response: AxiosResponse) => {
                setPosts(response.data)
                console.log('responsing', response.data)
            })
    }, [])
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    { posts.map(item => {
                            return (
                                <Grid item xs={3}>
                                    <Card sx={{ minWidth: 275 }}>
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