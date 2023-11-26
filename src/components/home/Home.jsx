import { Link } from 'react-router-dom'
import './home.css'
import Collapse from '../../assets/svg-elements/Collapse'
import HomeSvg from '../../assets/svg-elements/HomeSvg'
import Search from '../../assets/svg-elements/Search'
import { useDispatch, useSelector } from 'react-redux'
import { FetchFromPlaylist } from '../../store/Modules/LibraryList'
import { useEffect } from 'react'
import LikeBtn from '../../assets/svg-elements/LikeBtn'



export default function Home() {
    let playlist = useSelector((state) => state.playlist.playlists)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchFromPlaylist())
    }, [dispatch]);

    return (
        <>
            <main className='home'>
                <section >
                    <div className="left">
                        <nav>
                            <ul>
                                <Link to={'/'}>
                                    <li style={{ color: '#fff' }}>
                                        <HomeSvg />
                                        Home
                                    </li>
                                </Link>
                                <Link to={'/search'}>
                                    <li>
                                        <Search kengligi={'20px'} />
                                        Search
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                        <div className="library">
                            <div className="library-navigatin">
                                <div className="navigation-title">
                                    <div className="title-left">
                                        <span className='icon'>
                                            <Collapse />
                                        </span>
                                        Your Library
                                    </div>
                                    <div className="title-right">
                                        <button className='plus'>
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                        <button className='rightBtn'>
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="navigation-info">
                                    <span className='nav-filter'>
                                        Playlists
                                    </span>
                                </div>
                            </div>
                            <div className="library-list">
                                <header>
                                    <button className='search-btn'>
                                        <Search kengligi={'16px'} />
                                    </button>
                                    <button className='resent-btn'>
                                        Recents
                                        <i className="fa-solid fa-list-ul"></i>
                                    </button>
                                </header>
                                <ul>
                                    <li >
                                        <div className="list">
                                            <div className="list-image">
                                                <img src='' alt="" />
                                            </div>
                                            <div className="list-text">
                                                <h3></h3>
                                                <p>Playlist • Stalker</p>
                                            </div>
                                        </div>
                                    </li>
                                    {/* {
                                        playlist?.map((item, index) => (

                                            <li key={index}>
                                                <div className="list">
                                                    <div className="list-image">
                                                        <img src={item.images[0].url} alt="" />
                                                    </div>
                                                    <div className="list-text">
                                                        <h3>{item.name}</h3>
                                                        <p>Playlist • {item.owner.display_name}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }  */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <header>
                            <div className="left-header">

                            </div>
                            <div className="right-header"></div>
                        </header>

                    </div>
                </section>
                <div className="player">
                    <div className="player-cover">
                        <div className="player-content">
                            <div className="player-img">
                                <img src="https://i.scdn.co/image/ab67616d00004851a7717523c2f13a93b89b8886" alt="olayer-image" />
                            </div>
                            <div className="player-text">
                                <div className="player-description">
                                    <h5>Там ревели горы</h5>
                                    <p>Miyagi & Andy Panda</p>
                                </div>
                            </div>
                            <button className="likeBtn">
                                <LikeBtn />
                            </button>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
