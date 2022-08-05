import './header.css'
import { useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h1>Posterman sss</h1>  
            <div className='buttons'>
                <button onClick={() => navigate('/')} className='btn first'>Posts</button>
                <button onClick={() => navigate('/addposts')} className='btn first'>AddPost</button>
            </div>
        </div>
    )
}