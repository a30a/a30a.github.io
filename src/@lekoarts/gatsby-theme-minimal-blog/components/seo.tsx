import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

const defaultProps = {
  title: ``,
  description: false,
  pathname: false,
  image: false,
  children: null,
}

type Props = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: React.ReactNode
}

const SEO = ({ title, description, pathname, image, children }: Props) => {
  const site = useSiteMetadata()

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    siteImage: defaultImage,
    author,
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`
  }
  return (
    <Helmet title={title} defaultTitle={defaultTitle} titleTemplate={`%s | ${siteTitle}`}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="gatsby-theme" content="@lekoarts/gatsby-theme-minimal-blog" />
      {children}
    </Helmet>
  )
}

export default SEO

SEO.defaultProps = defaultProps
