const showQuotes = 4;                            //nusistatom kiek norim kad rodytu

const getData = () => {
  const URL = 'https://strangerthings-quotes.vercel.app/api/quotes/50';
  fetch(URL)                                    //pasiimam duomenis
    .then((response) => response.json())        //konvertuojam i stringa
    .then((response) => {
      response
        .slice(0, showQuotes)                   //pasiimam tik tiek kiek reikia citatu
        .forEach((quouteItem, index) => {       //kiekvienam aktyviam langui idedam citata
          addCarouselItem(quouteItem, index);
      });
    })
}

const addCarouselItem = (quoteItem, index) => {
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  if (index === 0) {
    carouselItem.classList.add('active');
  }

  const quoteParagraph = document.createElement('p');
  quoteParagraph.classList.add('quote');

  quoteParagraph.innerText = quoteItem.quote;

  const quoteIcon = document.createElement('span');
  quoteIcon.innerText = '“';
  quoteParagraph.prepend(quoteIcon);

  carouselItem.appendChild(quoteParagraph);
  
  const quoteAuthor = document.createElement('p');
  quoteAuthor.classList.add('author');
  quoteAuthor.innerText = `- ${quoteItem.author}`;
 
  carouselItem.appendChild(quoteAuthor);

  const carouselInner = document.getElementById('carousel-inner');
  carouselInner.appendChild(carouselItem);

//sukuriamas indikatorius atvaizduojantis aktyviu citatu skaiciu
  const indicators = document.getElementById('indicators-holder');
  const itemIndicator = document.createElement('button');
  itemIndicator.setAttribute('type', 'button');
  itemIndicator.setAttribute('data-bs-target', '#indicators');
  itemIndicator.setAttribute('data-bs-slide-to', index);
  itemIndicator.setAttribute('aria-label', `Slide No. ${index + 1}`);
  if (index === 0) {
    itemIndicator.className = 'active';
    itemIndicator.setAttribute('aria-current', 'true');
  }
  indicators.append(itemIndicator);
}

getData();
