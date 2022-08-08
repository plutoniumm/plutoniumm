
$( document ).ready( function () {
      var entries = [
            { label: 'HTML', url: 'http://niklasknaack.blogspot.de/' },
            { label: 'CSS', url: 'http://www.flashforum.de/' },
            { label: 'jQuery', url: 'http://www.jqueryscript.net/' },
            { label: 'Javascript', url: 'http://forum.jswelt.de/' },
            { label: 'Vue.js', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/' },
            { label: 'Express.js', url: 'http://codepen.io/' },
            { label: 'THREE.js', url: 'http://threejs.org/' },
            { label: 'TensorFlow.js', url: 'http://webglstudio.org/' },
            { label: 'q.js', url: 'http://jscompress.com/' },
            { label: 'WebAssembly', url: 'https://tinypng.com/' },
            { label: 'asm.js', url: 'http://caniuse.com/' },
            { label: 'SASS', url: 'https://goo.gl/' },
            { label: 'SCSS', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx' },
            { label: 'SEO', url: 'https://twitter.com/niklaswebdev' },
            { label: 'Babel', url: 'http://nkunited.deviantart.com/' },
            { label: 'Gulp', url: 'http://gulpjs.com/' },
            { label: 'Browsersync', url: 'https://www.browsersync.io/' },
            { label: 'GitHub', url: 'https://github.com/' },
            { label: 'Shadertoy', url: 'https://www.shadertoy.com/' },
            { label: 'Starling', url: 'http://gamua.com/starling/' },
            { label: 'jsPerf', url: 'http://jsperf.com/' },
            { label: 'Foundation', url: 'http://foundation.zurb.com/' },
            { label: 'CreateJS', url: 'http://createjs.com/' },
            { label: 'Velocity.js', url: 'http://julian.com/research/velocity/' },
            { label: 'TweenLite', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/' },
            { label: 'jQuery', url: 'https://jquery.com/' },
            { label: 'jQuery Rain', url: 'http://www.jqueryrain.com/' },
            { label: 'jQuery Plugins', url: 'http://jquery-plugins.net/' }, ];
      var settings = {

            entries: entries,
            width: 480,
            height: 480,
            radius: '65%',
            radiusMin: 75,
            bgDraw: false,
            opacityOver: 1.00,
            opacityOut: 0.05,
            opacitySpeed: 6,
            fov: 800,
            speed: 1,
            fontFamily: 'Oswald, Arial, sans-serif',
            fontSize: '15',
            fontColor: '#fff',
            fontToUpperCase: true,

      };
      $( '.holder' ).svg3DTagCloud( settings );
} );