import React from "react";
import { useEffect, useState } from "react";
import axios, {AxiosResponse} from 'axios'

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
            posts page

            {
                posts.map(item => {
                    return (
                        <div>
                            <p>{item.id}</p>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}