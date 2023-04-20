import PASSWDS from "../../../secrets/passwords.csv";
import { email_replaces } from "../../../secrets/password.js";
import QR from "qr-code-styling";

const emailReplace = ( username ) => {
  for ( const [ key, value ] of email_replaces )
    username = username.replace( key, value );

  return username;
};

export const chunked = PASSWDS.map( ( { name, url, username, password } ) => {
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
  }, [] );


export const getQRGen = ( data ) => new QR( {
  width: 300,
  height: 300,
  data,
  image: null,
  type: "svg",
  dotsOptions: { color: "#44c", type: "rounded" },
  backgroundOptions: { color: "#0000" },
  imageOptions: { crossOrigin: "anonymous", margin: 0 },
} )