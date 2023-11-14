console.log('Hello app.js')
const app = Vue.createApp({
    //data , functions, events,templates
    // template: '<h2>I am the template</h2>'
    data(){
        return {
            url: 'http://www.thenetninja.co.uk',
            books:[
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true,age: 45},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false,age: 45},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true,age: 45},
                {title: 'the hero of ages', author: 'brandon sanderson', img: 'assets/4.jpg', isFav: false,age: 45}
            ],
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
        }
    },
    methods:{
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e,data){
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }

})

app.mount('#app')