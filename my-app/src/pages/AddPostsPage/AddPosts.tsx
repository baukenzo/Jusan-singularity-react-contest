import React, { useState } from "react";
import { styled } from '@mui/material/styles';

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
    const [id, setid] = useState<number>(101);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let formik: Forms = {
            id,
            title,
            body
        }
    
        console.log(formik)
    }

    console.log(title, body)
    return (
        <div>
            <Form>
                <FormInner>
                    <Input type='text' placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <TextArea placeholder="your text..." rows={3} value={body} onChange={(e) => setBody(e.target.value)}/>
                    <Input type="submit" value="Submit"/>
                </FormInner>
            </Form>
        </div>
    )
}