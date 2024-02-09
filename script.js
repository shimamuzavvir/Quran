//creating element by DOM
document.addEventListener('DOMContentLoaded',()=>{
let container = document.createElement("div");
let row = document.createElement("div");
let head = document.createElement("h1")
container.setAttribute("class","container");
row.setAttribute("class","row");
head.setAttribute("id", "title");
head.setAttribute("class", "text-center");
head.innerText = "AL-QURAN";






let alldata;

// fetching QURAN api and surah name in card format


async function quranSurah(){
    const res = await fetch("https://api.alquran.cloud/v1/quran/quran-simple");
     alldata = await res.json();
    //console.log(alldata);
    row.innerHTML = ""
    for(var i=0; i<alldata.data.surahs.length; i++){
        document.getElementById("surahDetailsModalLabel").innerHTML = `<center><i><b> ${alldata.data.surahs[i].name} </i></center>`

        row.innerHTML+=` <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <div class="card h-100 w-auto" style="width: 18rem;" id="card">
          <div class="card-header text-center" id="surah-name"> <b> surah-Name: </b> ${alldata.data.surahs[i].englishName}</div>
            <div class="card-title text-center" id="name"><b><i>surah : </i>${alldata.data.surahs[i].name} </b></div>
            <div class="card-footer d-flex justify-content-center">
            <button class="btn btn-danger" onClick="getSurah(${i+1})">Get Surah</button>
          </div>
         </div> 
         </div>`;
    
}

}
   // click getsurah button for display the surah in popper


 window.getSurah = function(surahNo){
 var surah = document.getElementById("surahDetailsModalBody");
 surah.innerHTML = ""
 for (let j=0; j<alldata.data.surahs[surahNo - 1].ayahs.length; j++){
  //console.log(alldata.data.surahs[surahNo - 1].ayahs[j].text);
   surah.innerHTML += `<div class="ayah arabic-text"><b>${alldata.data.surahs[surahNo - 1].ayahs[j].text} </b></div>`

}
$('#surahDetailsModal').modal('show');
}



container.append(head, row)
document.body.append(container);
quranSurah()  

})
