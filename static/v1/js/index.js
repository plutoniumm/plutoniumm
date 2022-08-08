var date = new Date();
document.getElementById( 'time' ).innerHTML = date.getHours() % 12 + ":" + date.getMinutes();
console.log( date.getHours() % 12 + ":" + date.getMinutes() );

var shift = [ "AM", "PM" ]
if ( date.getHours() / 12 >= 1 ) {
      document.getElementById( 'shift' ).innerHTML = shift[ 1 ];
} else {
      document.getElementById( 'shift' ).innerHTML = shift[ 0 ];
}

var projects = [
      {
            "name": "Searock 2019",
            "month": "June",
            "year": "2019",
            "color": "#cd3333",
            "code": "https://github.com/plutoniumblast/SeaRock19",
            "org": "Department of Professional Nights",
            "details": "My first web development scratch coded project <br> Built With: HTML, CSS, Javascript, jQuery and support libraries such as FontAwesome",
            "link": "https://plutoniumblast.github.io/SeaRock19/",
            "image": "https://scontent.fbom6-1.fna.fbcdn.net/v/t1.0-9/61668730_2249054108516956_4065572654633975808_o.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_ohc=eCkoFRVWBeUAX-bem0P&_nc_ht=scontent.fbom6-1.fna&oh=f61fdf5a5d50d6bd3f787170310077b7&oe=5F12175B",
      },
      {
            "name": "Waves 2019",
            "month": "August",
            "year": "2019",
            "color": "#B45A2D",
            "code": "https://github.com/plutoniumblast/SeaRock19",
            "org": "Waves Controls",
            "details": "My introduction to Node.js development frameworks <br> Built With: Vue.js, three.js, Vue Vuetify",
            "link": "https://plutoniumblast.github.io/SeaRock19/",
            "image": "https://www.noticebard.com/wp-content/uploads/2019/09/BITS-WAves.jpg",

      },
      {
            "name": "SEDS Celestia",
            "month": "January",
            "year": "2020",
            "color": "#1d2951",
            "code": "https://github.com/plutoniumblast/Celestia",
            "org": "SEDS Celestia",
            "details": "Improved version of Searock 19 with Firebase",
            "link": "https://plutoniumblast.github.io/searock20/",
            "image": "https://ohcampus.com/uploads/ohcampus_searock.jpg",
      },
      {
            "name": "Searock 2020",
            "month": "January",
            "year": "2020",
            "color": "#DCC8B4",
            "code": "https://github.com/plutoniumblast/Abhigyaan-Website",
            "org": "Abhigyaan",
            "details": "Improved version of Searock 19 with Firebase",
            "link": "http://www.abhigyaan-bpgc.in/",
            "image": "https://ohcampus.com/uploads/ohcampus_searock.jpg",
      },
      {
            "name": "Searock 2020",
            "month": "June",
            "year": "2019",
            "color": "#DCC8B4",
            "code": "https://github.com/plutoniumblast/searock20",
            "org": "Department of Professional Nights",
            "details": "Improved version of Searock 19 with Firebase",
            "link": "https://plutoniumblast.github.io/searock20/",
            "image": "https://ohcampus.com/uploads/ohcampus_searock.jpg",
      }
];


function List ( projects ) {
      return `
      <div class="sheet">
      <div class="example-2 card">
      <div class="overcard">${ projects.name }</div>
                  <div class="wrapper" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${projects.image }) center/cover no-repeat">
                        <div class="header">
                              <div class="date">
                                    <span class="month">${projects.month }</span>
                                    <span class="year">${projects.year }</span>
                              </div>
                              <ul class="menu-content"> 
                                    <li><a href="${projects.code }" class="fa fa-code-fork"><span>Code!</span></a></li>
                              </ul>
                        </div>
                        <div class="data">
                              <div class="content">
                                    <span class="author">${projects.org }</span>
                                    <h1 class="title"><a href="${projects.link }">${ projects.name }</a></h1>
                                    <p class="text">${projects.details } </p>
                                    <a href="${projects.link }" class="button">Check it Out</a>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
      `
};

document.getElementById( "projects" ).innerHTML = `
      ${projects.map( List ).join( '' ) }`