const BRAND = 'ENHYDRA STUDIO'
const TAGLINE = 'Website Coming Soon'

const MOBILE = '(max-width: 640px) and (orientation: portrait)'
const SMALL = '(max-width: 1440px)'

const img = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

// Browser picks the first matching <source>, so each device downloads exactly one image.
function Background() {
    return (
        <picture className="bg" aria-hidden="true">
            <source media={MOBILE} type="image/webp" srcSet={img('bg-mobile.webp')}/>
            <source media={MOBILE} srcSet={img('bg-mobile.jpg')}/>
            <source media={SMALL} type="image/webp" srcSet={img('bg-small.webp')}/>
            <source media={SMALL} srcSet={img('bg-small.jpg')}/>
            <source type="image/webp" srcSet={img('bg-large.webp')}/>
            <img src={img('bg-large.jpg')} alt="" fetchPriority="high" decoding="async"/>
        </picture>
    )
}

export default function App() {
    return (
        <>
            <Background/>
            <main className="hero">
                <h1 className="brand">{BRAND}</h1>
                <span className="divider" aria-hidden="true"/>
                <p className="tagline">{TAGLINE}</p>
            </main>
        </>
    )
}
