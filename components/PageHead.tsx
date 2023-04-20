import Head from 'next/head'
import * as React from 'react'

import * as types from 'lib/types'
import * as config from 'lib/config'
import { getSocialImageUrl } from 'lib/get-social-image-url'
export const PageHead: React.FC<
  types.PageProps & {
    title?: string
    description?: string
    image?: string
    url?: string
  }
> = ({ site, title, description, pageId, image, url }) => {
  const rssFeedUrl = `${config.host}/feed`

  title = title ?? site?.name
  description = description ?? site?.description

  const socialImageUrl = getSocialImageUrl(pageId) || image

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fefffe" key="theme-color-light"/>
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#2d3439" key="theme-color-dark"/>

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />

      {site && (
        <>
          <meta property='og:site_name' content={site.name} />
          <meta property='twitter:domain' content={site.domain} />
        </>
      )}

      {config.twitter && (
        <meta name='twitter:creator' content={`@${config.twitter}`} />
      )}

      {description && (
        <>
          <meta name='description' content={`${description}\n ${title}`} />
          <meta property='og:description' content={`${description}\n ${title}`} />
          <meta name='twitter:description' content={`${description}\n ${title}`} />
        </>
      )}

      {socialImageUrl ? (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={"https://austin-content.s3.ap-northeast-2.amazonaws.com/card.png"} />
          <meta property='og:image' content={"https://austin-content.s3.ap-northeast-2.amazonaws.com/card.png"} />
        </>
      ) : (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={"https://austin-content.s3.ap-northeast-2.amazonaws.com/card.png"} />
          <meta property='og:image' content={"https://austin-content.s3.ap-northeast-2.amazonaws.com/card.png"} />
        </>
      )}

      {url && (
        <>
          <link rel='canonical' href={url} />
          <meta property='og:url' content={url} />
          <meta property='twitter:url' content={url} />
        </>
      )}

      <link
        rel='alternate'
        type='application/rss+xml'
        href={rssFeedUrl}
        title={site?.name}
      />
      <meta property='keyword' content={title}/>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      {/*google adsense*/}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5373931502284880"
              crossOrigin="anonymous"></script>
      <title>{title}</title>
    </Head>
  )
}
