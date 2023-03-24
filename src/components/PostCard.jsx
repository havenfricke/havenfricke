import { Link } from 'react-router-dom'
import { AppState } from '../AppState'
import './styles/PostCard.scss'

export function PostCard( { post } ) {

    function cleanState(){
        AppState.post = {}
    }

    return (
        <Link onClick={cleanState} to={`posts/${post.id}`}>
            <div tabIndex={0} className="bg-light p-4 m-3 rounded shadow post-card text-start selectable-add"> 
                <span className='border-bottom row bg-secondary rounded p-2 text-shadow'>Post #{post.id}</span>
                <br/> {post.title}<br />
            </div>
        </Link>
    )
}