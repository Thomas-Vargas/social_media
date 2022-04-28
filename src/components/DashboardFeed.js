import React from 'react'

const DashBoardFeed = () => {
    return (
        <div className='dashboard-main'>
            <div className='container dashboard-feed'>
                <div className='row'>
                    <div className='col'>
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
                                                placeHolder='Post something'
                                                
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

                        <div className='post-example'>

                        </div>
                    </div>

                    <div className='col test'>
                        3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardFeed