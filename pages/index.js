import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import {postFilePaths, POSTS_PATH} from '../utils/mdxUtils'

export default function Index({posts}) {
    return (
        <>
            <Layout>
                <ul className="posts">
                    {posts.map((post) => (
                        <li className="post" key={post.filePath}>
                            <Link
                                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                                href={`/posts/[slug]`}
                            >
                                <a className="post-link">{post.data.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Layout>
            <style jsx>{`
              .posts {
                padding: 0px;
              }

              .post {
                background: #eeeeee;
                font-weight: 400;
                padding: 10px;
                border-radius: 0.2em;
                list-style: none;
                margin-bottom: 10px;
                color: rgb(0 0 0 / 60%);
              }

              .post-link {
                text-decoration: none;
              }
            `}</style>
        </>

    )
}

export function getStaticProps() {
    const posts = postFilePaths.map((filePath) => {
        const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
        const {content, data} = matter(source)

        return {
            content,
            data,
            filePath,
        }
    })

    return {props: {posts}}
}
