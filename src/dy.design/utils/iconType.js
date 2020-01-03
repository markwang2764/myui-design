mapIconType(type, common=false, borrower=false){
    let iconType
    switch(type){
        case ObjectType.HOME:
            return 'home'
        case ObjectType.DOCLIBFOLDER:
        case ObjectType.FOLDER:
            return 'folder'
        case ObjectType.ITEM:
            iconType=common?"common":"layout";
            iconType=borrower?"jieyong":iconType;``
            return iconType
        case ObjectType.ITEM_REVISION:
            return 'tool'
        case ObjectType.DOCUMENT:
            iconType=borrower?"jieyong":'file-text'
            return iconType
        case ObjectType.DOCUMENT_REVISION:
            return 'file-add'
        case ObjectType.ITEM_MASTER:
        case ObjectType.ITEM_REVISION_MASTER:
            return 'exception'
        case ObjectType.DATASET:
            return 'database'

        case ObjectType.ARCHIVE:
            return 'inbox'

        case FileType.DOC:
            return 'file-doc'
        case FileType.EXCEL:
            return 'file-excel'
        case FileType.PPT:
            return 'file-ppt'
        case FileType.PDF:
            return 'file-pdf'
        case FileType.TEXT:
            return 'file-txt'
        case FileType.JPG:
            return 'file-jpg'
        case FileType.CAD:
            return 'file-cad'
        case FileType.IMG:
            return 'file-img'

        case ReleaseStatus.IN_PROCESS:
            return 'link'
        case ReleaseStatus.RELEASED:
            return 'pushpin'

        // case OrgType.GROUP:
        //     return 'team'
        // case OrgType.ROLE:
        //     return 'safetydd'
        // case OrgType.USER:
        //     return 'user'

        case ProjectNodeType.PHASE:
            return 'phase'
        case ProjectNodeType.PHASETASK:
            return 'task'
        default:
            return 'file'
    }
}