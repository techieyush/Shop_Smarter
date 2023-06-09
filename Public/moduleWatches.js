var app=angular.module('myMod',[]);
app.controller("myWatches1Controller",function($scope,$window){
    $scope.imageAddress = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    $scope.price = "";
    $scope.brand = "";
    $scope.rating = "";
    $scope.item1 = function(){
        let i = $scope.selectedOption1;
        let image = $scope.watches1[i].image;
        let price = $scope.watches1[i].price;
        let brand = $scope.watches1[i].brand;
        let rating = $scope.watches1[i].rating;
        
       $scope.imageAddress = image;
        $scope.price = price;
        $scope.brand = brand;
        $scope.rating = rating;
}
   

    $scope.watches1=[
      {
        "id":"0",
        "title": "---Select Anyone--",
        "price": "",
        "description": "",
        "brand": "",
        "rating": "",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
        "url": "",
        "Price_url":""},
       
      
         {
          "id":"1",
          "title":"FORSINING ",
          "price": "4,099",
          "description": "FORSINING Analogue Men's Watch(Gold Dial Silver Colored Strap)-S1089-2",
          "brand":"FORSINING ",
          "rating": "4.0 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/91QjTrBIOXL._UX522_.jpg",
          "url": "https://www.amazon.in/Steampunk-Movement-Elegant-Skeleton-Mechanical/dp/B07P9H6BNN?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1WMKM4E5WRAMB",
          
          "prices_url": "https://www.amazon.in/Watch-Fourteen-Tales-Thirteen-Covens-ebook/dp/B0722CB3XS/ref=sr_1_54?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-54",
          
         },
         {
          "id":"2",
          "title":"SF Venus",
          "price": "475",
          "description": "Venus Digital Grey Dial Men's Watch-NL7982PP03",
          "brand":"Venus",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71DMUQgia5L._UY679_.jpg",
          "url": "https://www.amazon.in/Sonata-Digital-Grey-Dial-Watch-NK7982PP03/dp/B00F4SH916/ref=sr_1_55?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-55",
          
          "prices_url": "https://www.amazon.in/Sonata-Digital-Grey-Dial-Watch-NK7982PP03/dp/B00F4SH916/ref=sr_1_55?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-55",
          
         },
         {
            "id":"3",
            "title":"Fastrack Casual Watch",
            "price": "1,255",
          "description": "Casual Analog Dial Watch for Men",
          "brand":"Fastrack",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71fLty4zklL._UX679_.jpg",
          "url": "https://www.amazon.in/Fastrack-Analog-White-Dial-Watch-3261SL01/dp/B09BCG9DVG/ref=sr_1_56?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-56",
          
          "prices_url": "https://www.amazon.in/Fastrack-Analog-White-Dial-Watch-3261SL01/dp/B09BCG9DVG/ref=sr_1_56?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-56",
        
         },
    
         {
            "id":"4",
            "title":"Titan Youth",
            "price": "2,215",
          "description": "Youth Analog Black Dial Women's Watch-NL2480SM02/NP2480SM02",
          "brand":" Titan",
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71-ao4taStL._UY879_.jpg",
          "url": "https://www.amazon.in/Titan-Youth-Analog-Womens-Watch-NK2480SM02/dp/B00ATCDS30/ref=sr_1_57?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-57",
          
          "prices_url": "https://www.amazon.in/Titan-Youth-Analog-Womens-Watch-NK2480SM02/dp/B00ATCDS30/ref=sr_1_57?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-57",
          
         },
         {
            "id":"5",
            "title":"Titan Raga",
            "price": "3,870",
          "description": "Raga Viva Analog Rose Gold Dial Women's Watch-NN2603WL01/NP2603WL01",
          "brand":"Titan ",
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61BPabgPbZL._UY879_.jpg",
          "url": "https://www.amazon.in/Titan-Raga-Analog-Womens-Watch-2603WL01/dp/B07CPX24S1/ref=sr_1_58?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-58",
         
          "prices_url": "https://www.amazon.in/Titan-Raga-Analog-Womens-Watch-2603WL01/dp/B07CPX24S1/ref=sr_1_58?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-58",
         
         },
         {
            "id":"6",
            "title":"BENYAR",
            "price": "3,690",
          "description": "Automatic Mechanical Skeleton Leather Strap Men's Watch",
          "brand":"BENYAR",
          "rating": "4.0 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/51K7AFBrdQL.jpg",
          "url": "https://www.amazon.in/BENYAR-Analogue-Watch-Black-Colored/dp/B08426FNBJ/ref=sr_1_59?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-59",
          
          "prices_url": "https://www.amazon.in/BENYAR-Analogue-Watch-Black-Colored/dp/B08426FNBJ/ref=sr_1_59?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-59",
          
         },
         {
            "id":"7",
            "title":"Fire-Boltt",
            "price": "1,599",
          "description": "Fire-Boltt Ninja 2 SpO2 Full Touch Smartwatch with 30 Workout Modes, Heart Rate Tracking, and 100+ Cloud Watch Faces, 7 Days of extensive Battery, Dark Green (Black)",
          "brand":"Fire-Boltt",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/617eiZeFtNL._SX679_.jpg",
          "url": "https://www.amazon.in/Fire-Boltt-Smartwatch-Workout-Tracking-extensive/dp/B09NM8S1V4/ref=sr_1_60?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-60",
          
          "prices_url": "https://www.amazon.in/Fire-Boltt-Smartwatch-Workout-Tracking-extensive/dp/B09NM8S1V4/ref=sr_1_60?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-60",
          
         },
         {
            "id":"8",
            "title":"Fastrack Casual Analog ",
            "price": "1,480",
          "description": "Casual Analog Silver Dial Men's Watch-NL3120SM01/NP3120SM01",
          "brand":"Fastrack",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71rmzTl4-cL._UY679_.jpg",
          "url": "https://www.amazon.in/Fastrack-Casual-Analog-Silver-Watch-NK3120SM01/dp/B00NLAU77W/ref=sr_1_61?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-61",
          
          "prices_url": "https://www.amazon.in/Fastrack-Casual-Analog-Silver-Watch-NK3120SM01/dp/B00NLAU77W/ref=sr_1_61?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-61",
         
         },
         {
            "id":"9",
            "title":"TIMEWEAR",
            "price": "489",
          "description": "Analogue - Digital Men's Watch (Black Dial Black Colored Strap)",
          "brand":"TIMEWEAR",
          "rating": "3.8 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81OTD-gDViL._UL1500_.jpg",
          "url": "https://www.amazon.in/Timewear-Military-Analogue-Digital-Black/dp/B0799M45HN/ref=sr_1_62?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-62",
          
          "prices_url": "https://www.amazon.in/Timewear-Military-Analogue-Digital-Black/dp/B0799M45HN/ref=sr_1_62?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-62",
          
         },
         {
            "id":"10",
            "title":"Red Light Digital",
            "price": "379",
          "description": "Watch for Boys and Girl Spider Men Kids Light Glowing Watch with Music Tune and Face Cover Multicolor Led Digital Light Kid Watch (3-9 Year Red",
          "brand":"Digital",
          "rating": "3.8 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61GfZgleR0S._UX679_.jpg",
          "url": "https://www.amazon.in/Lionmati-Spider-Glowing-Multicolor-Digital/dp/B09J8XCYLQ/ref=sr_1_63?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-63",
          
          "prices_url": "https://www.amazon.in/Lionmati-Spider-Glowing-Multicolor-Digital/dp/B09J8XCYLQ/ref=sr_1_63?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-63",
          
         },
         {
            "id":"11",
            "title":"Fastrack Analog Black Dial ",
            "price": "3,400",
          "description": "Analog Black Dial Men's Watch-NL3147KM01/NN3147KM01/NP3147KM01",
          "brand":"Fastrack",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71fN5Lk1sQL._UY679_.jpg",
          "url": "https://www.amazon.in/Fastrack-Analog-Black-Dial-Watch-NK3147KM01/dp/B01GDWNV86/ref=sr_1_64?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-64",
         
          "prices_url": "https://www.amazon.in/Fastrack-Analog-Black-Dial-Watch-NK3147KM01/dp/B01GDWNV86/ref=sr_1_64?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-64",
          
         },
         {
            "id":"12",
            "title":"Titan Analog Dial Men's Watch",
            "price": "1,585",
          "description": "Analog Dial Men's Watch",
          "brand":"Titan",
          "rating": "4.4 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71ArUmx8udL._UY679_.jpg",
          "url": "https://www.amazon.in/Titan-Analog-Black-Watch-1864SL05/dp/B08KSZ633D/ref=sr_1_65?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-65",
          
          "prices_url": "https://www.amazon.in/Titan-Analog-Black-Watch-1864SL05/dp/B08KSZ633D/ref=sr_1_65?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-65",
          
         },
         {
            "id":"13",
            "title":"Noise Twist",
            "price": "1,999",
          
            "decsription": "Noise Newly Launched Twist Bluetooth Calling Smart Watch with 1.38\" TFT Biggest Display, Up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Gold Wine)",
          "brand":"Noise",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61d+0-5j6vL._SL1500_.jpg",
            "url": "https://www.amazon.in/Noise-Launched-Bluetooth-Calling-Tracking/dp/B0BJ73NWMC/ref=sr_1_66?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-66",
         
          "prices_url": "https://www.amazon.in/Noise-Launched-Bluetooth-Calling-Tracking/dp/B0BJ73NWMC/ref=sr_1_66?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-66",
          
         },
         {
            "id":"14",
            "title":"Sonata Superfibre",
            "price": "1,079",
          "description": "Superfibre Digital Grey Dial Men's Watch NM77034PP03 / NL77034PP03/NP77034PP03",
          "brand":"Sonata",
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/719Z-9RZMeL._UY679_.jpg",
          "url": "https://www.amazon.in/Sonata-Superfibre-Digital-Grey-Watch-NH77034PP03/dp/B00QPQWM1S/ref=sr_1_67?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-67",
          
         
          "prices_url": "https://www.amazon.in/Sonata-Superfibre-Digital-Grey-Watch-NH77034PP03/dp/B00QPQWM1S/ref=sr_1_67?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-67",
          
         },
         {
            "id":"15",
            "title":"LONGBO",
            "price": "990",
          "description": "Master Royale Analog Watch for Men",
          "brand":"LONGBO",
          "rating": "4.0 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81H1XbQeetL._UX679_.jpg",
          "url": "https://www.amazon.in/Longbo-Master-Royale-Stainless-Luxury/dp/B07LCPDXQL/ref=sr_1_68?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-68",
        
          "prices_url": "https://www.amazon.in/Longbo-Master-Royale-Stainless-Luxury/dp/B07LCPDXQL/ref=sr_1_68?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-68",
         
         },
         {
            "id":"16",
            "title":"SENS NUTON 1",
            "price": "1,099",
          
            "desciption": "SENS NUTON 1 with 1.7 IPS Display, Orbiter, 5ATM & 150+ Watch Faces & Free Additional Strap (Royal Silver)",
          "brand":"SENS NUTON",
          "rating": "3.9 out of 5 stars",
            "image":"https://m.media-amazon.com/images/I/41wlnBi008L._SX300_SY300_QL70_FMwebp_.jpg",
            "url": "https://www.amazon.in/SENS-Display-Orbiter-Additional-Silver/dp/B0BDHCPGN5/ref=sr_1_73?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-73",
         
          "prices_url": "https://www.amazon.in/SENS-Display-Orbiter-Additional-Silver/dp/B0BDHCPGN5/ref=sr_1_73?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-73",
          
         },
         {
            "id":"17",
            "title":"Timex Analog watch",
            "price": "2,866",
          
            "description": "Analog Black Dial Men's Watch-TW000U914",
            "brand":"Timex",
            "rating": "4.4 out of 5 stars",
            "image":"https://m.media-amazon.com/images/I/813zxeJIeoS._UY679_.jpg",
            "url": "https://www.amazon.in/Timex-Analog-Black-Dial-Watch-TW000U914/dp/B073P9FRS2/ref=sr_1_74?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-74",
          
          "prices_url": "https://www.amazon.in/Timex-Analog-Black-Dial-Watch-TW000U914/dp/B073P9FRS2/ref=sr_1_74?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-74",
          
         },
         {
            "id":"18",
            "title":"SF Sporty",
            "price": "500",
          "description": "Sporty Analog Black Dial Men's Watch-NL7930PP01/NP7930PP01",
          "brand":"SF Sporty",
          "rating": "4.0 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71mG-2RT7NL._UY679_.jpg",
          "url": "https://www.amazon.in/Sonata-Super-Fibre-Analog-Watch-NH7930PP01C/dp/B00ECWG1NC/ref=sr_1_75?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-75",
         
          "prices_url": "https://www.amazon.in/Sonata-Super-Fibre-Analog-Watch-NH7930PP01C/dp/B00ECWG1NC/ref=sr_1_75?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-75",
         
         },
         {
            "id":"19",
            "title":"SWADESHI STUFF",
            "price": "189",
          "description": "Analogue Boy's & Girl's Watch (Multicolored Dial & Strap)",
          "brand":"SWADESHI Stuff",
          "rating": "3.4 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71X-TsjWN+L._UX679_.jpg",
    
          "url": "https://www.amazon.in/Swadesi-Stuff-Analogue-Watch-Girls/dp/B085W1WNR5/ref=sr_1_76?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-76",
         
          "prices_url": "https://www.amazon.in/Swadesi-Stuff-Analogue-Watch-Girls/dp/B085W1WNR5/ref=sr_1_76?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-76",
          
         },
         {
            "id":"20",
            "title":"TIMEX Classics",
            "price": "581",
          "description": "Classics Analog White Dial Men's Watch-A300",
          "brand":"TIMEX",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71rOBNFlPjL._UY679_.jpg",
          "url": "https://www.amazon.in/Timex-Classics-Analog-White-Watch-A300/dp/B0073RULNE/ref=sr_1_77?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-77",
          
          "prices_url": "https://www.amazon.in/Timex-Classics-Analog-White-Watch-A300/dp/B0073RULNE/ref=sr_1_77?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-77",
          
         },
        
         {
            "id":"21",
            "title":"boAt Flash ",
            "price": "1,599",
          "description": "boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes, 1.3\" Screen, 170+ Watch Faces, Sleep Monitor, Gesture, Camera & Music Control, IP68 & 7 Days Battery Life(Galaxy Blue)",
         "brand":"BOAT",
          "rating": "4.0 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/712reiBu5PL._SX679_.jpg",
          "url": "https://www.amazon.in/boAt-Flash-Smartwatch-Activity-Resistance/dp/B0949TYBW6/ref=sr_1_79?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-79",
          
          "prices_url": "https://www.amazon.in/boAt-Flash-Smartwatch-Activity-Resistance/dp/B0949TYBW6/ref=sr_1_79?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-79",
          
         },
         {
            "id":"22",
            "title":"Sonata Analog Watch",
            "price": "610",
          "description": "Analog Women's Watch",
         "brand":"Sonata",
         "rating": "4.3 out of 5 stars",
         "image":"https://m.media-amazon.com/images/I/61s0wyNRs2L._UY679_.jpg",
          "url": "https://www.amazon.in/Sonata-Analog-Silver-Womens-Watch-8170SM02/dp/B08J4FZQZ7/ref=sr_1_80?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-80",
       
          "prices_url": "https://www.amazon.in/Sonata-Analog-Silver-Womens-Watch-8170SM02/dp/B08J4FZQZ7/ref=sr_1_80?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-80",
        
         },
         {
            "id":"23",
            "title":"Sonata Super Fibre",
            "price": "600",
          "description": "Super Fibre Digital Grey Dial Men's Watch-NL87011PP04/NP87011PP04",
          "brand":"Sonata",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71tdAM-NCqL._UY679_.jpg",
          "url": "https://www.amazon.in/Sonata-Super-Fibre-Digital-NH87011PP04/dp/B00V6BICBQ/ref=sr_1_81?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-81",
         
          "prices_url": "https://www.amazon.in/Sonata-Super-Fibre-Digital-NH87011PP04/dp/B00V6BICBQ/ref=sr_1_81?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-81",
         
         },
         {
            "id":"24",
            "title":"Selloria",
            "price": "198",
          
            "description": "Digital Watch Shockproof Multi-Functional Automatic Black Color Strap Waterproof Digital Sports Watch for Mens Kids Watch for Boys Watch for Men Pack of 1 Watch Water Resistance Digital Watch",
          "brand":"selloria",
          "rating": "3.7 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61YTgYOiedL._UY679_.jpg",
            "url": "https://www.amazon.in/SELLORIA-Shockproof-Multi-Functional-Waterproof-Resistance/dp/B09CHJ5RWK/ref=sr_1_82?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-82",
          
          "prices_url": "https://www.amazon.in/SELLORIA-Shockproof-Multi-Functional-Waterproof-Resistance/dp/B09CHJ5RWK/ref=sr_1_82?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-82",
         
         },
         {
            "id":"25",
            "title":"Fastrack Unisex's  Watch",
            "price": "636",
          "name": "Analog White Dial Unisex's Watch-NG38021PP10W / NG38021PP10W",
          "brand":'Fastrack',
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/91VEPukVjxL._UY679_.jpg",
          "url": "https://www.amazon.in/Fastrack-Analog-White-Unisexs-Watch-NG38021PP10C/dp/B01KQGQMOK/ref=sr_1_83?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-83",
          
          "prices_url": "https://www.amazon.in/Fastrack-Analog-White-Unisexs-Watch-NG38021PP10C/dp/B01KQGQMOK/ref=sr_1_83?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-83",
          
         },
         {
            "id":"26",
            "title":"Timex Silver Dial",
            "price": "3,196",
          "description": "Analog Silver Dial Men's Watch-TWEG18506",
         "brand":"Timex",
         "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61bzCB3GfEL._UY679_.jpg",
          "url": "https://www.amazon.in/Timex-Analog-Silver-Dial-Watch-TWEG18506/dp/B08X3NPNPB/ref=sr_1_84?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-84",
          
          "prices_url": "https://www.amazon.in/Timex-Analog-Silver-Dial-Watch-TWEG18506/dp/B08X3NPNPB/ref=sr_1_84?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-84",
          
         },
         {
            "id":"27",
            "title":"Titan Round Dial Watch ",
            "price": "3,516",
          "description": "Men's Round Dial Watch",
          "brand":"Titan",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71M5ZEA9fhL._UY679_.jpg",
          "url": "https://www.amazon.in/Titan-Analog-Blue-Dial-Watch-NK1733KL01/dp/B01M1CI9GW/ref=sr_1_90?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-90",
         
          "prices_url": "https://www.amazon.in/Titan-Analog-Blue-Dial-Watch-NK1733KL01/dp/B01M1CI9GW/ref=sr_1_90?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-90",
          
         },
         {
            "id":"28",
            "title":"DIZO Watch D2 Power",
            "price": "1,799",
          
            "description": "DIZO Watch D2 Power (by realme TechLife) –Large 1.91\" Superlight, Single Chipset Bluetooth Calling Smartwatch with Smart Swipe,150 +Stylish Watch Faces and 10 Day Battery (Classic Black)",
          "brand":"DIZO",
          "rating": "3.6 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61kagiCgCGL._SL1500_.jpg",
            "url": "https://www.amazon.in/DIZO-TechLife-Superlight-Bluetooth-Smartwatch/dp/B0BV749X34/ref=sr_1_91?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-91",
          
          "prices_url": "https://www.amazon.in/DIZO-TechLife-Superlight-Bluetooth-Smartwatch/dp/B0BV749X34/ref=sr_1_91?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-91",
         
         },
         {
            "id":"29",
            "title":"LORENZ",
            "price": "399",
          "description": "Analog Watch for Men | Watch for Boys",
          "brand":"LORENZ",
          "rating": "3.5 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81epQjxbzjL._UL1500_.jpg",
          "url": "https://www.amazon.in/Lorenz-Black-Analog-Watch-MK-3080K/dp/B08VS3R8VZ/ref=sr_1_92?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-92",
         
          "prices_url": "https://www.amazon.in/Lorenz-Black-Analog-Watch-MK-3080K/dp/B08VS3R8VZ/ref=sr_1_92?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-92",
          
         },
         {
            "id":"30",
            "title":"Boat Xtend",
            "price": "2,299",
          "description": "boAt Xtend Smart Watch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, HR & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery Life(Deep Blue)",
          "brand":"BOAT",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61RPXUwgCjL._SL1500_.jpg",
          "url": "https://www.amazon.in/boAt-Smartwatch-Multiple-Monitoring-Resistance/dp/B096VDJ5QX/ref=sr_1_93?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-93",
          
          "prices_url": "https://www.amazon.in/boAt-Smartwatch-Multiple-Monitoring-Resistance/dp/B096VDJ5QX/ref=sr_1_93?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-93",
          
         },
         {
            "id":"31",
            "title":"Titan Karishma",
            "price": "2,172",
          "description": "Karishma Analog Blue Dial Men's Watch-NL1774SM01/NP1774SM01",
          "brand":"Titan",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/713k0jXW9QL._UL1500_.jpg",
          "url": "https://www.amazon.in/Titan-Karishma-Analog-Blue-Watch-1774SM01/dp/B07CNVJ241/ref=sr_1_94?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-94",
        
          "prices_url": "https://www.amazon.in/Titan-Karishma-Analog-Blue-Watch-1774SM01/dp/B07CNVJ241/ref=sr_1_94?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-94",
          
         },
         {
            "id":"32",
            "title":"Titan Smart watch",
            "price": "7,646",
          "description": "Smart Smartwatch with Stress & Sleep Monitor, SpO2,Women Health Monitor,5 ATM Water Resistance & Upto 14 Days Battery Life",
          "brand":"Titan",
          
          "rating": "3.7 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61xA+n7prNL._UL1500_.jpg",
          "url": "https://www.amazon.in/Titan-Smartwatch-Aluminum-Immersive-Multi-sport/dp/B09NDM3ZGW/ref=sr_1_95?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-95",
         
          "prices_url": "https://www.amazon.in/Titan-Smartwatch-Aluminum-Immersive-Multi-sport/dp/B09NDM3ZGW/ref=sr_1_95?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-95",
          
         },
         {
            "id":"33",
          "title":"Fastrack Tees",
          "price": "760",
          "description": "Tees Analog Dial Unisex-Adult Watch",
          "brand":"Fastrack",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71yIH7xPTML._UL1500_.jpg",
          "url": "https://www.amazon.in/Fastrack-Tees-Analog-Unisex-Adult-Watch-68012PP03/dp/B09B295D2M/ref=sr_1_96?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-96",
          
          "prices_url": "https://www.amazon.in/Fastrack-Tees-Analog-Unisex-Adult-Watch-68012PP03/dp/B09B295D2M/ref=sr_1_96?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-96",
          
         },
         {
            "id":"34",
            "title":"ADAMO",
            "price": "289",
          "description": "Digital 24 Images Projector Watch for Kids Boys Watch, Diwali Gift, Birthday Return Gift, Best Digital Toy Watch for Boy's & Girl's BG-906",
          "brand":"ADAMO",
          "rating": "3.8 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/51hmgsNCE8L.jpg",
          "url": "https://www.amazon.in/ADAMO-Digital-Projector-Birthday-906GGR02/dp/B0BBBKNDN5/ref=sr_1_97?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-97",
       
    
          "prices_url": "https://www.amazon.in/ADAMO-Digital-Projector-Birthday-906GGR02/dp/B0BBBKNDN5/ref=sr_1_97?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-97",
          
         },
         {
            "id":"35",
            "title":"Barbie Watch",
            "price": "189",
          "description": "White Dial Barbie Love Watch Series Analogue Girl's Watch",
          "url": "https://www.amazon.in/SWADESI-STUFF-Barbie-Analogue-Round/dp/B07P3YJXR5/ref=sr_1_100?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-100",
          "brand":"SWADESHI STUFF",
          "rating": "3.4 out of 5 stars"
          ,"image":"https://m.media-amazon.com/images/I/71iPnemk9nL._UL1500_.jpg",
    
          "prices_url": "https://www.amazon.in/SWADESI-STUFF-Barbie-Analogue-Round/dp/B07P3YJXR5/ref=sr_1_100?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-100",
         
         },
         {
            "id":"36",
            "title":"Fossil Tillie",
            "price": "5,997",
            "description": "Tillie Analog White Dial Women's Watch-BQ3497",
            "brand":"Fossil",
            "rating": "4.3 out of 5 stars",
            "image":"https://m.media-amazon.com/images/I/513CVNV86fL._UX679_.jpg",
             "url": "https://www.amazon.in/Fossil-Tillie-Analog-Womens-Watch-BQ3497/dp/B08YJNVS5M/ref=sr_1_101?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-101",
            "prices_url": "https://www.amazon.in/Fossil-Tillie-Analog-Womens-Watch-BQ3497/dp/B08YJNVS5M/ref=sr_1_101?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-101",
          
         },
         {
            "id":"37",
        "title":"Sonata Analog  Watch",
          "price": "700",
          "description": "Analog White Dial Men's Watch-7135SL03/NP7135SL03",
          "brand":"Sonata",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71Ym6KSEN+L._UY679_.jpg",
          "url": "https://www.amazon.in/Sonata-Analog-White-Dial-Watch-7135SL03/dp/B08R3VJHLN/ref=sr_1_102?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-102",
          
          "prices_url": "https://www.amazon.in/Sonata-Analog-White-Dial-Watch-7135SL03/dp/B08R3VJHLN/ref=sr_1_102?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-102",
          
         },
         {
            "id":"38",
            "title":"Fire-Boltt Dagger",
            "price": "3,799",
          "description": "Fire-Boltt Dagger 1.43\" AMOLED Display Smartwatch, 96% Screen to Body Ratio with Single BT Bluetooth Calling, IP68, Dual Button Technology, Rugged Build, AI Voice Assistant, Multiple Sports (Black)",
        "brand":"Fire-Boltt",
        "rating": "4.4 out of 5 stars",
        "image":"https://m.media-amazon.com/images/I/61Fj5wTOQiL._SL1500_.jpg",
          "url": "https://www.amazon.in/Fire-Boltt-Smartwatch-Bluetooth-Technology-Assistant/dp/B0BRPZPKJG/ref=sr_1_103?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-103",
         
          "prices_url": "https://www.amazon.in/Fire-Boltt-Smartwatch-Bluetooth-Technology-Assistant/dp/B0BRPZPKJG/ref=sr_1_103?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-103",
          
         },
         {
            "id":"39",
            "title":"Men's Watch-TW000U933",
            "price": "1,999",
          "description": "Analog White Dial Men's Watch-TW000U933",
          "brand":"TIMEX",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71gnZhQv95L._UY679_.jpg",
          "url": "https://www.amazon.in/Timex-Analog-White-Dial-Watch-TW000U933/dp/B07BH58KVM/ref=sr_1_104?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-104",
          
          "prices_url": "https://www.amazon.in/Timex-Analog-White-Dial-Watch-TW000U933/dp/B07BH58KVM/ref=sr_1_104?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-104",
          "rating": "4.1 out of 5 stars"
         }
         ,
         {
            "id":"40",
            "title":"IMPERIOUS-The Royal",
            "price": "759",
              "description": "Analogue Women's Watch (Black Dial)",
              "brand":"IMPERIOUS",
              "rating": "3.9 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/51LTJjshaIL._UX679_.jpg",
    
              "url": "https://www.amazon.in/Imperious-Analog-Black-Womens-Watch/dp/B07G9GJRF6/ref=sr_1_53?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-53",
             
              "prices_url": "https://www.amazon.in/Imperious-Analog-Black-Womens-Watch/dp/B07G9GJRF6/ref=sr_1_53?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-53",
              
             },
        ];
});

