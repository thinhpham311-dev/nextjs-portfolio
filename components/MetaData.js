// components/Meta.tsx
import Head from "next/head"

const MetaData = ({
  title = "My Portfolio | Loading...",
  description = "Portfolio of Thinh Pham - A creative and skilled web developer.",
  keywords = "web developer, portfolio, react, next.js, frontend, thinh pham",
  image = "/default-og-image.jpg",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default MetaData
