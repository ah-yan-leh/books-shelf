var app = app || {};
(module => {

    const bookListPage = {};

    const markup = `
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <img src="{{{image_url}}}" alt="" width="400">
                    </div>
                    <div class="col-md-6">
                        <h3>{{title}}</h3>
                        <h4>by {{author}}</h4>
                        
                        <button class="update-book" data-book_id="{{book_id}}">Show</button>
                    </div>
                </div>
                <hr>
            </div>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#book-list-slot').empty()
        app.Book.all.forEach(thing => {
            $('#book-list-slot').append((template(thing)))
        })
    }

    bookListPage.init = () => {

        $('#book-list-page').off()

        $('#book-list-page').on('click', '.delete', (event) => {
            const book_id = $(event.target).data('book_id')
            const confirmed = confirm('Are you sure?')
            if (confirmed) {
                app.Book.delete(book_id).then(renderThings)
            }
        })

        $('#book-list-page').on('click', '.update-book', (event) => {
            const book_id = $(event.target).data('book_id')
            page('/book-detail-page/' + book_id)
        })

        app.Book.fetchAll().then(() => {
            renderThings()
            $('#book-list-page').show()
        })
    }

    module.bookListPage = bookListPage
})(app)