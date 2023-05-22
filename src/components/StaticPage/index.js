import './index.css'

function StaticPage(){
    return(
        <div className='container'>
            <div className='bg-container'>
                <div className='link-container'>
                    <a href="https://www.kratinmobile.com/" target="_blank" rel="noopener noreferrer" className="kratin-website">www.kratinmobile.com</a>
                </div>
                <div className='main-page'>
                    <div className="top-container">
                        <img src="https://kratinmobile.com/css/images/kratinlogo256.png" className="logo" alt="kratin-logo"/>
                        <h1 className="main-heading">Let's <span className="innov">Innovate!</span></h1>
                        <hr className='hr-line'/>
                    </div>
                    <div className='profile-container'>
                        <p className="profile-heading">How can you help Sunita Sharma (65+ years <br/> old) to live a healthier and better life?</p>
                        <div className='image-description-container'>
                            <img src="https://images.unsplash.com/photo-1525599428495-0441bd5c67de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b2xkJTIwbGFkeXxlbnwwfHwwfHw%3D&w=1000&q=80" className="lady-image" alt='profile'/>
                            <div>
                                <p className="profile-description">Identify one use case for elderly care (for the age group <br />
                                65+) and create a <span className="descript">working prototype</span> to demonstrate  <br />
                                    your idea using technology known to you.</p>
                                <p className="efforts-description">Expected Efforts: 2-3 days</p>
                            </div>
                        </div>
                    </div>
                    <h1 class="activity-heading">What we are looking for this in this activity?<span><hr className='line'/></span></h1>
                    <div className='activity-container'>
                        <div className='activity'>
                            <p className='activity-term'>Innovation & Ideation</p>
                            <ul className="activity-points">
                                <li >Originality in idea</li>
                                <li >Research skill</li>
                                <li >Value outcome</li>
                            </ul>
                        </div>
                        <div className='activity'>
                        <p className='activity-term'>Coding Skills</p>
                            <ul className="activity-points">
                                <li >Logic</li>
                                <li >Rapid Prototyping</li>
                                <li >Coding Practice</li>
                            </ul>
                        </div>
                        <div className='activity'>
                        <p className='activity-term'>Your magic touch</p>
                            <ul className="activity-points">
                                <li >Secret ingredient for going towards expertise</li>
                            </ul>
                        </div>
                
                    </div>
                    <h1 class="activity-heading">Process<span><hr className='line process'/></span></h1>
                    <ul>
                        <li className='process-points'>Check-in  code in a GitHub repo with README containing description and screenshot </li>
                        <li className='process-points'>Share your GitHub Link in <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYcshu300jgYgms3mfX8-HxgVvOcEmzTJkj0JWeFT4PI7K-Q/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" className=''>Exercise Submission</a></li>
                        <li className='process-points'>Your magic touch</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
export default StaticPage