class Book {
    constructor(
        title,
        auther,
        pubYear,
        pageNumber,
        currentPage,
        readStatus
    ) {
        this.title = title;
        this.auther = auther;
        this.pubYear = pubYear;
        this.pageNumber = pageNumber;
        this.currentPage = currentPage;
        this.readStatus =readStatus;
    }
    updateCurrentPage(newCurrentPage) {
        this.currentPage = newCurrentPage;
    }
    updateReadStatus(newReadStatus) {
        this.readStatus = newReadStatus;
    }
}

export default Book;