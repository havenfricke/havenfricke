import { observer } from "mobx-react-lite"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../AppState";
// import { SinglePost } from "../components/SinglePost";
import { postService } from "../services/PostService";
import Pop from "../utils/Pop";
import "./styles/PostsPage.scss"


function PostsPage(){

    const { id } = useParams()

    async function getPostById(){
        try {
            AppState.post = {}
            await postService.getPostById(id)
        } catch (error) {
            Pop.error(error)
        }
    }


    useEffect(() => {
        getPostById()
    }, [])

    const post = AppState.post

    return (
        <div className="row mx-0 px-0 d-flex justify-content-center mt-5">
            <div className=" col-10 text-light mt-5 pt-5 border">
                <h1 className="text-center mb-3 bg-light">{post.title}</h1>
                <p className="mx-xxl-5 mx-xl-5 mx-lg-5 mx-0 px-xxl-5 px-xl-5 px-lg-5 px-0">{post.body}</p>
            </div>
            <div className="col-10">
                <h3 className="text-light mt-5">How the data got here:</h3>
                <div className="border-start timeline row mt-5 mb-5">
                    <div className="border-top col-1">
                  
                    </div>
                    <div className="col-11 py-4 text-light">
                    Navigating to this page triggers an async function to a GET request in our "PostService.js". 
                    The function is created then called with <code>useEffect()</code>.<br/><br/>
                    Once here, the request is sent to the API asynchronously.
                    </div>
                    <div className="border-top col-2">
                      
                   </div>
                   <div className="col-10 py-4 text-light">
                    The response comes back from the API and it is then stored in <code>AppState.js</code>. 
                    The AppState is a class that is exported as a variable with the help of "<code>new Proxy</code>" that takes two arguments.
                    <br/>
                    <br/>
                    1) new AppStateClass and 2) <code>get</code> & <code>set</code> methods in a single object with a refactored <code>isValidProp</code> function encapsulated.
                    Get returns <code>"target[prop]"</code> after taking these in as arguments (target, prop). Set then makes <code>target[prop] = value</code> and finally returns <code>true</code>.
                   </div>
                   <div className="border-top col-3">
                   
                   </div>
                   <div className="col-9 text-light py-4">
                    The AppState is then accessed from a <code>DemoPage.jsx</code> then, mapped with <code>.map()</code> since the posts from the API have been stored in an App State array.
                    <br />
                    <br />
                    The return statement then brings back iterable HTML with binded data. The data is iterated using a unique key. A component is then passed props for the data to be styled.
                    It picks up the CSS and renders as options.
                   </div>
                   <div className="border-top col-4">
                   
                   </div>
                   <div className="col-8 text-light py-4">
                    Once you clicked on an option, the event triggered a rerouting function with React Router. 
                    The respective page was loaded. A <code>useEffect()</code> triggered a function to the service to make a GET request.
                    <br />
                    <br />
                    The <code>id</code> of the post clicked on is passed to the GET method in our services and a single object as the response is then stored in <code>AppState.js</code>.
                    It is then accessed, styled, and rendered.
                   </div>
                </div>
            </div>
        </div>
    )
}

export default observer(PostsPage);