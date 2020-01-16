import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const test_hits = [
    {
      "uid": "59d51b0e-e5f8-4138-84ff-cf26dc516fce",
      "type": "catalog",
      "title": "Mr. Meeseeks (Chase)",
      "referenceUrl": "mr-meeseeks-5",
      "releaseDate": "2017-02-19T00:00:00-08:00",
      "keywords": [
        "Vinyl Figure",
        "Pop",
        "Pop Vinyl",
        "12441-PX-1QW",
        "2017",
        "2017 Pop",
        "2017 Pop Vinyl",
        "Mr Meeseeks Pop",
        "Mr Meeseeks Pop Vinyl",
        "Rick and Morty Vinyl Figure",
        "Animation Pop",
        "Pop Animation",
        "Mr Meeseeks",
        "Rick and Morty",
        "Cartoon Network Enterprises",
        "Animation",
        "Chase",
        "Mr Meeseeks Pop",
        "Mr Meeseeks Pop Vinyl",
        "Rick and Morty Vinyl Figure",
        "Animation Pop",
        "Pop Animation",
        "Mr Meeseeks",
        "Rick and Morty",
        "Cartoon Network Enterprises",
        "Animation"
      ],
      "score": 9.735525,
      "imageUrl": "/craftmin/products/1436_3266_12441_2_RickMorty_Meeseeks_CHASE_GLAM_HiRes.jpg",
      "additionalImages": [
        "/craftmin/products/1436_3266_12441_2_RickMorty_Meeseeks_CHASE_GLAM_HiRes.jpg"
      ],
      "productCategories": ["Animation"],
      "productBrands": ["Pop!"],
      "productLines": ["Pop! Vinyl"],
      "licenses": ["Rick and Morty"],
      "formFactors": ["Vinyl Figure"],
      "tags": ["Current TV", "Chase"],
      "productSections": ["Toys"],
      "licensors": ["Cartoon Network Enterprises"],
      "exclusivity": [],
      "features": ["Chase"],
      "characters": ["Mr. Meeseeks"],
      "status": "Temporarily Unavailable",
      "upc": ["889698124416"],
      "boxNumber": "174",
      "itemNumber": "12441-PX-1QW",
      "componentNumber": "12441-PX-1QWb",
      "hobbyDbId": "323702",
      "craftProductId": 184526,
      "craftComponentId": 184527,
      "isMultipack": false,
      "caseQuantity": 6,
      "availability": [
        {
          "slug": "amazon",
          "title": "Amazon",
          "logo": "/craftmin/logos/amazon.png",
          "item": {
            "url": "https://www.amazon.com/Funko-Pop-Animation-Meeseeks-Figure/dp/tech-data/B01MY7PEIP?SubscriptionId=AKIAI7SZXUTQ2I5CS25A&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01MY7PEIP",
            "isInStock": true,
            "price": 7.22
          }
        },
        {
          "slug": "entertainmentearth",
          "title": "Entertainment Earth",
          "logo": "/craftmin/logos/entertainment-earth-icon.png",
          "item": {
            "url": "https://www.entertainmentearth.com/product/rick-and-morty-mr-meeseeks-pop-vinyl-figure/fu12441",
            "isInStock": true,
            "price": 10.99
          }
        },
        {
          "slug": "hobbydb",
          "title": "HobbyDB",
          "logo": "/craftmin/logos/hdb_logo.png",
          "item": {
            "url": "https://www.hobbydb.com/marketplaces/hdb/collectibles/for_sale_search?catalog_item_id=323702&utm_source=Funkoapp&utm_medium=Referral",
            "isInStock": true
          }
        }
      ],
      "relatedProducts": [
        {
          "uid": "7d23a6e0-167e-4172-a947-0ec8c154fc47",
          "title": "Mr. Meeseeks",
          "referenceUrl": "mr-meeseeks-4"
        },
        {
          "uid": "9a84b949-9b1f-4ddf-8c0b-afe925899408",
          "title": "Rick Sanchez (Western)",
          "referenceUrl": "rick-sanchez-western-1"
        },
        {
          "uid": "b276f3d8-8cfc-4f1e-bcac-7eabd5d3fe00",
          "title": "Jerry",
          "referenceUrl": "jerry-3"
        },
        {
          "uid": "f3b1c0e4-f9f6-46c7-b279-d0eef173c277",
          "title": "Tiny Rick",
          "referenceUrl": "rick-sanchez-w-guitar"
        },
        {
          "uid": "70cb4b72-d61f-404f-b44f-e41441db90dc",
          "title": "King of S#!+",
          "referenceUrl": "king-of-s"
        },
        {
          "uid": "3a0160b1-5d56-47b5-835f-78425f29f0cc",
          "title": "Supernova",
          "referenceUrl": "supernova"
        },
        {
          "uid": "a16a1be3-c9e5-4a7e-8072-3e976f73b910",
          "title": "Summer",
          "referenceUrl": "summer-1"
        },
        {
          "uid": "d80b0aa7-efed-497f-a400-ebee907f55d1",
          "title": "Space Suit Rick with Snake",
          "referenceUrl": "space-suit-rick-with-snake"
        },
        {
          "uid": "77f0d0d7-dd9b-4f3a-8455-0bdaca7c094a",
          "title": "Mr. Poopy Butthole Auctioneer",
          "referenceUrl": "mr-poopy-butthole-auctioneer"
        },
        {
          "uid": "e31797a7-8a0a-4324-9953-9356f1a0450b",
          "title": "Apocalypse Summer",
          "referenceUrl": "apocalypse-summer"
        }
      ],
      "collectionData": {
        "inCollections": 7457,
        "inWishlists": 5322
      },
      "marketValue": 23.0,
      "isChase": true,
      "historicPricing": {
        "week": {
          "numberOfSales": 1,
          "averagePrice": 19.5,
          "lowPrice": 16.0,
          "mediumPrice": 19.5,
          "highPrice": 16.0
        },
        "thirtyDays": {
          "numberOfSales": 12,
          "averagePrice": 23.826153846153847,
          "lowPrice": 15.0,
          "mediumPrice": 25.0,
          "highPrice": 30.1
        },
        "sixtyDays": {
          "numberOfSales": 31,
          "averagePrice": 18.83105263157895,
          "lowPrice": 8.4,
          "mediumPrice": 20.0,
          "highPrice": 28.99
        },
        "ninetyDays": {
          "numberOfSales": 20,
          "averagePrice": 28.207152658662093,
          "lowPrice": 7.99,
          "mediumPrice": 26.99,
          "highPrice": 38.99
        }
      },
      "isB2B": false
    },
    {
      "uid": "7d23a6e0-167e-4172-a947-0ec8c154fc47",
      "type": "catalog",
      "title": "Mr. Meeseeks",
      "referenceUrl": "mr-meeseeks-4",
      "releaseDate": "2017-02-19T00:00:00-08:00",
      "keywords": [
        "Vinyl Figure",
        "Pop",
        "Pop Vinyl",
        "12441-PX-1QW",
        "2017",
        "2017 Pop",
        "2017 Pop Vinyl",
        "Mr Meeseeks Pop",
        "Mr Meeseeks Pop Vinyl",
        "Rick and Morty Vinyl Figure",
        "Animation Pop",
        "Pop Animation",
        "Mr Meeseeks",
        "Rick and Morty",
        "Cartoon Network Enterprises",
        "Animation"
      ],
      "score": 9.718773,
      "imageUrl": "/craftmin/products/1436_3266_12441_RickMorty_Meeseeks_GLAM_HiRes.jpg",
      "additionalImages": [
        "/craftmin/products/1436_3266_12441_RickMorty_Meeseeks_GLAM_HiRes.jpg"
      ],
      "productCategories": ["Animation"],
      "productBrands": ["Pop!"],
      "productLines": ["Pop! Vinyl"],
      "licenses": ["Rick and Morty"],
      "formFactors": ["Vinyl Figure"],
      "tags": ["Current TV"],
      "productSections": ["Toys"],
      "licensors": ["Cartoon Network Enterprises"],
      "exclusivity": [],
      "features": [],
      "characters": ["Mr. Meeseeks"],
      "status": "Temporarily Unavailable",
      "upc": ["889698124416"],
      "boxNumber": "174",
      "itemNumber": "12441-PX-1QW",
      "componentNumber": "12441-PX-1QWa",
      "hobbyDbId": "323701",
      "craftProductId": 184526,
      "craftComponentId": 184525,
      "isMultipack": false,
      "caseQuantity": 6,
      "availability": [
        {
          "slug": "amazon",
          "title": "Amazon",
          "logo": "/craftmin/logos/amazon.png",
          "item": {
            "url": "https://www.amazon.com/Funko-Pop-Animation-Meeseeks-Figure/dp/tech-data/B01MY7PEIP?SubscriptionId=AKIAI7SZXUTQ2I5CS25A&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01MY7PEIP",
            "isInStock": true,
            "price": 7.22
          }
        },
        {
          "slug": "entertainmentearth",
          "title": "Entertainment Earth",
          "logo": "/craftmin/logos/entertainment-earth-icon.png",
          "item": {
            "url": "https://www.entertainmentearth.com/product/rick-and-morty-mr-meeseeks-pop-vinyl-figure/fu12441",
            "isInStock": true,
            "price": 10.99
          }
        },
        {
          "slug": "hobbydb",
          "title": "HobbyDB",
          "logo": "/craftmin/logos/hdb_logo.png",
          "item": {
            "url": "https://www.hobbydb.com/marketplaces/hdb/collectibles/for_sale_search?catalog_item_id=323701&utm_source=Funkoapp&utm_medium=Referral",
            "isInStock": true
          }
        }
      ],
      "relatedProducts": [
        {
          "uid": "59d51b0e-e5f8-4138-84ff-cf26dc516fce",
          "title": "Mr. Meeseeks (Chase)",
          "referenceUrl": "mr-meeseeks-5"
        },
        {
          "uid": "eaabde54-e8a9-4f51-8464-3ac1d915320c",
          "title": "Pickle Rick (Rat Suit)",
          "referenceUrl": "pickle-rick-rat-suit-2"
        },
        {
          "uid": "c3350d9e-14e5-408d-a970-c2ca8c4bbac3",
          "title": "Beth",
          "referenceUrl": "beth"
        },
        {
          "uid": "c55ef6a7-3225-4264-ad2e-063b8d393a05",
          "title": "Tinkles",
          "referenceUrl": "tinkles-6"
        },
        {
          "uid": "cb322e28-b5ca-4ee1-8c3a-0974d84308ad",
          "title": "Rick Sanchez (w/ Portal Gun)",
          "referenceUrl": "rick-sanchez-w-portal-gun"
        },
        {
          "uid": "1fc7ed4a-95fc-4831-9441-cc3dbfe75068",
          "title": "Ghost in a Jar",
          "referenceUrl": "ghost-in-a-jar"
        },
        {
          "uid": "c4327a52-3b5b-4c80-a8bb-0bf8176603e7",
          "title": "Mortimer \"Morty\" Smith",
          "referenceUrl": "mortimer-morty-smith"
        },
        {
          "uid": "db66c2a5-a0bc-40a7-acf5-f9f92544f62b",
          "title": "Rick Sanchez (Doofus)",
          "referenceUrl": "rick-sanchez-doofus"
        },
        {
          "uid": "70cb4b72-d61f-404f-b44f-e41441db90dc",
          "title": "King of S#!+",
          "referenceUrl": "king-of-s"
        },
        {
          "uid": "fa5a0be5-7927-44fa-8193-b025eaa6e52c",
          "title": "Jaguar",
          "referenceUrl": "jaguar"
        }
      ],
      "collectionData": {
        "inCollections": 11492,
        "inWishlists": 5173
      },
      "marketValue": 8.0,
      "isChase": false,
      "historicPricing": {
        "week": {
          "numberOfSales": 1,
          "averagePrice": 5.845,
          "lowPrice": 7.0,
          "mediumPrice": 5.945,
          "highPrice": 7.0
        },
        "thirtyDays": {
          "numberOfSales": 7,
          "averagePrice": 8.240833333333333,
          "lowPrice": 3.54,
          "mediumPrice": 8.995,
          "highPrice": 14.0
        },
        "sixtyDays": {
          "numberOfSales": 8,
          "averagePrice": 7.091666666666667,
          "lowPrice": 3.99,
          "mediumPrice": 5.99,
          "highPrice": 12.95
        },
        "ninetyDays": {
          "numberOfSales": 9,
          "averagePrice": 8.806595744680852,
          "lowPrice": 3.25,
          "mediumPrice": 8.0,
          "highPrice": 10.19
        }
      },
      "isB2B": false
    }
  ]

export default class TestPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <Button
                title="Test products"
                onPress={() => this.props.navigation.navigate('ModalExample', {
                    product_array: test_hits
                  })}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
