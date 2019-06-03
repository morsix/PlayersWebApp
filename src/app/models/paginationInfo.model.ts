export class PaginationInfo {
        page: number;
        pageSize: number;
        keyword: string;
        sortBy: string;
        order: boolean;

        constructor(page:number, pageSize:number, keyword:string, sortBy:string, order:boolean){
            this.page = page;
            this.pageSize = pageSize;
            this.keyword = keyword;
            this.sortBy = sortBy;
            this.order = order;
        }
}