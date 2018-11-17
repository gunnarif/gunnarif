var app = new Vue({
    el: '#app',
    data: {
        links: [
            {
                title: "Aðgerðarstjórn",
                links: [
                    { text: "Aðgerðargrunnur Landsbjargar", url: "https://adgerd.landsbjorg.is", img: "img/landsbjorg-logo.png" },
                    { text: "Aðgerðargrunnur Almannavarna", url: "https://almannavarnir.sardynamics.com/", img: "img/av_logo__2_.svg" },
                    { text: "Sitewatch", url: "https://www.sitewatch.is", img: "img/samsyn_logo2.png" },
                    { text: "Fjarvinnsla", url: "https://appear.in/blar8", img: "img/apperin.png", desc: "Virkja aðgang með astsudurland@gmail.com" },
                    { text: "Vedurstofan", url: "https://www.vedur.is", img: "https://www.vedur.is/media/vedurtakn/6d7adrut.png" },
                    { text: "Vegagerðin", url: "http://www.vegagerdin.is/", img: "http://www.vegagerdin.is/skin/basic9k/i/sitelogo.png" },
                    { text: "Vefmyndavélar Suðurlandi", url: "http://gunnarif.github.io/vefmyndavelarSudurland/", img: "https://cdn.onlinewebfonts.com/svg/img_313683.png" }
                ]
            }],
        chapters: [
            { 
                title: "Aðgerðarstjórn" ,
                links: [
                    
                    { text: "Aðgerðarstjórnstöð, skjáir og fleira", url: "", img: "" },
                    { text: "Hlutverk Stjórnanda", url: "", img: "" },
                    { text: "Hlutverk Framkvæmda", url: "", img: "" },
                    { text: "Hlutverk Bjarga", url: "", img: "" },
                    { text: "Hlutverk Áætlana", url: "", img: "" },
                ]	
            },
            { 
                title: "Almannavarnir" ,
                links: [
                    { text: "Hópslysaáætlun fyrir Suðurland", url: "https://www.almannavarnir.is/utgefid-efni/vidbragdsaaetlun-hopslys-sudurland/?wpdmdl=20846", img: "" },
                    { text: "Viðbragðsáætlanir", url: "https://www.almannavarnir.is/utgefid-efni/?wpdmc=vidbragdsaaetlanir-seraaetlanir", img: "" },
                ]	
            },
            { 
                title: "Svæðisstjórn bj.sv 3" ,
                links: [
                    { text: "Boðunarspjöld", url: "https://drive.google.com/drive/u/1/folders/19wV2uux5_RxW0r0bxKeC8e7vGW4sGNYE?ogsrc=32", img: "" },
                    { text: "Leit Fyrstuviðbrögð", url: "", img: "" },
                    { text: "Dýptarkort Ölfusá", url: "https://drive.google.com/file/u/0/d/0B5mnj0ijqOwFekNldGRFM2FmQUE/view?usp=drive_open", img: "" },
                    { text: "Fundarstaðir í Ölfusá", url: "https://drive.google.com/drive/u/1/folders/0B5mnj0ijqOwFQmVrMUs4bDlCWVE?ogsrc=32", img: "" },
                    { text: "Staðsetning Bjarga", url: "https://www.landsbjorg.is/bjorgunarsveitir/adgerdamal/stadsetning-bjarga", img: "" },
                    { text: "Svæðamörk", url: "https://www.landsbjorg.is/assets/bjorgunarsvid%20adgerdarmal/bj%C3%B6rgunarsv%20og%20sv%C3%A6-am%C3%B6rk%202007.pdf", img: "" }
                ]	
            },
            { 
                title: "Brunavarnir Árnessýslu" ,
                links: [
                    { text: "Umsjá", url: "https://www.babubabu.is/umsjon/", img: "" },
                ]	
            },
            { 
                title: "Annað gagnlegt" ,
                links: [
                    { text: "Kortavefur Suðurlands", url: "http://map.is/sass/", img: "" },
                    { text: "Belgingur", url: "http://belgingur.is/map/island-3.2.sudur", img: "" },
                    { text: "Windy", url: "https://www.windy.com/?63.931,-18.572,8", img: "" },
                    { text: "Kortavefur Suðurlands", url: "http://map.is/sass/", img: "" },

                ]	
            }

        ],
        message: 'Hello Vue!'
    }
})
