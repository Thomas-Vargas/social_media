import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faShare } from '@fortawesome/free-solid-svg-icons'

const DashBoardFeed = () => {
    return (
        <div className='dashboard-main'>
            <div className='container dashboard-feed'>
                <div className='row'>
                    <div className='col left-section'>
                        <div className='user'>
                            <img 
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeUl_DyPU6PcpmjVhwv42XDrVhhOC7lspJQ&usqp=CAU'
                                className='dashboard-img'
                            ></img>
                            <p>Jawny Jawnson</p>
                        </div>

                        <div className='list-group feed-links rounded-0'>
                            <a href='#' className='list-group-item list-group-item-action active'>Feed</a>
                            <a href='#' className='list-group-item list-group-item-action'>News</a>
                            <a href='#' className='list-group-item list-group-item-action'>Friends</a>
                            <a href='#' className='list-group-item list-group-item-action'>Messenger</a>
                        </div>

                    </div>

                    <div className='col-6 post-feed'>
                        <div className='container-fluid post-container'>
                            <div className='user-post'>
                                <div className=''>
                                    <img 
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeUl_DyPU6PcpmjVhwv42XDrVhhOC7lspJQ&usqp=CAU'
                                        className='user-post-img'
                                    ></img>
                                </div>
                                <div className='container'>
                                    <form>
                                        <div className='form-group'>
                                            <textarea
                                                className='form-control post-text-area'
                                                placeholder='Post something'
                                                
                                            ></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='divider'></div>

                            <div className='post-btns flex-row'>
                                <button className='post-btn'>Tag Friends</button>
                                <button className='post-btn'>Photo/Video</button>
                                
                            </div>
                        </div>

                        <div className='post-section'>
                            <div className='container p-0'>
                                <div className='example-post post-container'>
                                    <div className='post-user'>
                                        <img 
                                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeUl_DyPU6PcpmjVhwv42XDrVhhOC7lspJQ&usqp=CAU'
                                            className='user-image'
                                        ></img>
                                        <h3>Jawny Johnson</h3>
                                    </div>
                                    
                                    <div className='post-content'>
                                        <p>This is an example postThis is an example postThis is an example postThis is an example postThis is an example postThis is an example postThis is an example postThis is an example post</p>
                                    </div>

                                    <div className='post-btns'>
                                        <button className='user-post-btn'>
                                            <FontAwesomeIcon icon={faThumbsUp} size='lg' />
                                            <div>
                                                Like 
                                            </div>
                                        </button>
                                        <button className='user-post-btn'>
                                            <FontAwesomeIcon icon={faShare} size='lg' />
                                            <div>
                                                Share
                                            </div>
                                        </button>
                                    </div>

                                    <div className='comment-text-area'>
                                        <form>
                                            <div className='form-group'>
                                                <textarea
                                                    className='form-control comment'
                                                    placeholder='Comment'
                                                ></textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className='col right-section'>
                        <div className='right-content'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardFeed