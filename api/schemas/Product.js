export default {
    title: "Product",
    name: "product",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: 'title',
                maxLength: 200,
            }
        },
        {
            title: "Description",
            name: "desc",
            type: "string",
        },
        {
            title: "Release Date",
            name: "releaseDate",
            type: "date",
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }
        },
        {
            title: "Thumbnail Image",
            name: "thumbnail",
            type: "image",
            options: {
                hotspot: true,
            }  
        },
        {
            title: "Image",
            name: "image",
            type: "array",
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }  
        }
    ]
}