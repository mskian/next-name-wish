import Head from "next/head"
import Image from "next/image"
import React, { Component } from "react"
import { Fade, Slide } from "react-awesome-reveal"
import Typist from "react-typist"
import slugify from "slugify"

class RetrieveList extends Component {
  componentDidMount() {
    if (document.getElementById("btnSignUp") != null) {
      document.getElementById("btnSignUp").addEventListener("click", e => {
        const name = document.getElementById("name").value
        /* eslint eqeqeq: 0 */
        if (name == 0) {
          console.log("Empty Title or Message")
          toast.error("🤖 Empty Name", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false,
          })
          return false
        }
        //const users = encodeURIComponent(name)
        const users = slugify(name, {
          replacement: "-",
          remove: /[*+~.()'"!:@]/g,
          lower: false,
          strict: false,
        })
        window.location.href = "/" + users
      })
    }
  }
  PageToast() {
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

  render() {
    const pathname = "https://wish.sanweb.info/"
    return (
      <section className="section">
        <Head>
          <meta name="HandheldFriendly" content="True" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />

          <title>Happy Friendship day 💛 Wishes</title>
          <meta
            name="description"
            content="Happy Friendship day 💚 - Friendship Day Wishes and Greetings."
          />
          <meta property="og:title" content="Happy Friendship day 💛 Wishes" />
          <meta
            property="og:site_name"
            content="Happy Friendship day 💛 Wishes"
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
          <meta name="twitter:title" content="Happy Friendship day 💛 Wishes" />
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
                  name: "Happy Friendship day 💛 Wishes",
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
                'page_title' : 'Happy Friendship day 💛 Wishes - Home',
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
                    Hi Thanks for using our Web App 💚
                    <br />
                    <br />
                    Send Happy Friendship Day Wishes to your Friends
                    <br />
                    <br />
                    Free Text Wish Greetings
                    <br />
                    <br />
                    ZERO ADS - No Tricks and Ad Clicks
                    <br />
                    <br />
                    Just Enter the Name and Create a Wish
                    <br />
                    <br />
                    Happy Friendship day 💗
                  </p>
                </div>
              </Slide>
              <br />
              <br />
              <div className="notification is-warning has-text-weight-bold">
                <br />
                <h3 className="has-text-centered">Create your Wish</h3>
                <div className="has-text-centered">
                  <small>Enter Your Name</small>
                </div>
                <br />
                <div className="control">
                  <input
                    className="input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <br />
                <button
                  id="btnSignUp"
                  className="button is-link read-random sign-button"
                  type="submit"
                >
                  Create Wishes
                </button>
                <br />
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default RetrieveList
