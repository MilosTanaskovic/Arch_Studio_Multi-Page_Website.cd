export default {
    title: "HeroBanner",
    name: "heroBanner",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string"
        },
        {
            title: "Description",
            name: "desc",
            type: "string"
        },
        {
            title: "BgImage",
            name: "bgimage",
            type: "image",
            options: {
                hotspot: true,
            }
        }
    ]
}