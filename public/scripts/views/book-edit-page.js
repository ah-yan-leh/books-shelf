var app = app || {};
(module => {

    const bookEditPage = {};

    const markup = `
    <div>
        <form id='foo-form'>
            <div>
            <label for="title">Title:</label>
            <input type="hidden" id="book_id" name="book_id" value="{{book_id}}">
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

        $('#foo-form').off().on('submit', event => {
            event.preventDefault()
            console.log('woohoo')
            var fields = {
                book_id:    $('#book_id').val(),
                author:     $('#author').val(),
                title:      $('#title').val(),
                image_url:  $('#image_url').val(),
                description:$('#descript').val(),
                isbn:       $('#isbn').val()
            }
            
            console.log('fields.book_id',fields.book_id)
            app.Book.update(fields);
        })
    }


    module.bookEditPage = bookEditPage
})(app)