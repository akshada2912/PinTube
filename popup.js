//https://accounts.spotify.com/authorize?client_id=ae5ac0ac5ece4c7c908466cd27482878&scopes=user-modify-playback-state&response_type=code&redirect_uri=chrome-extension://hiognlmnbdoiicbdigfonpfpoicoijaj/popup.html

/*
curl --request PUT \
--url https://api.spotify.com/v1/me/player/play \
--header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z' \
--header 'Content-Type: application/json' \
--data '{
  "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
  "offset": {
      "position": 5
  },
  "position_ms": 0
}' 
*/
/*
const clientId = 'ae5ac0ac5ece4c7c908466cd27482878';
const redirectUri = 'chrome-extension://hiognlmnbdoiicbdigfonpfpoicoijaj/popup.html';

const scope = 'user-modify-playback-state';
const authUrl = new URL("https://accounts.spotify.com/authorize")

// generated in the previous step
window.localStorage.setItem('code_verifier', codeVerifier);

const params =  {
  response_type: 'code',
  client_id: clientId,
  scope,
  code_challenge_method: 'S256',
  code_challenge: codeChallenge,
  redirect_uri: redirectUri,
}

authUrl.search = new URLSearchParams(params).toString();
window.location.href = authUrl.toString();

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

const getToken = async code => {

    // stored in the previous step
    let codeVerifier = localStorage.getItem('code_verifier');
  
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    }
  
    const body = await fetch(url, payload);
    const response =await body.json();
  
    //localStorage.setItem('access_token', response.access_token);
  }
  
const playSongs = () =>{

}

// const getRefreshToken = async () => {

//     // refresh token that has been previously stored
//     const refreshToken = localStorage.getItem('refresh_token');
//     const url = "https://accounts.spotify.com/api/token";
 
//      const payload = {
//        method: 'POST',
//        headers: {
//          'Content-Type': 'application/x-www-form-urlencoded'
//        },
//        body: new URLSearchParams({
//          grant_type: 'refresh_token',
//          refresh_token: refreshToken,
//          client_id: clientId
//        }),
//      }
//      const body = await fetch(url, payload);
//      const response await body.json();
 
//      localStorage.setItem('access_token', response.accessToken);
//      localStorage.setItem('refresh_token', response.refreshToken);
//    }
*/

const playSongs = async (playlist1) => {

    window.open(playlist1);
    // const { execFile } = require('child_process'); 
 
    // // Replace 'my-file.js' with the name of your Node.js file 
    // execFile('nodejs.js', (error, stdout, stderr) => { 
    //   if (error) { 
    //     // Handle the error 
    //     console.error(error); 
    //     return; 
    //   } 
 
    //   // Print the output of the Node.js file to the console 
    //   console.log(stdout); 
    // });
      // if (playlist1.split("/")[4]) {
      //     console.log(playlist1.split("/")[4]);

      //     var authOptions = {
      //         url: 'https://accounts.spotify.com/api/token',
      //         form: {
      //           code: 'AQDHLp4ZxR5CgJNTlQlHUZeVTAl4glu64pn9kTWn2IB5fqRC5qsj_0R2rubWbW8dk-jP1tfiyCagjQ9FJ_xASV_EVtPTw60iCaAvB46TAputolHW5EVlu34EmgjMUiY7J_ljN-8zk9w0Rr9MAtsMVu3vcC4o_PecuiZDgcHxQ7ug7MHiXX5QCpUN19v25CkTevsThGE6Pwl5QCWTKL3-x37W',
      //           redirect_uri: 'chrome-extension://hiognlmnbdoiicbdigfonpfpoicoijaj/popup.html',
      //           grant_type: 'authorization_code'
      //         },
      //         headers: {
      //           'content-type': 'application/x-www-form-urlencoded',
      //           'Authorization': 'Basic YWU1YWMwYWM1ZWNlNGM3YzkwODQ2NmNkMjc0ODI4Nzg6NWRjMzM4MjgwNTYwNDYyNzk4MmVjNmQzMzdlOWE4ZTA='
      //         },
      //         json: true
      //       }


      //     const request = new Request("https://accounts.spotify.com/api/token", {
      //         method: "POST",
      //         body: authOptions,
      //     });

      //     const res=await fetch(request);
      //     console.log(res);

      //     var client_id = 'ae5ac0ac5ece4c7c908466cd27482878';

        // const response=fetch('https://accounts.spotify.com/api/token', {
        //     method: 'POST',
        //     url: 'https://accounts.spotify.com/api/token',
        //     form: {
        //         code : 'AQDt2cNB6ZMpJ8SQ6YMV33Ph6buHMszK4aElVyxUIsDQo3TGl-1EDMQuduzYpCi_irpELwsnlpBswNP82OJ_G-7e3RFeGPMSJHQ89rNx03P_FcI-grOzhQkNbnTeXE3L_gkCpV5eAXhQt2R2Cgw39VxaLjU0jfUxdnaaB655vklT7U_WHjrvnJDGgejjvYCqjFFSeldg7FFZUHFNVCBFRvyT',
        //         redirect_uri: 'chrome-extension://hiognlmnbdoiicbdigfonpfpoicoijaj/popup.html',
        //         grant_type: 'authorization_code'
        //       },
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded',
        //         'Authorization': 'Basic YWU1YWMwYWM1ZWNlNGM3YzkwODQ2NmNkMjc0ODI4Nzg6NWRjMzM4MjgwNTYwNDYyNzk4MmVjNmQzMzdlOWE4ZTA=',
        //        // 'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     json: true
        //    });
        // console.log(response);
        
   // }
    
}


const addNewList = (listElem, list) => {
    console.log(list);
    const listTitle = document.createElement("div");
    const listImg = document.createElement("img");
    // const controlsElement = document.createElement("div");
    const newListElem = document.createElement("div");
    const title = document.createElement("div");

    listTitle.className = "content";
    title.textContent = list[0];
    title.className = "title";
    listTitle.appendChild(title);

    listImg.src = list[1][1];
    // controlsElement.className = "list-controls";


    newListElem.id = "list-" + list.time;
    newListElem.className = "article-card";
    //newListElem.addEventListener("click", playSongs(list[1][0]));
   // listTitle.onclick = playSongs(list[1][0]);

    newListElem.appendChild(listTitle);
    newListElem.appendChild(listImg);
    //newListElem.addEventListener("click", playSongs(list[1][0]));
    newListElem.addEventListener('click', function() {
      playSongs(list[1][0]);
  });
    // newListElem.appendChild(controlsElement);
    listElem.appendChild(newListElem);
};


const viewPlaylists = (currPlaylists = []) => {
    const listElem = document.getElementById("center");
    listElem.innerHTML = "";

    if (currPlaylists.length > 0) {
        for (let i = 0; i < currPlaylists.length; i++) {
            const list = currPlaylists[i];
            addNewList(listElem, list);
        }
    } else {
        listElem.innerHTML = '<i class="row">No playlists to show</i>';
    }

    return;
};


document.addEventListener("DOMContentLoaded", async () => {
    let currPlaylists = [];
    currPlaylists.length = 0;
    console.log("hi");
    chrome.storage.sync.get(null, function (items) {
        //var allKeys = Object.keys(items);
        //console.log(allKeys);
        //console.log(Object.values(items));
        for (let i = 0; i < Object.keys(items).length; i++) {
            let currItem = [];
            currItem.push(Object.keys(items)[i]);
            currItem.push(Object.values(items)[i]);
            currPlaylists.push(currItem);
        }
        console.log(currPlaylists);

        viewPlaylists(currPlaylists);

    });


});