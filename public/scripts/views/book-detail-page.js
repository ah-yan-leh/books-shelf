var app = app || {};
(module => {

    const bookDetailPage = {};

    const markup = `
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <img src="{{{image_url}}}" alt="" width="400">
                    </div>
                    <div class="col-md-6">
                        <h3>{{title}}</h3>
                        <h4>by {{author}}</h4>
                        
                    </div>
                </div>
                <div>
                    {{description}}
                </div>
                <hr>
            </div>
    `

    bookDetailPage.init = (book) => {
        $('#book-detail-slot').empty()
        $('#book-detail-page').show()
        $('#book-detail-page').off()
        const template = Handlebars.compile(markup)
        $('#book-detail-slot').append((template(book)))
    }

    module.bookDetailPage = bookDetailPage
})(app)