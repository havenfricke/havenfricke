import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { AppState } from "../AppState";
import { PostCard } from "../components/PostCard";
import './styles/DemoPage.scss'


import { postService } from "../services/PostService";
import Pop from '../utils/Pop.js'

let limit = 6
let skip = 0

function DemoPage(){

    //API CALLS
    async function getPosts(){
        try {   
            await postService.getPosts(limit, skip)
        } catch (error) {
            Pop.error(error)
        }
    }

    async function next(){
        try {   
            skip = (skip + 6)
            await postService.getPosts(limit, skip)
        } catch (error) {
            Pop.error(error)
        }
    }

    async function back(){
        try {   
            if(skip <= 0){
                return
            } else {
                skip = (skip - 6)
                await postService.getPosts(limit, skip)
            }
        } catch (error) {
            Pop.error(error)
        }
    }

    //APPSTATE LOGIC
    const posts = AppState.posts.map(p => {
        return (
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6" key={p.id}>
            <PostCard post={p} />
        </div>
        )
    })


    //TRIGGER EFFECTS ON PAGE LOAD
    useEffect(() => {
        getPosts()
    }, [])


    return (
    <div className="container-fluid mx-0 px-0">
        <div className="row d-flex align-items-center justify-content-center mt-5 mx-0 px-0 top-element child-page parallax">
          <h1 className="text-center bg-white border py-2 text-dark text-break col-12 mx-2 px-xxl-5 px-xl-5 px-2 text-shadow cta-text"> 
           <span className="shadow-text">Demonstrations of Practice</span>
          </h1>
        </div>
        <div className="row mx-0 px-0">
            <h3 className="text-light p-2 bg-primary shadow-text">
                API Interfacing
            </h3>
        </div>
        <div className="row mx-0 px-0 justify-content-start">
            <div className="col-12 p-4 text-dark">
                <div className="row d-flex justify-content-center">
                    <p className="col-12 col-lg-8 border shadow rounded p-3 my-5">
                    Below are posts from https://dummyjson.com's open source API. 
                    I am able to complete this demonstration on Vue.js, Sveltekit, and React.js. 
                    This demonstrates the ability to communicate to an api with front-end technologies. 
                    You will also find the ability to sort posts with the buttons below the posts, "Back" and "Next". 
                    This is storing a value in the front end to send to the API so that the API can 
                    return the posts based on a specific query parameter that it accepts.
                    <br />
                    <br />
                    Click on a post to find out more about how this was set up with the MVC+S Model.
                    </p>
                </div>
            </div>
          
            {posts}

        </div>
        <div className="text-light justify-content-center row mx-0 px-0 mb-5">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-12 text-center mt-5">
                <span className="post-skip p-3 rounded bg-secondary selectable me-5" onClick={back}>&#8592; Back </span><span className="ms-5 post-skip p-3 rounded bg-secondary selectable" onClick={next}> Next &#8594;</span>
            </div>
        </div>
        <div className="row mx-0 px-0">
            <h3 className="text-light p-2 bg-primary">
                More coming soon...
            </h3>
        </div>
    </div>
    );
}

export default observer(DemoPage)