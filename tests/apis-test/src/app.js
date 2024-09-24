import {loadSomePlacesFromCategories} from "./google-map-place.js";
import {config} from "dotenv";
import {loadInstagramDetails} from "./instagram.js";

(async () => {

config()

console.log(
`-------------------------------------------------------------------
TEST DES APIS
-------------------------------------------------------------------`
)

console.log(
`
INFORMATIONS :

    200$ de crédit offert par mois
    Lien de listage des tarifications : https://mapsplatform.google.com/pricing/
`
)

await loadSomePlacesFromCategories("musées")
await loadInstagramDetails()

})()