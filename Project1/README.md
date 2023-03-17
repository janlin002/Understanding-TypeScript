# 重點整理

### 使用 TypeScript + firebase + google 寫一個剪膽的地圖搜尋系統

**keyword**
- google js maps
- @types/google.maps

首先先到 `google js maps` 取註冊一個 `google map api token`

[連結網址](https://developers.google.com/maps/documentation/geocoding/start?hl=zh-tw)
```
https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
```

上方api，需把 `YOUR_API_KEY`  改成剛剛申請的key

使用 axios 去 call api 拿資料

```js
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
```

`new google.maps.Map` 跟 `google.maps.Marker` 是google釋出的方法，可以取得地圖跟標記

不過這邊 會找不到 google(can't find module google)，有兩種方式可以解決

- `declare const google:any`
- 使用 @types/google.maps

### 相關連結
- Google Maps Pricing: https://cloud.google.com/maps-platform/pricing/sheet/

- Google Geocoding API: https://developers.google.com/maps/documentation/geocoding/start

- Google Maps JS SDK: https://developers.google.com/maps/documentation/javascript/tutorial