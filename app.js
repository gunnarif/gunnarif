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
                    { text: "Nafnalisti svæðisstjórnar og formanna sv3", url: "https://docs.google.com/spreadsheets/d/14HdqNsG0OOD9Zf_59rLBN0imF8qNarKviSy0XavC1sE/edit#gid=2120524847", img: "" },
                    { text: "Hjálparsveit Skáta Hveragerði", url: "https://drive.google.com/file/d/1_06BA3sQE1iFJ7YYlb1j_dG-6GTNDkgX/view?usp=sharing", img: "" },
                    { text: "Björgunarfélag Árborgar", url: "https://drive.google.com/file/d/112xMjkT8NbyX6ZhUOCDCc8kHivqm5d3s/view?usp=sharing", img: "" },
                    { text: "Björgunarfélagið Eyvindur", url: "https://drive.google.com/file/d/1oL2xwlNUdf59fES0DwoBXkATe6k0WQq5/view?usp=sharing", img: "" },
                    { text: "Björgunarsveitin Björg Eyrarbakka", url: "https://drive.google.com/file/d/1-Ah34HKVl56ryVXRdRhEv2ag2cC7hUER/view?usp=sharing", img: "" },
                    { text: "Björgunarsveitin Mannbjörg", url: "https://drive.google.com/file/d/169Ist6bgU1jRBhBWChd_dr-PB9S8q5av/view?usp=sharing", img: "" },
                    { text: "Hjálparsveitin Tintron", url: "https://drive.google.com/file/d/1zUDaegZ4_ass4w56zVse-2Dt_72oAxbR/view?usp=sharing", img: "" },
                    { text: "Björgunarsveitin Ingunn", url: "https://drive.google.com/file/d/1S9Nw7jBt7ARfMGN3oo3Fc4B-FVxmK_me/view?usp=sharing", img: "" },
                    { text: "Björgunarsveitin Biskup", url: "https://drive.google.com/file/d/1pzS5sjpafhgslvgFv3s9r6ZNpnfDry4x/view?usp=sharing", img: "", desc: "" },
                    { text: "Björgunarsveitin Sigurgeir", url: "https://drive.google.com/file/d/1nw1I32ongWt2iJAc8KbTmTc9paUBgjBf/view?usp=sharing", img: "" },
                ]	
            },
            { 
                title: "Gögn" ,
                links: [
                    { text: "Hópslysaáætlun fyrir Suðurland", url: "https://www.almannavarnir.is/utgefid-efni/vidbragdsaaetlun-hopslys-sudurland/?wpdmdl=20846", img: "" },
                    { text: "Viðbragðsáætlanir", url: "https://www.almannavarnir.is/utgefid-efni/?wpdmc=vidbragdsaaetlanir-seraaetlanir", img: "" },
                    { text: "Dýptarkort Ölfusá", url: "https://drive.google.com/file/u/0/d/0B5mnj0ijqOwFekNldGRFM2FmQUE/view?usp=drive_open", img: "" },
                    { text: "Fundarstaðir í Ölfusá", url: "https://drive.google.com/drive/u/1/folders/0B5mnj0ijqOwFQmVrMUs4bDlCWVE?ogsrc=32", img: "" },
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
                ]	
            }
        ],
        message: 'Hello Vue!'
    }
})
