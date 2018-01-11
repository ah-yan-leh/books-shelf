var app = app || {};

(module => {

    const API_URL = {
        getAll      :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books',
        getOne      :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books',
        updateOne   :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books/updateBook',
        postOne     :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books/addNewBook',
        deteleOne   :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books/deleteBook',
        deteleAll   :   'https://server-lab10-codefellows.herokuapp.com/api/v1/books/deleteAllBooks'
    }

    const Book = {}

    Book.all = []

    Book.fetchAll = () => {
        console.log('fetchAll',API_URL.getAll)
        return $.getJSON(API_URL.getAll).then(things => {
            Book.all = things
            Book.all.sort((a,b) => {
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

    Book.fetchOne = (book_id) => {
        console.log('fetchOne',API_URL.getOne+'/'+book_id)
        return $.getJSON(API_URL.getOne + '/' + book_id)
            .catch(err => console.error(err))
    }

    Book.create = (thing) => {
        return $.post(API_URL.postOne, thing)
            .catch(err => console.error(err))
    }
    Book.update = (thing) => {
        return $.ajax({
            url: API_URL.updateOne + '/' + thing.book_id,
            method: 'PUT',
            data: thing
        }).then(result => console.log(result))
            .catch(err => console.error(err))
    }

    Book.delete = (book_id) => {
        console.log(API_URL.deteleOne + '/' + book_id)
        return $.ajax({
            url: API_URL.deteleOne + '/' + book_id,
            method: 'DELETE',
        }).then(() => {
            const index = Book.all.findIndex(thing => thing.book_id === book_id)
            Book.all.splice(index, 1)
        }).catch(err => console.error(err))
    }
    Book.deleteAll = (book_id) => {
        return $.ajax({
            url: API_URL.deleteAll,
            method: 'DELETE',
        }).then(() => {
            const index = Book.all.findIndex(thing => thing.book_id === book_id)
            Book.all.splice(index, 1)
        }).catch(err => console.error(err))
    }
    module.Book = Book

})(app)
