import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'


export default (props) => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        html
                        frontmatter {
                            title
                            date(formatString: "DD MMMM, YYYY")
                        }
                    }
                }
            }
        }
    `)

    const { edges } = data.allMarkdownRemark

    const posts = edges.map(({ node }) => 
        <section key={node.fields.slug}>
            <Link to={node.fields.slug}>
                <h4>{node.frontmatter.title}</h4>
            </Link>
            <p>{node.frontmatter.date}</p>
        </section>
    )
    return (
        <Layout>
            <h1>blog</h1>
            {posts}
        </Layout>
    )
}