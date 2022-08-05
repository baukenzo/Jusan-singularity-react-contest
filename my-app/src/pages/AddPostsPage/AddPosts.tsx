import React, { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { addPost } from "../../store/postsSlice";
import { styled } from '@mui/material/styles';
import type {FormEvent} from 'react';

interface IPosts {};

const Form = styled('form')`
   position: relative;
   max-width: 400px;
   margin: 50px auto 0;
   background: white;
   border-radius: 30px;
`;

const FormInner = styled('div')`
   padding: 50px;
`;

const Input = styled('input')`
    display: block;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #E9EFF6;
    line-height: 40px;
    border-width: 0;
    border-radius: 20px;
`;

const TextArea = styled('textarea')`
    display: block;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #E9EFF6;
    line-height: 40px;
    border-width: 0;
    border-radius: 20px;   
    resize: none;
`

type Forms = {
    id: number
    title: string
    body: string
}



export const AddPosts: React.FC<IPosts> = props => {
    const [id, setId] = useState<number>(101);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const dispatch = useAppDispatch();

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setId(id + 1)
        let formik: Forms = {
            id,
            title,
            body
        }
        dispatch(addPost(formik))
        console.log(formik)
        setTitle('')
        setBody('')
        alert('Post added to the bottom of the list successfully. check')
    }

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(event.target.value)
    }

    return (
        <div>
            <Form onSubmit={event => {
                    onSubmit(event)
                }}>
                <FormInner >
                    <Input type='text' placeholder="Title" value={title} onChange={handleTitleChange}/>
                    <TextArea placeholder="your text..." rows={3} value={body} onChange={handleBodyChange}/>
                    <Input disabled={!body || !title} type="submit" value="Submit"/>
                </FormInner>
            </Form>
        </div>
    )
}