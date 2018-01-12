// NOTE: these routes will work just fine running locally
// But when you start remotely check out routes-remote.js


// all route changes should hide page containers
page('/*', (ctx, next) => {
    $('.page').hide()
    next()
})

page('/', app.bookListPage.init)
page('/book-detail-page/:id', (ctx) =>{
    app.Book.fetchOne(ctx.params.id).then( (book)=>{
        console.log('book',book);
        app.bookDetailPage.init(book[0]);
    })
})
page('/book-edit-page/:id', (ctx) =>{
    app.Book.fetchOne(ctx.params.id).then( (book)=>{
        console.log('book',book);
        app.bookEditPage.init(book[0]);
    })
})
page('/book-create-page', app.bookCreatePage.init)

page.start()
