/* global $ */
// let getButton = document.getElementById("get-button");

// getButton.addEventListener('click', () => {
// console.log("get-button");
// })

$(document).ready(() => {
    // $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(dane) {
    // console.log(dane)
    $('#get-button').click(() => {

        // console.log('test')
        // $.get('https://akademia108.pl/api/ajax/get-post.php')//

        // pobieranie danych metoda get
        // $.get('https://jsonplaceholder.typicode.com/posts')
        /* $.get('https://akademia108.pl/api/ajax/get-post.php')
      .done((dane) => {
        console.log(dane);
        // document.body.appendChild((document.createElement('p').innerHTML = dane.userId));
        // $('#id').text(dane.id);
        //  $('#userId').text(dane.userId);
        //  $('#title').text(dane.title);
        //  $('#body').text(dane.body);
        let Pid = $('<p></p>').text(`Post id: ${dane.id}`);
        console.log("🚀 ~ file: script.js:25 ~ .done ~ Pid:", Pid);

        let PuserId = $('<p></p>').text(`User id: ${dane.userId}`);
        let Ptitle = $('<p></p>').text(`Title ${dane.title}`);
        let Pbody = $('<p></p>').text(`Body : ${dane.body}`);
        let Phr = $('<hr></>');
        // $('body').append(Pid, PuserId, Ptitle, Pbody, Phr);
        $('div#dane-programisty').append(Pid, PuserId, Ptitle, Pbody, Phr);

        // $('body').children();
        // $('h1').children();
        // console.log("🚀 ~ file: script.js:34 ~ .done ~ $('h1').children():", $('h1').children())
       
        // console.log("🚀 ~ file: script.js:33 ~ .done ~ $('body').child:", $('body').children());
        $('div').children();
        console.log("🚀 ~ file: script.js:41 ~ .done ~ $('div').children():", $('div').children())
      })
      .fail(function(error) {
        console.error('moje errorki', error);
      });
    }); */
        // metoda wariant 2 getJSON()
        // $.getJSON('https://jsonplaceholder.typicode.com/posts')
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done((dane) => {
                console.log(dane);
                // document.body.appendChild((document.createElement('p').innerHTML = dane.userId));
                // $('#id').text(dane.id);
                //  $('#userId').text(dane.userId);
                //  $('#title').text(dane.title);
                //  $('#body').text(dane.body);
                let Pid = $('<p></p>').text(`Post id: ${dane.id}`);
                console.log("🚀 ~ file: script.js:25 ~ .done ~ Pid:", Pid);

                let PuserId = $('<p></p>').text(`User id: ${dane.userId}`);
                let Ptitle = $('<p></p>').text(`Title ${dane.title}`);
                let Pbody = $('<p></p>').text(`Body : ${dane.body}`);
                let Phr = $('<hr></>');
                // $('body').append(Pid, PuserId, Ptitle, Pbody, Phr);
                $('div#dane-programisty').append(Pid, PuserId, Ptitle, Pbody, Phr);

                // $('body').children();
                // $('h1').children();
                // console.log("🚀 ~ file: script.js:34 ~ .done ~ $('h1').children():", $('h1').children())
                // console.log("🚀 ~ file: script.js:33 ~ .done ~ $('body').child:", $('body').children());
                $('div').children();
                console.log("🚀 ~ file: script.js:41 ~ .done ~ $('div').children():", $('div').children())
            })
            .fail(function(error) {
                console.error('moje errorki', error);
            });
    });
});


// $(document).ready( () => {
// $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function() {
// console.log(jQuery);
// });
