export default {
    name:'certificates',
    title:'Certificates',
    type: 'document',
    fields:[
        {
            name:'url',
            title:'url',
            type:'string',
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        
    ]
}