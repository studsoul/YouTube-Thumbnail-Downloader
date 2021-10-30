function thumbdown(){
    ytlink = document.getElementById("hero-field").value;
    /* Example URL: https://www.youtube.com/watch?v=O4YEtMj1B50 */
    var ytId = ytlink.split("?v=")[1].toString()
    console.log(ytId)
    imgres = ["https://img.youtube.com/vi/"+ ytId + "/maxresdefault.jpg","https://img.youtube.com/vi/"+ ytId + "/hqdefault.jpg","https://img.youtube.com/vi/"+ ytId + "/mqdefault.jpg", "https://img.youtube.com/vi/"+ ytId + "/sddefault.jpg"]
    console.log(imgres[2])
    resq = ['maxres', 'hires', 'midres', 'lowres']
    i = 0
    while (i<=3)
    {
        document.getElementById(resq[i]).href = imgres[i];
        console.log(resq[i]);
        i++;
    }
    document.getElementById("downSection").style = "";
}