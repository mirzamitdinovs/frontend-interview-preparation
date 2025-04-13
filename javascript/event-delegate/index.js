document.getElementById('list').addEventListener('click',function(e){
    if(e.target && e.target.nodeName=='LI'){
        console.log(`List item: ${e.target.id.replace('list-item-', '')} clicked!`)
    }
})

document.getElementById('parent').addEventListener('click', function(e){
    if(e.target && e.target.matches('a.anchor')){
        console.log("Link element clicked!")
    }
})