var app = new Vue({
    el: '#app',
    data: {
        chapters: [
            {
                title: "Aðgerðarstjórn Suðurlandi",
                links: [
                    { text: "Aðgerðargrunnur Landsbjargar", url: "https://adgerd.landsbjorg.is", img: "img/landsbjorg-logo.png" },
                    { text: "Aðgerðargrunnur Almannavarna", url: "https://almannavarnir.sardynamics.com/", img: "img/av_logo__2_.svg" },
                    { text: "Sitewatch", url: "https://www.sitewatch.is", img: "img/samsyn_logo2.png" },
                    { text: "Fjarvinnsla", url: "https://appear.in/blar8", img: "img/apperin.png", desc: "Virkja aðgang með astsudurland@gmail.com" },
                    { text: "Vedurstofan", url: "https://www.vedur.is", img: "https://www.vedur.is/media/vedurtakn/6d7adrut.png" },
                    { text: "Vegagerðin", url: "http://www.vegagerdin.is/", img: "http://www.vegagerdin.is/skin/basic9k/i/sitelogo.png" },
                    { text: "Vefmyndavélar Suðurlandi", url: "http://gunnarif.github.io/vefmyndavelarSudurland/", img: "https://cdn.onlinewebfonts.com/svg/img_313683.png" }
                ]
            },
            { 
                title: "Boðunarspjöld björgunarsveita svæði 3" ,
                links: [
                    { text: "Nafnalisti svæðisstjórnar og formanna sv3", url: "", img: "" },
                    { text: "Hjálparsveit Skáta Hveragerði", url: "", img: "" },
                    { text: "Björgunarfélag Árborgar", url: "", img: "" },
                    { text: "Björgunarfélagið Eyvindur", url: "", img: "" },
                    { text: "Björgunarsveitin Björg Eyrarbakka", url: "", img: "" },
                    { text: "Björgunarsveitin Mannbjörg", url: "", img: "" },
                    { text: "Tintron", url: "", img: "" },
                    { text: "Ingunn", url: "", img: "" },
                    { text: "Biskup", url: "", img: "" },
                    { text: "Árnesi", url: "", img: "" },
                ]	
            },
            { 
                title: "Gögn" ,
                links: [
                    { text: "Hópslysaáætlun", url: "", img: "" },
                    { text: "Viðbragðsáætlanir", url: "", img: "" },
                    { text: "Dýptarkort Ölfusá", url: "", img: "" },
                    { text: "Fundarstaðir í Ölfusá", url: "", img: "" },
                    { text: "Sóttvarnir hafna og skipa", url: "", img: "" },
                    { text: "Kortavefur Suðurlands", url: "http://map.is/sass/", img: "" },
                    { text: "Staðsetning Bjarga", url: "https://www.landsbjorg.is/bjorgunarsveitir/adgerdamal/stadsetning-bjarga", img: "" },
                    { text: "Svæðamörk", url: "https://www.landsbjorg.is/assets/bjorgunarsvid%20adgerdarmal/bj%C3%B6rgunarsv%20og%20sv%C3%A6-am%C3%B6rk%202007.pdf", img: "" }
                ]	
            },
            { 
                title: "Leiðbeiningar" ,
                links: [
                    
                    { text: "Aðgerðarstjórnstöð, skjáir og fleira", url: "", img: "" },
                    { text: "Hlutverk Stjórnanda", url: "", img: "" },
                    { text: "Hlutverk Framkvæmda", url: "", img: "" },
                    { text: "Hlutverk Bjarga", url: "", img: "" },
                    { text: "Hlutverk Áætlana", url: "", img: "" },
                    { text: "Leit Fyrstuviðbrögð", url: "", img: "" },
                    { text: "Aðgerðargrunnur", url: "", img: "" },

                ]	
            }
        ],
        message: 'Hello Vue!'
    }
})
