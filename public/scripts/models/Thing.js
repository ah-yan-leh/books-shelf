var app = app || {};

(module => {
/*
    get all books -> /api/v1/books
    add a new book -> /api/v1/books/addNewBook
    get a single book -> /api/v1/books/:book_id
    update a specific book -> /api/v1/books/updateBook/:book_id
    delete a specific book -> /api/v1/books/deleteBook/:book_id
    delete ALL books -> /api/v1/books/deleteAllBooks
*/
    const API_URL = {
        getAll      :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books',
        getOne      :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books',
        updateOne   :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books/updateBook',
        postOne     :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books/addNewBook',
        deteleOne   :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books/deleteBook',
        deteleAll   :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books/deleteAllBooks'
    }

    const Thing = {}

    Thing.all = []

    Thing.fetchAll = () => {
        return $.getJSON(API_URL.getAll).then(things => {
            Thing.all = things
            Thing.all.sort((a,b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })
        })
    }

    Thing.fetchOne = (book_id) => {
        return $.getJSON(API_URL.getOne + '/' + book_id)
            .catch(err => console.error(err))
    }

    Thing.create = thing =>
        $.post(API_URL.postOne, thing)
            .catch(err => console.error(err))

    Thing.update = thing => {
        return $.ajax({
            url: API_URL.updateOne + '/' + thing.book_id,
            method: 'PUT',
            data: thing
        }).then(result => console.log(result))
            .catch(err => console.error(err))
    }

    Thing.delete = book_id => $.ajax({
        url: API_URL.deteleOne + '/' + book_id,
        method: 'DELETE',
    }).then(() => {
        const index = Thing.all.findIndex(thing => thing.book_id === book_id)
        Thing.all.splice(index, 1)
    }).catch(err => console.error(err))

    Thing.deleteAll = book_id => $.ajax({
        url: API_URL.deleteAll,
        method: 'DELETE',
    }).then(() => {
        const index = Thing.all.findIndex(thing => thing.book_id === book_id)
        Thing.all.splice(index, 1)
    }).catch(err => console.error(err))

    module.Thing = Thing

})(app)
