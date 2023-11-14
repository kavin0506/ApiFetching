let row=document.querySelector(".row");
let getEpo=()=>{
    fetch(`   https://api.tvmaze.com/seasons/1/episodes`)
    .then((res)=>res.json())
    .then((ans)=>{
        for(data of ans){
            apiFetch(data)
            console.log(data);
        }
    })
    .catch((error)=>{
        console.log("error");
    })
}
getEpo()

const apiFetch=(data)=>{
    row.innerHTML+=`
                <div class="col">
                <div class="card">
                    <div class="image">
                        <img src="${data.image.medium}" alt="image">
                    </div>
                    <div class="info">
                        <div class="heading">
                            <h3>MovieName:${data.name}</h3>
                            <div class="details">
                                <h3>Rating:${data.rating.average}<h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
}