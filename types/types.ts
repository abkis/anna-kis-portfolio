// types used elsewhere 

export type Project ={
    id: string,
    index: number,
    name: string,
    content: string,
    priority: number,
    slug: string, // link to page,
    start?: string,
    end?: string,
    filename?: string,
}