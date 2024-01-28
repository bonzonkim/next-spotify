// import { getToken, getArtistInfo } from '../lib/spotify'
//
// const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
// const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
// export async function tokenGet() {
//
//     const params = new URLSearchParams();
//     params.append("client_id", clientId);
//     params.append("client_secret", clientSecret);
//     params.append("grant_type", "client_credentials");
//     // params.append("code", code);
//
//     const result = await fetch("https://accounts.spotify.com/api/token", {
//         method: "POST",
//         headers: {"Content-Type": "application/x-www-form-urlencoded"},
//         body: params.toString()
//     });
//     return await result.json();
// }
//
// async function Home() {
//     const { access_token, token_type } = await getToken();
//     const {name, genres} = await getArtistInfo(token_type, access_token);
//   return (
//       <>
//           <div className='flex justify-center items-center'>
//               <h1 className='text-white'>{access_token}</h1>
//           </div>
//           <div className='flex justify-center items-center'>
//               <h1 className='text-white'>{token_type}</h1>
//           </div>
//           <div className='flex justify-center items-center'>
//               <h1 className='text-white'>{name}</h1>
//           </div>
//           <div className='flex justify-center items-center'>
//               <h1 className='text-white'>{genres[0]}</h1>
//           </div>
//           <button onClick={tokenGet}>loginto</button>
//       </>
//   );
// }
//

import Link from "next/link";

function Home() {
    return (
        <div className={'flex justify-center item-center'}>
          <Link href="/api/login/">
            <button className={'p-4 border-r-black'}>login Spotify</button>
          </Link>
        </div>

    )
}
export default Home;
