// Menu Animation //
// ------------------------------------------------------------------------- //
let menuButton = document.querySelector('.navbar__mobile__menu');
let navItems = document.querySelector('.navbar__nav');
let header = document.querySelector('.navbar');
let barHide = document.querySelector('.navbar__mobile__menu__bar:nth-child(1)');
let barLeft = document.querySelector('.navbar__mobile__menu__bar:nth-child(2)');
let barRight = document.querySelector('.navbar__mobile__menu__bar:nth-child(3)');

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle('navbar__nav__toggle');
  barHide.classList.toggle('navbar__mobile__menu__bar__hide');
  barLeft.classList.toggle('navbar__mobile__menu__bar__cross');
  barRight.classList.toggle('navbar__mobile__menu__bar__across');

  let nav = document.querySelector('.navbar__nav__toggle');

  if (nav) {
    header.style.height = '100vh';
    header.style.overflow = 'hidden';
  } else {
    header.style.display = 'block';
    header.style.height = '4.45rem';
  }
}

// Form Validation //
// ------------------------------------------------------------------------- //
const countryList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas (the)',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory (the)',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands (the)',
  'Central African Republic (the)',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands (the)',
  'Colombia',
  'Comoros (the)',
  'Congo (the Democratic Republic of the)',
  'Congo (the)',
  'Cook Islands (the)',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czechia',
  "Côte d'Ivoire",
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic (the)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (the) [Malvinas]',
  'Faroe Islands (the)',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories (the)',
  'Gabon',
  'Gambia (the)',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (the)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea (the Democratic People's Republic of)",
  'Korea (the Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  "Lao People's Democratic Republic (the)",
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands (the)',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (the Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands (the)',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger (the)',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands (the)',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines (the)',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of North Macedonia',
  'Romania',
  'Russian Federation (the)',
  'Rwanda',
  'Réunion',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan (the)',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands (the)',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates (the)',
  'United Kingdom of Great Britain and Northern Ireland (the)',
  'United States Minor Outlying Islands (the)',
  'United States of America (the)',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
  'Åland Islands',
];

const inputFirstName = document.querySelector('#fname');
const inputLastName = document.querySelector('#lname');
const inputEmail = document.querySelector('#email');
const inputCompany = document.querySelector('#company');
const inputCountry = document.querySelector('#countries');
const inputTooltip = document.querySelector('.input-tooltip');
const form = document.querySelector('#form');

countryList.forEach((country, index) => {
  let selectOption = document.createElement('option');

  // Add index to option_elem
  selectOption.value = country;

  // Add element HTML
  selectOption.textContent = country;

  // Append option_elem to select_elem
  inputCountry.appendChild(selectOption);
});

// Required Validation
const isRequired = (value) => (value === '' ? false : true);

// Email Validation
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// Remove Tooltip on Click
const removeToolTip = (input) => {
  input.addEventListener('click', (e) => {
    e.preventDefault();
    const inputGroup = input.parentElement;
    inputGroup.classList.remove('error');
  });
};

// Check Error
const inputError = (input, message) => {
  // get the form-field element
  const inputGroup = input.parentElement;
  // add the error class
  inputGroup.classList.remove('success');
  inputGroup.classList.add('error');

  // show the error message
  const error = inputGroup.querySelector('.tooltip-text');
  error.textContent = message;
};

// Success Message
const showSuccess = (input) => {
  // get the form-field element
  const inputGroup = input.parentElement;

  // remove the error class
  inputGroup.classList.remove('error');
};

// Input and Select Validations
// ------------------------------------------------------------------------- //
// Check First Name
const checkFirstName = () => {
  let valid = false;
  const firstName = inputFirstName.value.trim();

  if (!isRequired(firstName)) {
    inputError(inputFirstName, 'This field can’t be empty. Please fill it in.');
    removeToolTip(inputFirstName);
  } else {
    showSuccess(inputFirstName);
    valid = true;
  }
  return valid;
};
// Check Last Name
const checkLastName = () => {
  let valid = false;
  const lastName = inputLastName.value.trim();

  if (!isRequired(lastName)) {
    inputError(inputLastName, 'This field can’t be empty. Please fill it in.');
    removeToolTip(inputLastName);
  } else {
    showSuccess(inputLastName);
    valid = true;
  }
  return valid;
};

// Check Email
const checkEmail = () => {
  let valid = false;
  const email = inputEmail.value.trim();
  if (!isRequired(email)) {
    inputError(inputEmail, 'This field can’t be empty. Please fill it in.');
    removeToolTip(inputEmail);
  } else if (!isEmailValid(email)) {
    inputError(inputEmail, `The email you've entered is not correct`);
    removeToolTip(inputEmail);
  } else {
    showSuccess(inputEmail);
    valid = true;
  }
  return valid;
};

// Check Company
const checkCompany = () => {
  let valid = false;
  const company = inputCompany.value.trim();

  if (!isRequired(company)) {
    inputError(inputCompany, 'This field can’t be empty. Please fill it in.');
    removeToolTip(inputCompany);
  } else {
    showSuccess(inputCompany);
    valid = true;
  }
  return valid;
};

// Check Country
const checkCountry = () => {
  let valid = false;
  const country = inputCountry.value;

  if (!isRequired(country)) {
    inputError(inputCountry, 'This field can’t be empty. Please fill it in.');
    removeToolTip(inputCountry);
  } else {
    showSuccess(inputCountry);
    valid = true;
  }
  return valid;
};

// On Submit Function
form.addEventListener('submit', (e) => {
  // prevent the form from submitting
  e.preventDefault();
  // checkFirstName();

  const websiteFolder = window.location.hostname;
  console.log(websiteFolder);

  if (checkFirstName()) {
    checkLastName();
    if (checkLastName()) {
      checkEmail();
      if (checkEmail()) {
        checkCompany();
        if (checkCompany()) {
          checkCountry();
          if (checkCountry()) {
            window.location.href = `${websiteFolder}/success.html`;
          }
        }
      }
    }
  }
});

// Modal
const modal = document.querySelector('#modal');
const modalClose = document.querySelector('.modal__close');
const modalOpen = document.querySelector('.video__button');

modalOpen.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

modalClose.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'none';
});

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

// Carousel initialization Using Swiper.js //
// ------------------------------------------------------------------------- //
var swiper = new Swiper('.mySwiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});
