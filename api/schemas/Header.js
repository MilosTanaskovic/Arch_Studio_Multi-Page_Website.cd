export default {
    title: "Header",
    name: "header",
    type: "document",
    fields: [
        {
            title: "Logo",
            name: "logo",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            title: "Page Name",
            name: "pageName",
            type: "array",
            of: [{type: "string"}]
        },
        {
            title: "Url Path",
            name: "link",
            type: "array",
            of: [{type: "string"}]
        }
    ]
}