const input = document.querySelector(".input");
input.addEventListener("keydown", handleInput);

const urlParams = new URLSearchParams(window.location.search); 
const param = urlParams.get('url');
if(param) {
input.value = param;
checkURL();
}

async function handleInput(e) {
  if (e.key !== "Enter") return;
  checkURL();
}

  async function checkURL() {
  const query = input.value;
  const formattedURL = query.replace("https://", "")
  const results = document.getElementById("checked");
  results.innerText = "Checking...";
  //have to have backend to do this do NOT reverse proxy through caddy please
  let ls =  await fetch("/api/fl/lightspeed/v1?url=" + formattedURL)
  let fort = await fetch("/api/fl/fortigaurd/v1?url=" + formattedURL)
  let palo = await fetch("/api/fl/paloalto/v1?url=" + formattedURL)
  let blocksi = await fetch("/api/fl/blocksi/v1?url=" + formattedURL)

  
  let lightspeedData = await ls.json();
  let blocksijson = await blocksi.json(); 
  let fortiguardData = await fort.json();
  let paloaltoData = await palo.json();
  let paloaltoshit = JSON.parse(paloaltoData);

  //catagorize
  let categorizedLSF = await catagorizeLSF(lightspeedData);
  let categorizedLSR = await catagorizeLSR(lightspeedData);
  let categorizedBlocksi = await catagorizeBlocksi(blocksijson);
  let categorizedFort = await catagorizeFort(fortiguardData);
  let categorizedPalo = await categorizePalo(paloaltoshit);

 results.innerText = `Results:
       Fortigaurd: ${categorizedFort}
       Lightspeed Filter: ${categorizedLSF}
       Lightspeed Rocket: ${categorizedLSR}
       Palo Alto: ${categorizedPalo}
       Blocksi: ${categorizedBlocksi} `;
    };


   async function catagorizeLSF(lsjson) {
    try {
        const response = await fetch("/assets/json/lightspeed.json");
        const lightspeedcat = await response.json();
        let result = ''

        lightspeedcat.forEach((catagory) => {
          let ls = lsjson.data
          let lsfilter = ls.a

          if(catagory.CategoryNumber === lsfilter.cat) {
            let CategoryName = catagory.CategoryName;
            let allow = catagory.Allow;

            result = CategoryName + (allow === "1"  ? " Likely Unblocked" : " Likely Blocked");
            }
          });
          return result;
        }catch(e) {
            result = "Error" + e;
            return result;
        }
          }


          async function catagorizeLSR(lsjson) {
            try {
            const response = await fetch("/assets/json/lightspeed.json");
            const lightspeedcat = await response.json();
            let result = ''

            lightspeedcat.forEach((catagory) => {
              let ls = lsjson.data
              let lsrocket = ls.b

              if(catagory.CategoryNumber === lsrocket.cat) {
                let CategoryName = catagory.CategoryName;
                let allow = catagory.Allow;
               result = CategoryName + (allow === "1"  ? " Likely Unblocked" : " Likely Blocked");
          }}); 
          return result;
        }catch(e) {
            result = "Error" + e;
            return result;
        }
              }
  

    async function catagorizeFort(fgjson) {
        try {
        const response = (await fetch("/assets/json/fortigaurd.json"));
        const fcat = await response.json();
        let result = ''

        for(let catagory of fcat) {
          let dns = fgjson.dns;
          let categoryname = dns.categoryname;
          
          if (catagory.CategoryName === categoryname) {
         result = catagory.CategoryName + " Likely Blocked"
         break;
      }else {
        result = categoryname + " Likely Unblocked";
      }
    };
    return result;
} catch(e) {
    result = "Error" + e;
    return result;
    }
    }

    async function categorizePalo(palojson) {
        try {
        const response = await fetch("/assets/json/paloalto.json");
        const palocat = await response.json();
        let result = '';  
        let catagory = palojson.e;
        let catagory2 = catagory.categoryname;
        for (let pcatagory of palocat) {
          if(pcatagory.CategoryName === catagory2) {
            result = catagory2 + " Likely Blocked";
            break;
        }else {
            result = catagory2 + " Likely Unblocked";
        }};
            return result;
        } catch (e) {
            console.error(e);
            return "Error: " + e.message;
        }
    }
    
    

    async function catagorizeBlocksi(blocksijson) {
        try {
        const response = await fetch("/assets/json/blocksi.json")
        const blocksicat = await response.json();
        let catagory2 = blocksijson.Category;
        let result = '';

        blocksicat.forEach((catagory) => {   
          if(catagory.CategoryNumber === catagory2) {
            let CategoryName = catagory.CategoryName;
            let allow = catagory.Allow;
            result = CategoryName + (allow === "1"  ? " Likely Unblocked" : " Likely Blocked");
            }
          });
          return result;
        }
          catch(e) {
            result = "Error" + e;
            return result;
            }
        }
    