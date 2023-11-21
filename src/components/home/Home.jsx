import { Link } from 'react-router-dom'
import './home.css'
import Collapse from '../../assets/svg-elements/Collapse'
import HomeSvg from '../../assets/svg-elements/HomeSvg'
import Search from '../../assets/svg-elements/Search'
import { useDispatch } from 'react-redux'
import { FetchFromPlaylist } from '../../store/Modules/LibraryList'
import { useEffect } from 'react'

export default function Home() {
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
                                        Artist
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
                                    <li>
                                        <div className="list">
                                            <div className="list-image">
                                                <img src="https://mosaic.scdn.co/640/ab67616d00001e0260de03184044e5f69745802fab67616d00001e02a96efbf231ca824132bfd2fcab67616d00001e02e2232dff518054d6ddab86aeab67616d00001e02f71666f55aad8ccabbb81a14" alt="" />
                                            </div>
                                            <div className="list-text">
                                                <h3>My Playlist</h3>
                                                <p>Playlist • Stalker</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right"></div>
                </section>
                <div className="player">

                </div>
            </main>
        </>
    )
}
