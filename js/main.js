// window.addEventListener('DOMContentLoaded', () => {
//     // card malumotlari
//     const cardData = [
//         {
//             "img": "./img/tawuvchi.png",
//             "title": "Fasted delivery Service",
//             "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

//         },
//         {
//             "img": "./img/axlat.png",
//             "title": "Online order Service",
//             "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

//         },
//         {
//             "img": "./img/paket.png",
//             "title": "24/8 Service",
//             "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

//         },
//     ]
//     // cards cardlar uchun ota teg
//     const cards = document.querySelector('.cards')
//     // yakkalab olish uchun foreach
//     cardData.forEach(db => {
//         // card yaratish
//         const card = document.createElement('div')
//         cards.appendChild(card)
//         card.className = 'card'
//         // img tegi yaratish
//         const img = document.createElement('img')
//         card.appendChild(img)
//         img.className = 'card-img'
//         img.src = db.img
//         img.alt = 'rasmlar'
//         // title qismini yaratish
//         const title = document.createElement('h4')
//         card.appendChild(title)
//         title.className = 'card-title'
//         title.innerHTML = db.title
//         // description
//         const desc = document.createElement('p')
//         card.appendChild(desc)
//         desc.className = 'card-description'
//         desc.innerHTML = db.desc
//     });

// })