app.controller("myWatches2Controller",function($scope,$window){
    $scope.imageAddress = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    $scope.price2 = "";
    $scope.pb2 = "";
    $scope.pr2 = "";
    $scope.item2 = function(){
        let i = $scope.selectedOption2;
      
        let image = $scope.watches2[i].image;
        let price = $scope.watches2[i].price;
        let brand = $scope.watches2[i].brand;
        let rating = $scope.watches2[i].rating;
        
        
        $scope.imageAddress = image;
        $scope.price = price;
        $scope.brand = brand;
        $scope.rating = rating;
      
    }
    $scope.watches2=[
      {
        "id":"0",
        "title": "---Select Anyone--",
        "price": "",
        "description": "",
        "brand": "",
        "rating": "",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
        "url": "",
        "Price_url":""},
      
         {
            "id":"1",
            "title":"FORSINING ",
            "price": "5,999",
          "description": "FORSINING Analogue Men's Watch(Gold Dial Silver Colored Strap)-S1089-2",
          "brand":"FORSINING ",
          "rating": "Be the first to Review this product",
          "image":"https://m.media-amazon.com/images/I/91QjTrBIOXL._UX522_.jpg",
          "url": "https://www.flipkart.com/forsining-hour-glass-automatic-mechanical-unisex-self-winding-blue-analog-watch-men-women/p/itmfef3539a147ea?pid=WATGKGK4PZQWTYZE&lid=LSTWATGKGK4PZQWTYZEB8QQQS&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8N5kkcrcBWYTRSc_zUV_XAKKWH2__XamoXSyzkhmUjsyTuD54E03tRoCulEQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Watch-Fourteen-Tales-Thirteen-Covens-ebook/dp/B0722CB3XS/ref=sr_1_54?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-54",
          
         },
         {
            "id":"2",
            "title":"SF Venus",
            "price": "499",
          "description": "Venus Digital Grey Dial Men's Watch-NL7982PP03",
          "brand":"Venus",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71DMUQgia5L._UY679_.jpg",
          "url": "https://www.flipkart.com/sonata-digital-watch-men/p/itmf3zhmekwmpape?pid=WATDA5ZAGHRECYKW&lid=LSTWATDA5ZAGHRECYKWEWMEJD&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8OuzxVpwebZP6TZu7eFTvpad5FoFqqzGPWzQcXm29aWG1OwsGIWmlhoCrjsQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Sonata-Digital-Grey-Dial-Watch-NK7982PP03/dp/B00F4SH916/ref=sr_1_55?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-55",
          
         },
         {
            "id":"3",
            "title":"Fastrack Casual Watch",
            "price": "1,366",
          "description": "Casual Analog Dial Watch for Men",
          "brand":"Fastrack",
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71fLty4zklL._UX679_.jpg",
          "url": "https://www.flipkart.com/fastrack-analog-watch-men/p/itm7e49326bec1e8?pid=WATFUJ94YFANSWMK&lid=LSTWATFUJ94YFANSWMKXG1AZI&marketplace=FLIPKART&store=r18&srno=b_1_25&otracker=browse&fm=organic&iid=c840314a-2a54-41e7-9eb6-d8308664a846.WATFUJ94YFANSWMK.SEARCH&ppt=browse&ppn=browse&ssid=czcsvhlcuo0000001681671607104",
          
          "prices_url": "https://www.amazon.in/Fastrack-Analog-White-Dial-Watch-3261SL01/dp/B09BCG9DVG/ref=sr_1_56?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-56",
        
         },
    
         {
            "id":"4",
            "title":"Titan Youth",
            "price": "2,215",
          "description": "Youth Analog Black Dial Women's Watch-NL2480SM02/NP2480SM02",
          "brand":" Titan",
          "rating": "4.4 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71-ao4taStL._UY879_.jpg",
          "url": "https://www.flipkart.com/titan-purple-analog-watch-women/p/itmf3zhgvssscgpb?pid=WATFFV4XGNZNFPD2&lid=LSTWATFFV4XGNZNFPD2ESVSN8&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8AWHqTIz0FT06bcusxe7HDVt-eZ_b33FpDGIpLeVGrRyF_UmTfjmDhoC0E4QAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Titan-Youth-Analog-Womens-Watch-NK2480SM02/dp/B00ATCDS30/ref=sr_1_57?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-57",
          
         },
         {
            "id":"5",
            "title":"Titan Raga",
            "price": "2,876",
          "description": "Raga Viva Analog Rose Gold Dial Women's Watch-NN2603WL01/NP2603WL01",
          "brand":"Titan ",
          "rating": "4.6 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61BPabgPbZL._UY879_.jpg",
          "url": "https://www.flipkart.com/titan-np2606wl02-analog-watch-women/p/itme0c213c65a20f?pid=WATFVCGFGDJZCXTG&lid=LSTWATFVCGFGDJZCXTGJXJ1GA&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8JU3O4Tekdd_R7mVmA5Y24JEe3T7feOm6kIPrrkaMvnJMFFRrlSfDxoCI9wQAvD_BwE",
         
          "prices_url": "https://www.amazon.in/Titan-Raga-Analog-Womens-Watch-2603WL01/dp/B07CPX24S1/ref=sr_1_58?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-58",
         
         },
         {
            "id":"6",
            "title":"BENYAR",
            "price": "3,690",
          "description": "Automatic Mechanical Skeleton Leather Strap Men's Watch",
          "brand":"BENYAR",
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/51K7AFBrdQL.jpg",
          "url": "https://www.flipkart.com/benyar-analog-watch-men/p/itmb1881a4bce147?pid=WATFNWNHCUNPNW2Z&lid=LSTWATFNWNHCUNPNW2ZRHMU1L&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8EwlDKXYkpD7BIF6299LU370E-cp3BgyRjpoSESdxu7lDSG7GNWc5BoCXvsQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/BENYAR-Analogue-Watch-Black-Colored/dp/B08426FNBJ/ref=sr_1_59?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-59",
          
         },
         {
            "id":"7",
            "title":"Fire-Boltt",
            "price": "1,599",
          "description": "Fire-Boltt Ninja 2 SpO2 Full Touch Smartwatch with 30 Workout Modes, Heart Rate Tracking, and 100+ Cloud Watch Faces, 7 Days of extensive Battery, Dark Green (Black)",
          "brand":"Fire-Boltt",
          "rating": "3.8 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/617eiZeFtNL._SX679_.jpg",
          "url": "https://www.flipkart.com/fire-boltt-ninja-touch-wake-spo2-smartwatch/p/itm05b47a90c7c32",
          
          "prices_url": "https://www.amazon.in/Fire-Boltt-Smartwatch-Workout-Tracking-extensive/dp/B09NM8S1V4/ref=sr_1_60?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-60",
          
         },
         {
            "id":"8",
            "title":"Fastrack Casual Analog ",
            "price": "1,480",
          "description": "Casual Analog Silver Dial Men's Watch-NL3120SM01/NP3120SM01",
          "brand":"Fastrack",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71rmzTl4-cL._UY679_.jpg",
          "url": "https://www.flipkart.com/fastrack-np3120sm01-analog-watch-men/p/itm6b172f692970a?pid=WATEJXFUF8KZBGGB&lid=LSTWATEJXFUF8KZBGGBRUKWBP&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8MZo-TdogQvcslAEKe6SbzEztqwCVl0REnl4v9bdli7xZNgFFPOVeRoCte4QAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Fastrack-Casual-Analog-Silver-Watch-NK3120SM01/dp/B00NLAU77W/ref=sr_1_61?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-61",
         
         },
         {
            "id":"9",
            "title":"TIMEWEAR",
            "price": "543",
          "description": "Analogue - Digital Men's Watch (Black Dial Black Colored Strap)",
          "brand":"TIMEWEAR",
          "rating": "4 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81OTD-gDViL._UL1500_.jpg",
          "url": "flipkart.com/timewear-1283blacktw-black-dial-silicone-strap-sports-analog-digital-watch-men/p/itmfg6f35cck9gus?pid=WATFG3KWJXVEXZGN&lid=LSTWATFG3KWJXVEXZGNUICYUE&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8Latp1_yppql2rZZORc1e0Vy8GhzfM90iNdO9G58uk_zFspmh5FgnhoCE5IQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Timewear-Military-Analogue-Digital-Black/dp/B0799M45HN/ref=sr_1_62?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-62",
          
         },
         {
            "id":"10",
            "title":"Red Light Digital",
            "price": "450",
          "description": "Watch for Boys and Girl Spider Men Kids Light Glowing Watch with Music Tune and Face Cover Multicolor Led Digital Light Kid Watch (3-9 Year Red",
          "brand":"Digital Watch",
          "rating": "Be the first to Review this product",
          "image":"https://m.media-amazon.com/images/I/61GfZgleR0S._UX679_.jpg",
          "url": "https://www.flipkart.com/cemmko-watch-boys-girl-spider-men-kids-light-glowing-digital-girls/p/itm0d05595de8ba3?pid=WATGG54A9DEMGUWH&lid=LSTWATGG54A9DEMGUWH8FFIIC&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8NoUAzq4LgkBwvGHubMTc5cquYxZkKd2K9FE8nkXBKyCsLaRhw8SKhoCzDoQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Lionmati-Spider-Glowing-Multicolor-Digital/dp/B09J8XCYLQ/ref=sr_1_63?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-63",
          
         },
         {
            "id":"11",
            "title":"Fastrack Analog Black Dial ",
            "price": "3,400",
          "description": "Analog Black Dial Men's Watch-NL3147KM01/NN3147KM01/NP3147KM01",
          "brand":"Fastrack",
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71fN5Lk1sQL._UY679_.jpg",
          "url": "https://www.flipkart.com/fastrack-analog-watch-men/p/itm1f6008be066a1?pid=WATEJXFUJVFRB6TC&lid=LSTWATEJXFUJVFRB6TCNEASKU&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8FqZ5H2tYhLhLGXcl27cLart9D5acLP34qOJnjtBGhtfAUDZErS8OBoC_RMQAvD_BwE",
         
          "prices_url": "https://www.amazon.in/Fastrack-Analog-Black-Dial-Watch-NK3147KM01/dp/B01GDWNV86/ref=sr_1_64?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-64",
          
         },
         {
            "id":"12",
            "title":"Titan Analog Dial Men's Watch",
            "price": "1,596",
          "description": "Analog Dial Men's Watch",
          "brand":"Titan",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71ArUmx8udL._UY679_.jpg",
          "url": "https://www.flipkart.com/titan-analog-watch-men/p/itmf3zhmp69bbdvf?pid=WATDR3UPGHGUGRDG&lid=LSTWATDR3UPGHGUGRDG7PCAJO&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8GuExGoNstje8TF7lVZe5Q5dydsGq9BBjDSNYxj87mRRlqXChFXPfxoCFskQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Titan-Analog-Black-Watch-1864SL05/dp/B08KSZ633D/ref=sr_1_65?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-65",
          
         },
         {
            "id":"13",
            "title":"Noise Twist",
            "price": "1,999",
          
            "decsription": "Noise Newly Launched Twist Bluetooth Calling Smart Watch with 1.38\" TFT Biggest Display, Up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Gold Wine)",
          "brand":"Noise",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61d+0-5j6vL._SL1500_.jpg",
            "url": "https://www.flipkart.com/noise-icon-2-bt-calling-1-8-inch-display-ai-voice-assistant-60-sports-mode-smartwatch/p/itm3ba8e4a67d813?pid=SMWGEH7WGUSZCT4W&lid=LSTSMWGEH7WGUSZCT4WUW8BMK&marketplace=FLIPKART&store=ajy%2Fbuh&srno=b_1_6&otracker=browse&fm=organic&iid=cfa7e8d8-602c-4adc-b0eb-34e599197bc8.SMWGEH7WGUSZCT4W.SEARCH&ppt=browse&ppn=browse&ssid=8n6fex7kg00000001681672391760",
         
          "prices_url": "https://www.amazon.in/Noise-Launched-Bluetooth-Calling-Tracking/dp/B0BJ73NWMC/ref=sr_1_66?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-66",
          
         },
         {
            "id":"14",
            "title":"Sonata Superfibre",
            "price": "1,079",
          "description": "Superfibre Digital Grey Dial Men's Watch NM77034PP03 / NL77034PP03/NP77034PP03",
          "brand":"Sonata",
          "rating": "4.4 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/719Z-9RZMeL._UY679_.jpg",
          "url": "https://www.flipkart.com/sonata-digital-watch-men/p/itmf3zhms3emej9b?pid=WATE2JZEPQHEMXZD&lid=LSTWATE2JZEPQHEMXZDPUGKB0&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8DTXxZHPpej6Ijearhbbk9BRQ0EzAM2tMYxaGgKpw9GI-nhH05SuKxoC0ScQAvD_BwE"
         , "prices_url": "https://www.amazon.in/Sonata-Superfibre-Digital-Grey-Watch-NH77034PP03/dp/B00QPQWM1S/ref=sr_1_67?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-67",
          
         },
         {
            "id":"15",
            "title":"LONGBO",
            "price": "990",
          "description": "Master Royale Analog Watch for Men",
          "brand":"LONGBO",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81H1XbQeetL._UX679_.jpg",
          "url": "https://www.flipkart.com/longbo-80430-silver-gold-analog-watch-men/p/itmfbgpfhgszwvbt?pid=WATFBHPSQZJEX8GG&lid=LSTWATFBHPSQZJEX8GGU6RYZI&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8DfesrfJR7OFL15c2Gvk2wYYeQ_O_7lUPv9CJTJshdXg8t_EhuZwDxoCQy4QAvD_BwE",
        
          "prices_url": "https://www.amazon.in/Longbo-Master-Royale-Stainless-Luxury/dp/B07LCPDXQL/ref=sr_1_68?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-68",
         
         },
         {
            "id":"16",
            "title":"SENS NUTON 1",
            "price": "1,999",
          
            "desciption": "SENS NUTON 1 with 1.7 IPS Display, Orbiter, 5ATM & 150+ Watch Faces & Free Additional Strap (Royal Silver)",
          "brand":"SENS NUTON",
          "rating": "4.2 out of 5 stars",
            "image":"https://m.media-amazon.com/images/I/41wlnBi008L._SX300_SY300_QL70_FMwebp_.jpg",
            "url": "https://www.flipkart.com/sens-edyson-3-1-8-display-bt-calling-ai-voice-assistant-150-watch-faces-smartwatch/p/itm2cfb27d8b02e5?pid=SMWGKXDCBNHUQH6J&lid=LSTSMWGKXDCBNHUQH6JBT6FFU&marketplace=FLIPKART&cmpid=content_smartwatch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8PZUkr-j0sJY6-bYNHZW06yrLL1W2oIVQ68JQ4AWI7bf7d7Ob2asqBoCFZsQAvD_BwE",
         
          "prices_url": "https://www.amazon.in/SENS-Display-Orbiter-Additional-Silver/dp/B0BDHCPGN5/ref=sr_1_73?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-73",
          
         },
         {
            "id":"17",
            "title":"Timex Analog watch",
            "price": "2,866",
          
            "description": "Analog Black Dial Men's Watch-TW000U914",
            "brand":"Timex",
            "rating": "4.2 out of 5 stars",
            "image":"https://m.media-amazon.com/images/I/813zxeJIeoS._UY679_.jpg",
            "url": "https://www.flipkart.com/timex-analog-watch-men/p/itmf3zhe8qhndxxb?pid=WATEZCZM4ZH9XF5G&lid=LSTWATEZCZM4ZH9XF5GTSOYJW&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8A66jsBKO3aZhE9HQNK3o9SIXwnTXx8jxt_ZE-8SkWHLdb3MQ5W11BoCq3wQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Timex-Analog-Black-Dial-Watch-TW000U914/dp/B073P9FRS2/ref=sr_1_74?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-74",
          
         },
         {
            "id":"18",
            "title":"SF Sporty",
            "price": "500",
          "description": "Sporty Analog Black Dial Men's Watch-NL7930PP01/NP7930PP01",
          "brand":"SF Sporty",
          "rating": "4.0 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71mG-2RT7NL._UY679_.jpg",
          "url": "https://www.flipkart.com/sonata-analog-watch-men/p/itmf3zhm7hyubkmm?pid=WATDA5ZAAUPK2BEE&lid=LSTWATDA5ZAAUPK2BEERHR5QQ&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8LtlY0qNpUklT-nWTKgaGgVK9PM-SkZL4oJGX07adbUI_LFAKi8mnxoCMkAQAvD_BwE",
         
          "prices_url": "https://www.amazon.in/Sonata-Super-Fibre-Analog-Watch-NH7930PP01C/dp/B00ECWG1NC/ref=sr_1_75?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-75",
         
         },
         {
            "id":"19",
            "title":"SWADESHI STUFF",
            "price": "189",
          "description": "Analogue Boy's & Girl's Watch (Multicolored Dial & Strap)",
          "brand":"SWADESHI Stuff",
          "rating": "4 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71X-TsjWN+L._UX679_.jpg",
    
          "url": "https://www.flipkart.com/analogue-all-blue-boys-series-analog-watch/p/itmb6e22690a1daf?pid=WATFZ9HCPPKJX2DW&lid=LSTWATFZ9HCPPKJX2DWQBA0XP&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8C1MoSKh5vbtj50IUbeLQOxVJm56tiEi_M3aFxZk3sXqvi5k5mtmKRoCuYkQAvD_BwE",
         
          "prices_url": "https://www.amazon.in/Swadesi-Stuff-Analogue-Watch-Girls/dp/B085W1WNR5/ref=sr_1_76?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-76",
          
         },
         {
            "id":"20",
            "title":"TIMEX Classics",
            "price": "627",
          "description": "Classics Analog White Dial Men's Watch-A300",
          "brand":"TIMEX",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71rOBNFlPjL._UY679_.jpg",
          "url": "https://www.flipkart.com/timex-classic-analog-watch-men/p/itmf3zhnxxyzbmdz?pid=WATD9H77HEFR4SGD&lid=LSTWATD9H77HEFR4SGDK0MQ4U&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8AaYpucwkXTeBix1UPygEYUCWTs8NI0guAt9mTWK2MJJzeLPwyVxbhoC8sAQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Timex-Classics-Analog-White-Watch-A300/dp/B0073RULNE/ref=sr_1_77?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-77",
          
         },
        
         {
            "id":"21",
            "title":"boAt Flash ",
            "price": "1,599",
          "description": "boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes, 1.3\" Screen, 170+ Watch Faces, Sleep Monitor, Gesture, Camera & Music Control, IP68 & 7 Days Battery Life(Galaxy Blue)",
         "brand":"BOAT",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/712reiBu5PL._SX679_.jpg",
          "url": "https://www.flipkart.com/fire-boltt-hurricane-1-3-curved-glass-display-360-health-training-100-sports-modes-smartwatch/p/itm246c63f06b309?pid=SMWGD53JGHQMYZFF&lid=LSTSMWGD53JGHQMYZFFAT40XM&marketplace=FLIPKART&cmpid=content_smartwatch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8P9-6RF83glQyS9hiDmiR0_Sywun_0j6jK1ZLfP8kkYqLnC2LEorsxoCtBkQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/boAt-Flash-Smartwatch-Activity-Resistance/dp/B0949TYBW6/ref=sr_1_79?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-79",
          
         },
         {
            "id":"22",
            "title":"Sonata Analog Watch",
            "price": "540",
          "description": "Analog Women's Watch",
         "brand":"Sonata",
         "rating": "4.2 out of 5 stars",
         "image":"https://m.media-amazon.com/images/I/61s0wyNRs2L._UY679_.jpg",
          "url": "https://www.flipkart.com/sonata-analog-watch-women/p/itm54d1055ce1bf3?pid=WATDTKXEDVYUMHWB&lid=LSTWATDTKXEDVYUMHWBC86L9Q&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8F5AZ5ZPmUGYTpf5b_IrkIvxxq7MnMBuw8E7HwwWrUIZZ4rDlb27DBoCIOEQAvD_BwE",
       
          "prices_url": "https://www.amazon.in/Sonata-Analog-Silver-Womens-Watch-8170SM02/dp/B08J4FZQZ7/ref=sr_1_80?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-80",
        
         },
         {
            "id":"23",
            "title":"Sonata Super Fibre",
            "price": "559",
          "description": "Super Fibre Digital Grey Dial Men's Watch-NL87011PP04/NP87011PP04",
          "brand":"Sonata",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71tdAM-NCqL._UY679_.jpg",
          "url": "https://www.flipkart.com/sonata-digital-watch-men/p/itmf3zhmg6zvem3e?pid=WATE6NVS6GCYGZYW&lid=LSTWATE6NVS6GCYGZYWCCNTZ0&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8LQdn-egCJJcr6Gp65yZa1-yIgf-g_zGyXCP-u5_xC12g5aX4FIlDxoCf2gQAvD_BwE",
         
          "prices_url": "https://www.amazon.in/Sonata-Super-Fibre-Digital-NH87011PP04/dp/B00V6BICBQ/ref=sr_1_81?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-81",
         
         },
         {
            "id":"24",
            "title":"Selloria",
            "price": "146",
          
            "description": "Digital Watch Shockproof Multi-Functional Automatic Black Color Strap Waterproof Digital Sports Watch for Mens Kids Watch for Boys Watch for Men Pack of 1 Watch Water Resistance Digital Watch",
          "brand":"selloria",
          "rating": "2.6 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61YTgYOiedL._UY679_.jpg",
            "url": "https://www.flipkart.com/glasstrent-screen-guard-waterproof-digital-sports-watch-men-s-kids/p/itmf77246d361e02?pid=ACCGBSHZZUAGAUQF&lid=LSTACCGBSHZZUAGAUQFQA9GPA&marketplace=FLIPKART&cmpid=content_screen-guard_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8ODyLzE95eDsLfECtplCzw31HDhEPb7M000htilxuKKVFLtkirWrAhoCvakQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/SELLORIA-Shockproof-Multi-Functional-Waterproof-Resistance/dp/B09CHJ5RWK/ref=sr_1_82?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-82",
         
         },
         {
            "id":"25",
            "title":"Fastrack Unisex's  Watch",
            "price": "636",
          "name": "Analog White Dial Unisex's Watch-NG38021PP10W / NG38021PP10W",
          "brand":'Fastrack',
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/91VEPukVjxL._UY679_.jpg",
          "url": "https://www.flipkart.com/fastrack-tees-analog-watch-men-women/p/itmf67a73fd474ce?pid=WATEH6Y4F9MYUNSW&lid=LSTWATEH6Y4F9MYUNSWPMRS6D&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8D2bwv8jJHDhNUvCL4Q_rufbXe1aoYQX7y4x5MM8irlOGFjz4YwDAxoCSOQQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Fastrack-Analog-White-Unisexs-Watch-NG38021PP10C/dp/B01KQGQMOK/ref=sr_1_83?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-83",
          
         },
         {
            "id":"26",
            "title":"Timex Silver Dial",
            "price": "3,590",
          "description": "Analog Silver Dial Men's Watch-TWEG18506",
         "brand":"Timex",
         "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61bzCB3GfEL._UY679_.jpg",
          "url": "https://www.flipkart.com/timex-analog-watch-men/p/itmf3zh3jxrksajk?pid=WATEVCSYZMKNCSDB&lid=LSTWATEVCSYZMKNCSDBHBVERA&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8H1Dvqx9u9VCI33i9m9DW75F2x3zHius1PfXb9mo-S05dRmJNL_jPRoCMh8QAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Timex-Analog-Silver-Dial-Watch-TWEG18506/dp/B08X3NPNPB/ref=sr_1_84?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-84",
          
         },
         {
            "id":"27",
            "title":"Titan Round Dial Watch ",
            "price": "3,836",
          "description": "Men's Round Dial Watch",
          "brand":"Titan",
          "rating": "4.4 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71M5ZEA9fhL._UY679_.jpg",
          "url": "https://www.flipkart.com/titan-np1806km01-analog-watch-men/p/itm686ccf8fb4816?pid=WATFFAGR2MSF2KHP&lid=LSTWATFFAGR2MSF2KHPOEIEOH&marketplace=FLIPKART&store=r18&srno=b_1_10&otracker=browse&fm=organic&iid=e544353e-6669-44b6-8038-6bc05f242e4e.WATFFAGR2MSF2KHP.SEARCH&ppt=browse&ppn=browse&ssid=gs68c2al680000001681673231517",
         
          "prices_url": "https://www.amazon.in/Titan-Analog-Blue-Dial-Watch-NK1733KL01/dp/B01M1CI9GW/ref=sr_1_90?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-90",
          
         },
         {
            "id":"28",
            "title":"DIZO Watch D2 Power",
            "price": "2,199",
          
            "description": "DIZO Watch D2 Power (by realme TechLife) –Large 1.91\" Superlight, Single Chipset Bluetooth Calling Smartwatch with Smart Swipe,150 +Stylish Watch Faces and 10 Day Battery (Classic Black)",
          "brand":"DIZO",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61kagiCgCGL._SL1500_.jpg",
            "url": "https://www.flipkart.com/dizo-watch-d2-1-91-inch-super-big-display-bt-calling-by-realme-techlife/p/itm02b69df253a7b?pid=SMWGM2KJCKQZ9236&lid=LSTSMWGM2KJCKQZ9236UKK1HL&marketplace=FLIPKART&cmpid=content_smartwatch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8EQRgqTQi0VoKCECkSgo6ZlTrQFNnnC_xJHiZOBFF4jsS7Nt9iZmKBoC194QAvD_BwE",
          
          "prices_url": "https://www.amazon.in/DIZO-TechLife-Superlight-Bluetooth-Smartwatch/dp/B0BV749X34/ref=sr_1_91?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-91",
         
         },
         {
            "id":"29",
            "title":"LORENZ",
            "price": "299",
          "description": "Analog Watch for Men | Watch for Boys",
          "brand":"LORENZ",
          "rating": "3.5 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81epQjxbzjL._UL1500_.jpg",
          "url": "https://www.flipkart.com/tiyona-analog-fast-selling-watch-boys-men/p/itm1e31f12232594?pid=WATGKB4HQZWYSWZE&lid=LSTWATGKB4HQZWYSWZEHZSHDR&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8KMWsS-YhcNt1MEQ2KNS10FDz5RDgI_q1gis9f6rAX1Vh9kZ4xyxQBoCXBkQAvD_BwE",
         
          "prices_url": "https://www.amazon.in/Lorenz-Black-Analog-Watch-MK-3080K/dp/B08VS3R8VZ/ref=sr_1_92?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-92",
          
         },
         {
            "id":"30",
            "title":"Boat Xtend",
            "price": "2,999",
          "description": "boAt Xtend Smart Watch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, HR & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery Life(Deep Blue)",
          "brand":"BOAT",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61RPXUwgCjL._SL1500_.jpg",
          "url": "https://www.flipkart.com/boat-wave-connect-bluetooth-calling-voice-assistant-1-69-hd-display-smartwatch/p/itm8e103a4ca1bc0?pid=SMWGEPT2RCPFSCK2&lid=LSTSMWGEPT2RCPFSCK2UYUMIZ&marketplace=FLIPKART&store=ajy%2Fbuh&srno=b_1_11&otracker=browse&fm=organic&iid=2fc8fd09-3cb2-40bb-bc61-9a2ab73b2d90.SMWGEPT2RCPFSCK2.SEARCH&ppt=None&ppn=None&ssid=2rmfxms5b40000001681673380708",
          
          "prices_url": "https://www.amazon.in/boAt-Smartwatch-Multiple-Monitoring-Resistance/dp/B096VDJ5QX/ref=sr_1_93?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-93",
          
         },
         {
            "id":"31",
            "title":"Titan Karishma",
            "price": "2,172",
          "description": "Karishma Analog Blue Dial Men's Watch-NL1774SM01/NP1774SM01",
          "brand":"Titan",
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/713k0jXW9QL._UL1500_.jpg",
          "url": "https://www.flipkart.com/titan-np1774sm01-analog-watch-men/p/itm53a0599a6690e?pid=WATF5G3FFY6RTPNY&lid=LSTWATF5G3FFY6RTPNYYVNXKG&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8K280WKN1mCGW7HiJ8ApL3b7G3WheoJp4hNHF1qmvt-jJPXKoIpqmRoCJR0QAvD_BwE",
        
          "prices_url": "https://www.amazon.in/Titan-Karishma-Analog-Blue-Watch-1774SM01/dp/B07CNVJ241/ref=sr_1_94?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-94",
          
         },
         {
            "id":"32",
            "title":"Titan Smart watch",
            "price": "7,646",
          "description": "Smart Smartwatch with Stress & Sleep Monitor, SpO2,Women Health Monitor,5 ATM Water Resistance & Upto 14 Days Battery Life",
          "brand":"Titan",
          
          "rating": "3.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61xA+n7prNL._UL1500_.jpg",
          "url": "https://www.flipkart.com/titan-smart-premium-metal-body-5atm-ultra-long-14-days-battery-vo2-max-smartwatch/p/itmf587a0edd6e8d?pid=SMWGKJUYDWJGRXZH&lid=LSTSMWGKJUYDWJGRXZHLIHEBZ&marketplace=FLIPKART&cmpid=content_smartwatch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8C2tyhf_10G0hgYa9sksTUyHywRqhjDOr6YNYl5m7JxgnnHWhGOPRRoC_FEQAvD_BwE",
         
          "prices_url": "https://www.amazon.in/Titan-Smartwatch-Aluminum-Immersive-Multi-sport/dp/B09NDM3ZGW/ref=sr_1_95?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-95",
          
         },
         {
            "id":"33",
          "title":"Fastrack Tees",
          "price": "760",
          "description": "Tees Analog Dial Unisex-Adult Watch",
          "brand":"Fastrack",
          "rating": "4.4 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71yIH7xPTML._UL1500_.jpg",
          "url": "https://www.flipkart.com/fastrack-9915pp102-analog-watch-men-women/p/itm76aa4131c8e71?pid=WATFJJZWGQFKAKSM&lid=LSTWATFJJZWGQFKAKSMZUZOAN&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8HdR_ZpBR89A5V1leGonyXAlEaVbL6hDdWRQbTwFEoB_8OvGs3IkTBoCQBkQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Fastrack-Tees-Analog-Unisex-Adult-Watch-68012PP03/dp/B09B295D2M/ref=sr_1_96?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-96",
          
         },
         {
            "id":"34",
            "title":"ADAMO",
            "price": "233",
          "description": "Digital 24 Images Projector Watch for Kids Boys Watch, Diwali Gift, Birthday Return Gift, Best Digital Toy Watch for Boy's & Girl's BG-906",
          "brand":"ADAMO",
          "rating": "4 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/51hmgsNCE8L.jpg",
          "url": "https://www.amazon.in/ADAMO-Digital-Projector-Birthday-906GGR02/dp/B0BBBKNDN5/ref=sr_1_97?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-97https://www.flipkart.com/tern-24-images-projector-watch-kids-wrist-best-gift-boys-digital-girls/p/itm652d2ed8baed8?pid=WATG6PYVD3W8RGXS&lid=LSTWATG6PYVD3W8RGXSMG0MNP&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8AAw-EKvN6ZpSjiOu5KHI1WLXLYCmWhhGnMZ0YiOJR2Lm3eyekzfrhoCvEMQAvD_BwE",
       
    
          "prices_url": "https://www.amazon.in/ADAMO-Digital-Projector-Birthday-906GGR02/dp/B0BBBKNDN5/ref=sr_1_97?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-97",
          
         },
         {
            "id":"35",
            "title":"Barbie Watch",
            "price": "195",
          "description": "White Dial Barbie Love Watch Series Analogue Girl's Watch",
         
          "brand":"SWADESHI STUFF",
          "rating": "3.4 out of 5 stars"
          ,"image":"https://m.media-amazon.com/images/I/71iPnemk9nL._UL1500_.jpg",
          "url": "https://www.flipkart.com/manuu-barbie-watch-analog-girls/p/itm506553a27597e?pid=WATGJSCGDNTHYXWQ&lid=LSTWATGJSCGDNTHYXWQEGL5PZ&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8P1DqI5Ipm5GyZkzIpQfQ70cwT7wxTCEEif2SIs-l-XK-U8cW9Ug3xoCkrYQAvD_BwE",
    
          "prices_url": "https://www.amazon.in/SWADESI-STUFF-Barbie-Analogue-Round/dp/B07P3YJXR5/ref=sr_1_100?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-100",
         
         },
         {
            "id":"36",
            "title":"Fossil Tillie",
            "price": "6,996",
            "description": "Tillie Analog White Dial Women's Watch-BQ3497",
            "brand":"Fossil",
            "rating": "Be the first to Review this product",
            "image":"https://m.media-amazon.com/images/I/513CVNV86fL._UX679_.jpg",
             "url": "https://www.flipkart.com/fossil-tillie-analog-watch-women/p/itmd034c91e13f3b",
            "prices_url": "https://www.amazon.in/Fossil-Tillie-Analog-Womens-Watch-BQ3497/dp/B08YJNVS5M/ref=sr_1_101?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-101",
          
         },
         {
            "id":"37",
        "title":"Sonata Analog  Watch",
          "price": "832",
          "description": "Analog White Dial Men's Watch-7135SL03/NP7135SL03",
          "brand":"Sonata",
          "rating": "3.9 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71Ym6KSEN+L._UY679_.jpg",
          "url": "https://www.flipkart.com/sonata-analog-watch-men/p/itmb1070280f3eb7?pid=WATGG96GBVWUE3MY&lid=LSTWATGG96GBVWUE3MYVDCGIR&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8Aogu5wX9hiXxH2pgQmNOtrQ8XHDUHpOhu3ClaMDPfNTOIlDnaLG5RoCHpgQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Sonata-Analog-White-Dial-Watch-7135SL03/dp/B08R3VJHLN/ref=sr_1_102?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-102",
          
         },
         {
            "id":"38",
            "title":"Fire-Boltt Dagger",
            "price": "3,799",
          "description": "Fire-Boltt Dagger 1.43\" AMOLED Display Smartwatch, 96% Screen to Body Ratio with Single BT Bluetooth Calling, IP68, Dual Button Technology, Rugged Build, AI Voice Assistant, Multiple Sports (Black)",
        "brand":"Fire-Boltt",
        "rating": "4.3 out of 5 stars",
        "image":"https://m.media-amazon.com/images/I/61Fj5wTOQiL._SL1500_.jpg",
          "url": "https://www.flipkart.com/fire-boltt-legacy-1-43-amoled-bluetooth-calling-first-ever-wireless-charging-smartwatch/p/itm2b2e0c20c00d7?pid=SMWGHSJ2ZU5SFMZG&lid=LSTSMWGHSJ2ZU5SFMZGUT4O1F&marketplace=FLIPKART&cmpid=content_smartwatch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8EZIhEVZHxhgYysY3FdTuLby0Pcp4S8bOPYbZgZRGIIF3VVaF_9LMxoCaykQAvD_BwE",
         
          "prices_url": "https://www.amazon.in/Fire-Boltt-Smartwatch-Bluetooth-Technology-Assistant/dp/B0BRPZPKJG/ref=sr_1_103?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-103",
          
         },
         {
            "id":"39",
            "title":"Men's Watch-TW000U933",
            "price": "2,149",
          "description": "Analog White Dial Men's Watch-TW000U933",
          "brand":"TIMEX",
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71gnZhQv95L._UY679_.jpg",
          "url": "https://www.flipkart.com/timex-analog-watch-men/p/itm051ed0d5ce9c6?pid=WATGYC9QQYVFTCEY&lid=LSTWATGYC9QQYVFTCEYAQZD21&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8FF9qfwQ5x-3JugrsARJMpQFTHZ9686d4R34nSEFeuNout8EVJD0WBoCJGAQAvD_BwE",
          
          "prices_url": "https://www.amazon.in/Timex-Analog-White-Dial-Watch-TW000U933/dp/B07BH58KVM/ref=sr_1_104?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-104",
          "rating": "4.1 out of 5 stars"
         }
         ,
         {
            "id":"40",
            "title":"IMPERIOUS-The Royal",
            "price": "799",
              "description": "Analogue Women's Watch (Black Dial)",
              "brand":"IMPERIOUS",
              "rating": "3.9 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/51LTJjshaIL._UX679_.jpg",
    
              "url": "https://www.flipkart.com/imperious-103-analog-watch-women/p/itmf873kft6tqfjt?pid=WATF87FNGUMZY6WZ&lid=LSTWATF87FNGUMZY6WZYNVZOA&marketplace=FLIPKART&cmpid=content_watch_15083003945_u_8965229628_gmc_pla&tgi=sem,1,G,11214002,u,,,556262839325,,,,c,,,,,,,&gclid=CjwKCAjwue6hBhBVEiwA9YTx8EovSRSmSQPhYAIXhXub93xejzKKbfKUn7G9OCykC05tppZ-CAY6PxoCo-AQAvD_BwE",
             
              "prices_url": "https://www.amazon.in/Imperious-Analog-Black-Womens-Watch/dp/B07G9GJRF6/ref=sr_1_53?crid=2LCTA6OZWZZI6&keywords=watches&qid=1681533085&sprefix=watche%2Caps%2C371&sr=8-53",
              
             },
        ];
})
// app.controller("myControl",function($scope,$window,$document)
// {  


       
    
       
// });