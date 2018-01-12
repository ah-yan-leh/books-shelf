var app = app || {};
(module => {

    const bookEditPage = {};

    const markup = `
    <div>
        <form>
            <div>
            <label for="title">Title:</label>
            <input type="text" id="title" placeholder="Enter Title" name="title" value="{{title}}">
            </div>
            <div>
            <label for="author">Author:</label>
            <input type="text" id="author" placeholder="Enter Author" name="author" value="{{author}}">
            </div>
            <div>
            <label for="isbn">ISBN:</label>
            <input type="text" id="email" placeholder="Enter ISBN" name="isbn" value="{{isbn}}">
            </div>
            <div >
            <label for="image_url">Image URL:</label>
            <input type="text" id="image_url" placeholder="Enter Image URL" name="image_url" value="{{image_url}}">
            </div>
            <div>
            <label for="description">Description:</label>
            <input type="text" id="description" placeholder="Enter Description" name="description" value="{{description}}">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    `

    bookEditPage.init = (book) => {
        $('#book-edit-slot').empty()
        $('#book-edit-page').show()
        $('#book-edit-page').off()
        const template = Handlebars.compile(markup)
        $('#book-edit-slot').append((template(book)))
    }
    $('#book-edit-page').off().on('submit', 'form', (event) => {
        event.preventDefault()
        var fields = $( ":input" ).serializeArray();
        app.Book.update(fields);
    })

    module.bookEditPage = bookEditPage
})(app)