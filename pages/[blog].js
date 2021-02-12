import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Fade, Bounce, Slide } from "react-awesome-reveal"
import Typist from "react-typist"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Blog = ({ santhosh }) => {
  const wishername = santhosh[0].content
  toast.success("😊 \n" + wishername, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: false,
  })
  const slugname = santhosh[0].slug
  const pathname = "https://wish.sanweb.info/" + slugname + "/"
  const sharetext = encodeURIComponent(
    wishername + " Wishing you a Happy Friendship day " + pathname
  )
  const Whatsappshare = `https://api.whatsapp.com/send/?text=${sharetext}`
  const Telegramshare =
    "https://telegram.me/share/url?url=" +
    pathname +
    "&text=" +
    wishername +
    " Wishing you a Happy Friendship day"
  const copied = () => {
    toast.dark("📝 Copied", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
    })
  }
  return (
    <section className="section">
      <Head>
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <title>{`${
          wishername + " Wishing you a Happy Friendship day 💛"
        }`}</title>
        <meta
          name="description"
          content="Happy Friendship day 💚 - Friendship Day Wishes and Greetings."
        />
        <meta
          property="og:title"
          content={`${wishername + " Wishing you a Happy Friendship day 💛"}`}
        />
        <meta
          property="og:site_name"
          content={`${wishername + " Wishing you a Happy Friendship day 💛"}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Happy Friendship day 💚 - Friendship Day Wishes and Greetings."
        />
        <meta
          property="og:image"
          content="https://wish.sanweb.info/sanwebwish.png"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/santhoshveercom"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${wishername + " Wishing you a Happy Friendship day 💛"}`}
        />
        <meta
          name="twitter:description"
          content="Happy Friendship day 💚 - Friendship Day Wishes and Greetings."
        />
        <meta
          name="twitter:image"
          content="https://wish.sanweb.info/sanwebwish.png"
        />
        <meta name="twitter:site" content="@santhoshveerece" />
        <link rel="canonical" href={pathname} />
        <meta name="twitter:url" content={pathname} />
        <meta property="og:url" content={pathname} />

        <link rel="preconnect" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//cdnjs.cloudflare.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.google.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              publisher: {
                "@type": "Organization",
                name: `${wishername} Wishing you a Happy Friendship day 💛`,
                url: `${pathname}`,
                logo: {
                  "@type": "ImageObject",
                  url: "https://wish.sanweb.info/logo.png",
                  width: 60,
                  height: 60,
                },
              },
              url: `${pathname}`,
              image: {
                "@type": "ImageObject",
                url: "https://wish.sanweb.info/sanwebwish.png",
                width: 1200,
                height: 630,
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${pathname}`,
              },
              description:
                "Happy Friendship day 💚 - Friendship Day Wishes and Greetings.",
            }),
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MG7YXQ53CG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if(true) {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-MG7YXQ53CG', {
                'page_title' : '${wishername} Wishing you a Happy Friendship day 💛',
                'page_location': '${pathname}'
              });
             }`,
          }}
        />
      </Head>
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-half">
            <Slide triggerOnce>
              <br />
              <h1 className="title is-6 has-text-warning has-text-centered">
                <Typist
                  avgTypingDelay={40}
                  startDelay={1800}
                  cursor={{ hideWhenDone: true }}
                >
                  Happy Friendship day 💛
                </Typist>
              </h1>
              <br />
              <Bounce>
                <p className="has-text-centered">💚 {wishername} 💚</p>
              </Bounce>
            </Slide>
            <br />
            <Slide triggerOnce>
              <Fade>
                <figure className="image is-centered">
                  <Image
                    src="/friends.png"
                    alt="Happy Friendship Day"
                    width={128}
                    height={128}
                  />
                </figure>
              </Fade>
            </Slide>
            <br />
            <Slide triggerOnce>
              <div className="notification has-text-weight-bold read-more">
                <p className="has-text-weight-bold has-text-left">
                  We have shared laughter 💚
                  <br />
                  <br />
                  we have shared tears
                  <br />
                  <br />
                  we have shared disappointment over the years
                  <br />
                  <br />
                  So on this friendship day my wish for you
                  <br />
                  <br />
                  Is success and happiness in all you do.
                  <br />
                  <br />
                  Happy Friendship day 💗
                </p>
              </div>
            </Slide>
            <br />
            <div className="buttons is-centered">
              <ToastContainer />
              <CopyToClipboard text={pathname}>
                <button
                  className="button is-danger read-random"
                  onClick={copied}
                >
                  📝 Copy URL
                </button>
              </CopyToClipboard>
            </div>
            <hr />
            <div className="buttons is-centered">
              <a
                className="button is-success read-random"
                href={Whatsappshare}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                🍔 Whatsapp
              </a>
              <a
                className="button is-info read-random"
                href={Telegramshare}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                🤖 Telegram
              </a>
            </div>
            <hr />
            <br />
            <div className="buttons is-centered">
              <Link href="/">
                <a className="button is-link read-random">🍔 Create your Own</a>
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

Blog.getInitialProps = async context => {
  const { blog } = context.query
  const res = await fetch(
    "https://wish.sanweb.info/api/wish/" + encodeURIComponent(blog)
  )
  const data = await res.json()

  return { santhosh: data }
}
