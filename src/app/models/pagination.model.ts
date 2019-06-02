export class Pagination {
    
    currentPage: number;
    totalPages: number;

    constructor(currentPage: number, totalPages: number) {
        this.currentPage = currentPage;
        this.totalPages = totalPages;
    }
}