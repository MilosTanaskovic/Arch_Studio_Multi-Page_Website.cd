export default {
    title: "Page Banner",
    name: "pageBanner",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Sub Title",
            name: "subTitle",
            type: "string",
        },
        {
            title: "Description",
            name: "desc",
            type: "string",
        },
        {
            title: "Image",
            name: "image",
            type: "image",
            options: {
                hotspot: true,
            }
        }
    ]
}