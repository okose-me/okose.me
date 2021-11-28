export default function Hero({name = ''}) {
    return (
        <>
            <h1>Hello, I'm {name} 👋</h1>
            <p>
                I have been a web developer for many years, I started this adventure with PHP and continue with
                Javascript (Vanilla.js, React.js, Next.js).
                Currently, I continue as a front-end developer, I am also the team leader.
            </p>
            <p>
                I like to develop Open Source, and I develop some javascript packages. You can follow me at the links
                below.
            </p>
            <ul>
                <li><a href="mailto:hi@okose.me" target="_blank">hi@okose.me</a></li>
                <li><a href="https://twitter.com/okose_me" target="_blank">Twitter</a></li>
                <li><a href="https://github.com/okose-me" target="_blank">Github</a></li>
                <li><a href="https://www.npmjs.com/~okose_me" target="_blank">Npm</a></li>
            </ul>
            <style jsx>{`
              h1 {
                border-radius: 4px;
                margin-bottom: 0.5em;
                font-weight: 700;
              }

              ul {
                list-style: none;
              }

              li {
                margin-bottom: 10px;
                display: inline;
                margin-right: 10px;
              }

              a {
                background: #fcbb1994;
                color: #885005d1;
                border-radius: 17px;
                padding: 5px 10px 5px 10px;
                font-size: 14px;
                text-decoration: none;
              }
            `}</style>
        </>
    )
}
