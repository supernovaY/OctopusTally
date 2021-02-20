type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?: Date
}

interface Window {
}
type Tag = {
    id: string
    name: string
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name:string) => string // success表示成功 duplicated表示重复
    update: (id:string, name:string) => 'success' | 'not Found' | 'duplicated'
    remove: (id: string) => boolean
    save: ()=>void
}