/* eslint-disable jquery/no-ajax */
$(document).ready(() => {
    $('#get-data').click(() => {
        console.log($('#get-data'));
        $.get('https://akademia108.pl/api/ajax/get-post.php', (data) => {
            console.log("🚀 ~ file: main.js:6 ~ $.get ~ data:", data);
            console.log('get dziala');
            // ASK: czy mozna uzywac metod zamiennie jqury a javascript wazne
            // ASK :2 tu zmienie na .text() ale .innertext tez zadzialalo mimo literowki
            // ASK :3  co znaczy innertext!!! 
            
            /* let pId = $('<p></p>').innertext = data.id;
            let pUserId = $('<p></p>').innertext = data.userId;
            let pTitle = $('<p></p>').innertext = data.title;
            let pBody = $('<p></p>').innertext = data.body;
            let pHr = $('<hr>'); */
            // ASK :4 tez dziala, czemu?
            let pId = $('<p></p>').innerHtml = data.id;
            // ASK :5 co sie stalo jest obiekt powyzej zabilem obiekt?! ;)
            let pId2 = $('<p></p>').text(data.id);
            console.log("🚀 ~ file: main.js:20 ~ $.get ~ pId2:", pId2)


            // ASK :4 czemu nie wyswietla obiektu ja na warsztacie sam spr zanim zapytasz
            console.log("🚀 ~ file: main.js:19 ~ $.get ~ pId:", pId)
            // ASK :6 co sie dzieje z innerHTML?! spr:
            /* let pUserId = $('<p></p>').innerHtml = data.userId;
            let pTitle = $('<p></p>').innerHtml = data.title;
            let pBody = $('<p></p>').innerHtml = data.body;
            let pHr = $('<hr>'); */

            let pId3 = $('<p></p>').text(data.id);
            let pUserId = $('<p></p>').text(data.userId);
            let pTitle = $('<p></p>').text(data.title);
            let pBody = $('<p></p>').text(data.body);
            let pHr = $('<hr>');
            // ASK :7 czemu inaczej formatuje tekst niz obiekt?!
            
            // $('body').append(pId3);
            $('body').append(pId);
            $('body').append(pId3);
            $('body').append(pUserId);
            $('body').append(pTitle);
            $('body').append(pBody);
            $('body').append(pHr);





            // pId
            // pUserId

        }).fail((error) => {
                console.warn("moj erorr:", error);
            })
    });
});