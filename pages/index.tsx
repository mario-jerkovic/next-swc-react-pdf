import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: '50px',
                width: '100vw',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Link href="/v1">
                <a>
                    <button>
                        V1
                    </button>
                </a>
            </Link>
            <Link href="/v2">
                <a>
                    <button>
                        V2
                    </button>
                </a>
            </Link>
        </div>
    )
}

export default Home
