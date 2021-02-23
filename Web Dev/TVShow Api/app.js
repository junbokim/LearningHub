const form = document.querySelector("#tvShowForm");
form.addEventListener('submit',function(e){
    e.preventDefault();
    getTvShow(form.elements.query.value);
})


const getTvShow = async (title) =>{
    let config = {params: {q:title}}
    const tvShow = await axios.get(`http://api.tvmaze.com/search/shows`,config);
    addTvShow(tvShow.data);
}

const addTvShow = (data) =>{
    const list = document.querySelector("ul");
    for(let element of data){
        console.log(element.show.name)
        let templi = document.createElement('li');
        templi.innerText = element.show.name;
        list.appendChild(templi);
    }
}
