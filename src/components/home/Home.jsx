import { Link } from 'react-router-dom'
import './home.css'
import Collapse from '../../assets/svg-elements/Collapse'
import HomeSvg from '../../assets/svg-elements/HomeSvg'
import Search from '../../assets/svg-elements/Search'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import LikeBtn from '../../assets/svg-elements/LikeBtn'
import RandomBtn from '../../assets/svg-elements/RandomBtn'
import Preious from '../../assets/svg-elements/Previous'
import PlayBtn from '../../assets/svg-elements/PlayBtn'
import NextBtn from "../../assets/svg-elements/NextBtn"
import ReapedBtn from '../../assets/svg-elements/ReapedBtn'
// import { FetchFromPlaylist } from '../../store/Modules/LibraryList'



export default function Home() {
    let playlist = useSelector((state) => state.playlist.playlists)
    const [hover, setHover] = useState('hsla(0,0%,100%,.7)')
    const [random, setRandom] = useState('hsla(0,0%,100%,.7)')
    const [play, setPlay] = useState('hsla(0,0%,100%,.7)')
    const [next, setNext] = useState('hsla(0,0%,100%,.7)')
    const [reaped, setReped] = useState('hsla(0,0%,100%,.7)')
    const dispatch = useDispatch()


    useEffect(() => {
        // dispatch(FetchFromPlaylist())
        console.log(playlist);
    }, [dispatch]);


    let mauserOver = () => setHover('#fff')
    let mauseLeave = () => setHover('hsla(0,0%,100%,.7)')
    let randomFunc = () => setRandom('#fff')
    let randomLeave = () => setRandom('hsla(0,0%,100%,.7)')
    let playFunc = () => setPlay('scale(1.1)')
    let playLeve = () => setPlay('none')
    let nextFunc = () => setNext('#fff')
    let nextLeave = () => setNext('hsla(0,0%,100%,.7)')
    let reapedFunc = () => setReped('#fff')
    let reapedLeave = () => setReped('hsla(0,0%,100%,.7)')

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
                                    <li>
                                        <div className="list">
                                            <div className="list-image">
                                                <img src='https://mosaic.scdn.co/60/ab67616d00001e0260de03184044e5f69745802fab67616d00001e02a96efbf231ca824132bfd2fcab67616d00001e02e2232dff518054d6ddab86aeab67616d00001e02f71666f55aad8ccabbb81a14' alt="playlistImage" />
                                            </div>
                                            <div className="list-text">
                                                <h3>Мои треки Shazam</h3>
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
                        <div className="player-controller">
                            <div className="control-btns">
                                <button onMouseOver={randomFunc} onMouseLeave={randomLeave}>
                                    <RandomBtn random={random} />
                                </button>
                                <button onMouseOver={mauserOver} onMouseLeave={mauseLeave} >
                                    <Preious hover2={hover} />
                                </button>
                                <button onMouseOver={playFunc} onMouseLeave={playLeve} style={{ transform: play }}>
                                    <PlayBtn play={play} />
                                </button>
                                <button onMouseOver={nextFunc} onMouseLeave={nextLeave}>
                                    <NextBtn next={next} />
                                </button>
                                <button onMouseOver={reapedFunc} onMouseLeave={reapedLeave}>
                                    <ReapedBtn reaped={reaped} />
                                </button>
                            </div>
                            <div className="progress">

                            </div>
                        </div>
                        <div className="player-configure">

                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}
