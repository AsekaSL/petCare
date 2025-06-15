class  Page{
    pagePath;
    page;
    constructor(pagePath, page) {
        this.pagePath = pagePath;
        this.page = page;
    }

    getPagePath() {
        return this.pagePath;
    }
    setPagePath(pagePath) {
        this.pagePath = pagePath;
    }

    getPage() {
        return this.page;
    }

    setPage(page) {
        this.page = page;
    }
}

export default Page;