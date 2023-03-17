import axios from 'axios'

const form = document.querySelector('form')
const addressInput = document.getElementById('address') as HTMLInputElement

const GOOGLE_API_KEY = 'AIzaSyDcvaJ1cd9HvaqF4UYMKe_xLTZ3zhXpF8o'

// const GOOGLE_MAP_API = `https://maps.googleapis.com/maps/api/geocode/json?address=&key=${GOOGLE_API_KEY}`

// console.log(GOOGLE_MAP_API, 'GOOGLE_MAP_API')

// declare const google:any

async function inputTexting(element: Event){
    element.preventDefault()

    const inputAddress = addressInput.value

    axios
        .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${inputAddress}&key=${GOOGLE_API_KEY}`
    )
        .then((res) => {
            if(res.data.status !== 'OK'){
                alert('輸入位置有誤')
            }else {
                const targetValue = res.data.results[0].geometry.location

                const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
                    center: targetValue,
                    zoom: 16,
                });
                new google.maps.Marker({
                    position: targetValue,
                    map,
                });
            }   
        })
        .catch(error => alert(error))
}

form?.addEventListener('submit', inputTexting)