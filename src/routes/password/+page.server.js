import PASSWDS from "../../../secrets/passwords.csv";
import { email_replaces } from "../../../secrets/password.js";

const emailReplace = ( username ) => {
  for ( const [ key, value ] of email_replaces )
    username = username.replace( key, value );

  return username;
};

/** @type {import('./$types').PageServerLoad} */
export async function load () {
  const chunked = PASSWDS.map( ( { name, url, username, password } ) => {
    return {
      name,
      username: emailReplace( username ),
      password,
      url: new URL( url ).hostname,
    };
  } )
    .sort( ( a, b ) => a.name.localeCompare( b.name ) )
    .reduce( ( all, one, i ) => {
      const ch = Math.floor( i / 4 );
      all[ ch ] = [].concat( all[ ch ] || [], one );
      return all;
    }, [] )
    .map( e => {
      const e2 = e.map( ( { name, username, password } ) => [ name.replaceAll( "www.", "" ), username, password ] );
      return {
        string: JSON.stringify( e2 ),
        images: e2.map( d => d[ 0 ] )
      }
    } )

  return {
    chunked,
  }
}