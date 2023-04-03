import { Link } from 'react-router-dom'
import { AppState } from '../AppState'
import './styles/PostCard.scss'

export function PostCard( { post } ) {

    function cleanState(){
        AppState.post = {}
    }

    return (
        <Link onClick={cleanState} to={`posts/${post.id}`}>
            <div tabIndex={0} className="bg-light p-3 my-3 rounded shadow-text post-card selectable rounded selectable-add"> 
                <span className='border-bottom row bg-secondary rounded p-1 text-shadow text-center'>Post #{post.id}</span>
                <span className='row mx-1 post-text'><br/> {post.title}<br /></span>
            </div>
        </Link>
    )
}