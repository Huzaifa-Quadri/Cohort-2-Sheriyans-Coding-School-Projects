//Callback hell


function profileLekarAao(username, cb) {
    console.log("Fetching Profiles .....");
    
    setTimeout(() => {
        cb({name:"xyz",id:323}); 
    }, 3000);
}

function saarePostsLekarAao(id, cb){
    console.log("Fetching Posts .....");
    setTimeout(() => {
        cb({_id:id, posts : ["hey","hello user", "good morning", "have a good day", "have a good night", "have a good night"]})
    }, 5000);
}

function savedPosts(id, cb){
    console.log("Fetching Saved Posts .....");
    setTimeout(() => {
        cb({_id :id, saved : [11,34,5,3,22,56,2,21]})
    }, 2000);
}


profileLekarAao("huz", function(data){
    console.log("Profile lekar aaya",data);
    saarePostsLekarAao(data._id, function(posts){
        console.log("Posts lekar aaya",posts);
        savedPosts(posts, function(savedPosts){
            console.log("Saved :", savedPosts.saved);
            
        })
    })
})

