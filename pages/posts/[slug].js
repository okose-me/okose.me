import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import CustomLink from '../../components/CustomLink'
import Layout from '../../components/Layout'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
}

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <div className="post-header">
        <h2>{frontMatter.title}</h2>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
      <header className="goBackHome">
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
             border-top: 0.1em dashed rgb(0 0 0 / 40%);
    margin-bottom: 2rem;
    padding-top: 15px;
        }
        .description {
          opacity: 0.6;
        }
        
        .goBackHome{
          border-top: 0.1em dashed rgb(0 0 0 / 40%);
    margin-bottom: 2rem;
    padding-top: 15px;
        }
      `}</style>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
