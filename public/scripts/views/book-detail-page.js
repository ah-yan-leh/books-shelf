var app = app || {};

(module => {

    const bookDetailPage = {};

    const markup = `
            <div class="col-md-12" data-book_id="{{book_id}}">
                <div class="row">
                    <div class="col-md-6">
                        <img src="{{{image_url}}}" alt="" width="400">
                    </div>
                    <div class="col-md-6">
                        <h3>{{title}}</h3>
                        <h4>by {{author}}</h4>
                        
                        <button class="update">update</button>
                        <button class="delete">delete</button>
                    </div>
                </div>
                <div>
                    {{description}}
                </div>
                <hr>
            </div>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#book-detail-page').empty()
        app.Thing.all.forEach(thing => {
            $('#book-detail-page').append($(template(thing)))
        })
    }

    bookDetailPage.init = () => {

        $('#book-detail-page').off()

        $('#book-detail-page').on('click', '.delete', (event) => {
            const book_id = $(event.target).parent().data('book_id')
            const confirmed = confirm('Are you sure?')
            if (confirmed) {
                app.Thing.delete(book_id).then(renderThings)
            }
        })

        $('#book-detail-page').on('click', '.update', (event) => {
            const book_id = $(event.target).parent().data('book_id')
            page('/edit/' + book_id)
        })

        app.Thing.fetchAll().then(() => {
            renderThings()
            $('#book-detail-page').show()
        })
    }

    module.bookDetailPage = bookDetailPage
})(app)