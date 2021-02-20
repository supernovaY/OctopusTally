type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?: Date
}

interface Window {
    tagList: Tag[]
    findTag: (id: string) => Tag | undefined
    createTag: (name: string) => void
    removeTag: (id: string) => boolean
    updateTag: TagListModel['update']
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