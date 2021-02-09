import slugify from "slugify"

export default (req, res) => {
  const crush = req.query.hello
  const seo_title = slugify(crush, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: false,
    strict: false,
  })
  if (crush == "null") {
    const crushname = [
      {
        content: "Greetings",
        slug: "Greetings",
      },
    ]
    res.status(200).json(crushname)
  } else {
    const crushname = [
      {
        content: seo_title.replace(/[-]/g, " ") || "Hello World",
        slug: seo_title || "Hello World",
      },
    ]
    res.status(200).json(crushname)
  }
}
