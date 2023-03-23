$('.search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=9b1f5fe7&s=' + $('.input-keyword').val(),
        success: results => {
            const films = results.Search;
            let cards = '';
            films.forEach(f => {
                cards += showCards(f);
            });
            $('.films-container').html(cards);
    
            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=9b1f5fe7&i=' + $(this).data('imdbid'),
                    success: f => {
                        const detailFilms = showDetailFilms(f);
                        $('.modal-body').html(detailFilms);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
});

$('.homeButton').on('click', function() {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=9b1f5fe7&s=avengers',
        success: results => {
            const films = results.Search;
            let cards = '';
            films.forEach(f => {
                cards += showCards(f);
            });
            $('.films-container').html(cards);
    
            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=9b1f5fe7&i=' + $(this).data('imdbid'),
                    success: f => {
                        const detailFilms = showDetailFilms(f);
                        $('.modal-body').html(detailFilms);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
});

$.ajax({
    url: 'http://www.omdbapi.com/?apikey=9b1f5fe7&s=avengers',
    success: results => {
        const films = results.Search;
        let cards = '';
        films.forEach(f => {
            cards += showCards(f);
        });
        $('.films-container').html(cards);

        $('.modal-detail-button').on('click', function () {
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=9b1f5fe7&i=' + $(this).data('imdbid'),
                success: f => {
                    const detailFilms = showDetailFilms(f);
                    $('.modal-body').html(detailFilms);
                },
                error: (e) => {
                    console.log(e.responseText);
                }
            });
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
});


function showCards(f) {
    return `<div class="col-md-2 mx-2 divCard">
                <div class="card cardStyling">
                    <img src="${f.Poster}" class="card-img-top cardPoster">
                    <div class="card-body divCardBody">
                    <h5 class="card-title">${f.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${f.Year}</h6>
                    <a href="#" class="btn btn-secondary modal-detail-button" data-toggle="modal" 
                    data-target="#filmsDetailModal" data-imdbid="${f.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showDetailFilms(f) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${f.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${f.Title} (${f.Year})</h4>
                            </li>
                            <li class="list-group-item"><strong>Rating :</strong> ${f.imdbRating}</li>
                            <li class="list-group-item"><strong>Director :</strong> ${f.Director}</li>
                            <li class="list-group-item"><strong>Actors :</strong> ${f.Actors}</li>
                            <li class="list-group-item"><strong>Writer :</strong> ${f.Writer}</li>
                            <li class="list-group-item"><strong>Plot :</strong><br> ${f.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}