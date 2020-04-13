const List = require("../models/List");
let lists = [
    {
        name:"Unfinished Tasks",
        items:[
            {
                title:"Take out trash",
                status:"incomplete",
                deadline:"13Apr2020"
            },
            {
                title:"Feed Hildi",
                status:"complete",
                deadline:"13April2020"
            }
        ]
    },
    {
        name:"finished Tasks",
        items:[
            {
                title:"Take out trash",
                status:"incomplete",
                deadline:"13Apr2020"
            },
            {
                title:"Feed Hildi",
                status:"complete",
                deadline:"13April2020"
            }
        ]
    }
]


List.deleteMany({}).then(()=>{
    List.create(lists).then(lists=>{
        console.log(lists);
        process.exit();
    })
})