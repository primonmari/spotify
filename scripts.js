document.addEventListener('DOMContentLoaded', ()=>{
    const artistsData = [

        { name: 'Henrique & Juliano', image: './assets/images/artista-henrique-juliano.jpg' },
        
        { name: 'Jorge & Mateus', image: './assets/images/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './assets/images/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './assets/images/artista-gustavo-limma.jpg'},
        
        { name: 'Luan Santana', image: './assets/images/artista-luan-santana.jpg' },
        
        { name: 'Matheus & Kauan', image: './assets/images/artista-mateus-kauan.jpg' }
        
        ];
        const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'SleepyJohn', image: './assets/images/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano',
        image: './assets/images/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais',
        image: './assets/images/album-racionais.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image:
        './assets/images/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './assets/images/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image:
        './assets/images/album-escandalo.jpg' }
        ];

        // Exibição dos artistas
        const gridArtist = document.querySelector('.grid-artist');
        const gridAlbums = document.querySelector('.grid-albums');

        artistsData.forEach(artist =>{
            const cardArtist = document.createElement('div');
            cardArtist.classList.add('card-artist');

            cardArtist.innerHTML =  `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <h3>${artist.name}</h3>
                <p>artista</p>
            </div>
            `
            gridArtist.appendChild(cardArtist)

        })
        // Exibição dos álbuns
        albumsData.forEach(album =>{
            const cardAlbum = document.createElement('div');
            cardAlbum.classList.add('card-album');

            cardAlbum.innerHTML =  `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
            `
            gridAlbums.appendChild(cardAlbum)

        })

        //Popup criar playlist
        // Seleciona os elementos
        const openPopupBtn = document.getElementById('open-popup');
        const closePopupBtn = document.getElementById('close-popup');
        const popup = document.getElementById('popup');

        // Abre o pop-up
        openPopupBtn.addEventListener('click', () => {
          popup.style.display = 'flex';
        });

        // Fecha o pop-up
        closePopupBtn.addEventListener('click', () => {
          popup.style.display = 'none';
        });

        // Fecha o pop-up ao clicar fora dele
        window.addEventListener('click', (event) => {
          if (event.target === popup) {
            popup.style.display = 'none';
          }
        });


        
        

})



