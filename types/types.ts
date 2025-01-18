// types used elsewhere 

export type Project ={
    id: string,
    name: string,
    content: string,
    priority: number,
    slug: string, // link to page,
    start?: string,
    end?: string,
    filename?: string,
    index: number, // unique index in list
    abstract?: string,
    links?: LinkDescr[]
}

export type LinkDescr = {
    name: "string",
    link: "string"
}