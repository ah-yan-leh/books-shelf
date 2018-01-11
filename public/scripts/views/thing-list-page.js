var app = app || {};

(module => {

    const thingListPage = {};

    const markup = `
            <div class="col-md-12" data-id="{{book_id}}">
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
                <hr>
            </div>
    `
    const template = Handlebars.compile(markup)

    function renderThings() {
        $('#thing-list').empty()
        app.Thing.all.forEach(thing => {
            $('#thing-list').append($(template(thing)))
        })
    }

    thingListPage.init = () => {

        $('#thing-list-page ul').off()

        $('#thing-list-page ul').on('click', '.delete', (event) => {
            const id = $(event.target).parent().data('id')
            const confirmed = confirm('Are you sure?')
            if (confirmed) {
                app.Thing.delete(id).then(renderThings)
            }
        })

        $('#thing-list-page ul').on('click', '.update', (event) => {
            const id = $(event.target).parent().data('id')
            alert(' thing-list-page ul')
            page('/edit/' + id)
        })

        app.Thing.fetchAll().then(() => {
            renderThings()
            $('#thing-list-page').show()
        })
    }

    module.thingListPage = thingListPage
})(app)