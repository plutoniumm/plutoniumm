const q = ( qe ) => document.querySelector( qe );
q( '#time' ).innerHTML = new Date().toLocaleTimeString( 'en-GB', { hour: '2-digit', minute: '2-digit' } );;

let projects = [
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
      }
];


function List ( projects ) {
      return `
      <div class="sheet"><div class="example-2 card"><div class="overcard">${ projects.name }</div>
      <div class="wrapper" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ projects.image }) center/cover no-repeat">
      <div class="header">
            <div class="date">
                  <span class="month">${ projects.month }</span>
                  <span class="year">${ projects.year }</span>
            </div>
            <ul class="menu-content">
                  <li><a href="${ projects.code }" class="fa fa-code-fork"><span>Code!</span></a></li>
            </ul>
      </div>
      <div class="data">
            <div class="content">
                  <span class="author">${ projects.org }</span>
                  <h1 class="title"><a href="${ projects.link }">${ projects.name }</a></h1>
                  <p class="text">${ projects.details } </p>
                  <a href="${ projects.link }" class="button">Check it Out</a>
            </div>
      </div>
      </div></div></div>`
};
q( "#projects" ).innerHTML = projects.map( List ).join( '' );


// MANAV SEKSARIA
anime.timeline()
      .add( {
            targets: '.ml5 .line', opacity: [ 0.5, 1 ],
            scaleX: [ 0, 1 ], easing: "easeInOutExpo", duration: 700
      } ).add( {
            targets: '.ml5 .line', duration: 600, easing: "easeOutExpo",
            translateY: ( el, i ) => ( -0.625 + 0.625 * 2 * i ) + "em"
      } ).add( {
            targets: '.ml5 .letters-left',
            opacity: [ 0, 1 ], translateX: [ "0.5em", 0 ],
            easing: "easeOutExpo", duration: 600, offset: '-=300'
      } ).add( {
            targets: '.ml5 .letters-right',
            opacity: [ 0, 1 ], translateX: [ "-0.5em", 0 ],
            easing: "easeOutExpo", duration: 600, offset: '-=600'
      } ).add( {
            targets: '.ml5 .line',
            opacity: 0, duration: 1000, easing: "easeOutExpo", delay: 100
      } );

// FULL STACK DEV
let textWrapper = q( '.ml11 .letters' );
textWrapper.innerHTML = textWrapper.textContent.replace( /([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>" );

anime.timeline()
      .add( {
            targets: '.ml11 .line', scaleY: [ 0, 1 ],
            opacity: [ 0.5, 1 ], easing: "easeOutExpo", duration: 700
      } )
      .add( {
            targets: '.ml11 .line',
            translateX: [ 0, q( '.ml11 .letters' ).getBoundingClientRect().width + 10 ],
            easing: "easeOutExpo", duration: 700, delay: 100
      } ).add( {
            targets: '.ml11 .letter', opacity: [ 0, 1 ],
            easing: "easeOutExpo",
            duration: 600, offset: '-=775', delay: ( el, i ) => 34 * ( i + 1 )
      } ).add( {
            targets: '.ml11 .line', opacity: 0,
            duration: 1000, easing: "easeOutExpo", delay: 100
      } );

// TextScramble
class TextScramble {
      constructor ( el ) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—()|;:\'\"1234567890abcdefghijklmnopqrstvuwxyz@$%&=+*^?#';
            this.update = this.update.bind( this );
      }

      setText ( newText ) {
            const oldText = this.el.innerText;
            const length = Math.max( oldText.length, newText.length );
            const promise = new Promise( resolve => this.resolve = resolve );
            this.queue = [];

            for ( let i = 0;i < length;i++ ) {
                  const [ from = "", to = "" ] = [ oldText[ i ], newText[ i ] ];
                  const start = Math.floor( Math.random() * 40 );
                  const end = start + Math.floor( Math.random() * 40 );
                  this.queue.push( { from, to, start, end } );
            }

            cancelAnimationFrame( this.frameRequest );
            this.frame = 0;
            this.update();
            return promise;
      }

      update () {
            let output = '';
            let complete = 0;

            for ( let i = 0, n = this.queue.length;i < n;i++ ) {
                  let { from, to, start, end, char } = this.queue[ i ];

                  if ( this.frame >= end ) {
                        complete++;
                        output += to;
                  } else if ( this.frame >= start ) {
                        if ( !char || Math.random() < 0.28 ) {
                              char = this.randomChar();
                              this.queue[ i ].char = char;
                        }

                        output += `<span class="dud">${ char }</span>`;
                  } else output += from;
            }

            this.el.innerHTML = output;

            if ( complete === this.queue.length ) this.resolve();
            else {
                  this.frameRequest = requestAnimationFrame( this.update );
                  this.frame++;
            }
      }
      randomChar = () => this.chars[ Math.floor( Math.random() * this.chars.length ) ];
};

const phrases = [ 'Hi,', 'I\'m Manav,', 'Web Developer,', 'Cyber Security Researcher,' ];
const el = q( '.text' );
const fx = new TextScramble( el );
let counter = 0;

const next = () => {
      fx.setText( phrases[ counter ] ).then( () => setTimeout( next, 800 ) );
      counter = ( counter + 1 ) % phrases.length;
}; next();