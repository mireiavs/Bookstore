var app = new Vue({
    el: '#app',
    data: {
        allBooks: [],
        url: "https://api.myjson.com/bins/udbm5",
        search: "",
        language: "All languages"
    },
    computed: {
        filteredBooks() {
            return this.allBooks.filter(book => {
                    var search = this.search === "" || book.titulo.toLowerCase().includes(this.search.toLowerCase()) || book.descripcion.toLowerCase().includes(this.search.toLowerCase());
                    var filter = this.language === "All languages" || book.idioma === this.language;
                    return search && filter
                }

            )
        }
    },
    methods: {
        getData() {
            fetch(this.url)
            .then(data => data.json())
            .then(bookdata => this.allBooks = bookdata.books)
        }
    },
    created() {
        this.getData()
    }
})