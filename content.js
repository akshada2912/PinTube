(() => {
    let PinControls;
    let currPage = "";
    let currPlaylists=[];


    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, pageID } = obj;

        if (type == "NEW") {
            currPage = pageID;

            addBtn();

        }

    });

    const fetchLists = () =>{
        currPlaylists.length=0;
        return new Promise((resolve)=>{
            chrome.storage.sync.get(null, function(items) {
                var allKeys = Object.keys(items);
                //console.log(allKeys);
                //console.log(Object.values(items));
                for(let i=0; i< Object.keys(items).length ;i++)
                {
                let currItem=[];
                currItem.push(Object.keys(items)[i]);
                currItem.push(Object.values(items)[i]);
                currPlaylists.push(currItem);
                }
                console.log(currPlaylists);

            });
            
        });
        
    }

    const addBtn = async () => {
        // chrome.tabs.executeScript(tabId, {

        // });

        const BtnExists = document.getElementsByClassName("play-btn")[0];
        // console.log(BtnExists);
        if (!BtnExists) {


            //PinControls = document.getElementsByClassName("lH1 dyH iFc H2s bwj O2T zDA IZT CKL");
            PinControls = document.getElementsByClassName("hs0 mQ8 qF5 un8 C9i TB_");
            console.log(PinControls.length);
            for (var i = 0; i < PinControls.length; i++) {
                const playBtn = document.createElement("img");

                playBtn.src = chrome.runtime.getURL("assets/button1.png");
                playBtn.className = "pinspot-button " + "play-btn";
                playBtn.title = "Click to add playlist";
                playBtn.height = 100;
                playBtn.width = 100;
                console.log(PinControls[i]);
                //const gettingCurrent = chrome.tabs.getCurrent()
               // console.log(gettingCurrent);
                PinControls[i].appendChild(playBtn);
                playBtn.addEventListener("click", addPlaylist);
            }

            // PinControls.before(playBtn);
        }
    };

    const addPlaylist = () => {
        const pop = document.getElementsByClassName("popup-spot")[0];
        if (!pop) {

            
            let text;
            let playlist = prompt("Enter playlist:", "");
            console.log(playlist);
            let key=window.location.href;
            key=key.slice(0,-1);
            console.log(key);
            let key2 = key.split("/");
            let key3=key2[key2.length-1];
            const imgsrc=document.getElementsByClassName("hCL kVc L4E MIw")[0].src;
           // var products = document.getElementsByClassName("XiG ho- sLG zI7 iyn Hsu").querySelectorAll("hCL kVc L4E MIw");
           // console.log(products);
            console.log(imgsrc);
            let currElem=[];
            currElem.push(playlist);
            currElem.push(imgsrc);
            var key4=String(key3);
            chrome.storage.sync.set({ [key4] : currElem }).then(() => {
                console.log("Value is set");
            });
            fetchLists();
            // PinControls.before(playBtn);
        }
    }

    //addBtn();
})();