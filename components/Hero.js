export default function Hero({name = ''}) {
    return (
        <>
            <h1>Hello I'm {name} 👋</h1>
            <p>
                I share everything I learned new in this mini blog.
            </p>
            <style jsx>{`
              h1 {
                border-radius: 4px;
                margin-bottom: 0.5em;
                font-weight: 700;
              }
            `}</style>
        </>
    )
}
