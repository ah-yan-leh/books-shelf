var app = app || {};
(module => {

    const bookCreatePage = {};

    const markup = `
    <div>
        <form>
            <div>
            <label for="titles">Title:</label>
            <input type="text" id="titles" placeholder="Enter Title" name="titles">
            </div>
            <div>
            <label for="author">Author:</label>
            <input type="text" id="author" placeholder="Enter Author" name="author">
            </div>
            <div>
            <label for="isbn">ISBN:</label>
            <input type="text" id="isbn" placeholder="Enter ISBN" name="isbn">
            </div>
            <div >
            <label for="image_url">Image URL:</label>
            <input type="text" id="image_url" placeholder="Enter Image URL" name="image_url">
            </div>
            <div>
            <label for="description">Description:</label>
            <input type="text" id="description" placeholder="Enter Description" name="description">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    `

    bookCreatePage.init = (book) => {
        $('#book-create-slot').empty()
        $('#book-create-page').show()
        $('#book-create-page').off()
        const template = Handlebars.compile(markup)
        $('#book-create-slot').append((template(book)))

        
    $('#book-create-page').off().on('submit', 'form', (event) => {
        event.preventDefault()
        var fields = {
            author:     $('#author').val(),
            title:      $('#titles').val(),
            image_url:  $('#image_url').val(),
            description:$('#description').val(),
            isbn:       $('#isbn').val()
        }
        console.log('fields',fields)
        app.Book.create(fields);
    })

    }

    module.bookCreatePage = bookCreatePage
})(app)