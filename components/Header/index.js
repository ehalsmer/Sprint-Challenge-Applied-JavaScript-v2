// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // Create elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    // Create structure
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    // Add classes
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // Set content
    const today = new Date().toDateString().toUpperCase().slice(4);
    date.textContent = `${today}`
    // console.log(date);
    title.textContent = 'Lambda Times';
    temp.textContent = '98°'; // todo: insert weather/temp api. Default to San Francisco, optional to set location based on zip or city

    // console.log(header);
    // Return header
    return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());