import { Link } from 'react-router-dom'
import './home.css'

export default function Home() {
    return (
        <>
            <main className='home'>
                <section >
                    <div className="left">
                        <nav>
                            <ul>
                                <Link to={'/'}>
                                    <li>
                                        <i className="fa-solid fa-house"></i>
                                        Home
                                    </li>
                                </Link>
                                <Link to={'/search'}>
                                    <li>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                        Search
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                        <div className="library">
                            <div className="library-navigatin">

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
