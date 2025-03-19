import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://img.freepik.com/premium-vector/premium-logo-template-2025_1271687-73.jpg?w=1380"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li className="nav-item">Home</li>
        <li className="nav-item">About us</li>
        <li className="nav-item">Contect us</li>
        <li className="nav-item">Cart</li>
      </ul>
    </div>
  </div>
);

//style Object
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const cardDataArr = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "84447",
          name: "Amar Punjabi Dhaba",
          cloudinaryImageId: "c4jzu1q7uwyk9ztusywm",
          locality: "Station Road",
          areaName: "Station Road",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Thalis", "Chinese"],
          avgRating: 4.5,
          veg: true,
          parentId: "30969",
          avgRatingString: "4.5",
          totalRatingsString: "51K+",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-19 23:15:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
              {
                imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {
            header: "10% OFF",
            shortDescriptionList: [
              {
                meta: "Use TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
            descriptionList: [
              {
                meta: "10% off up to ₹40 | Use code TRYNEW",
                discountType: "Percentage",
                operationType: "RESTAURANT",
              },
            ],
          },
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=84447&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "387552",
          name: "Lal Marwadi Dhaba",
          cloudinaryImageId: "rdmapvgu7tonqn3bkbnp",
          locality: "Hariom Hari Nagar \n",
          areaName: "Talwandi",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian", "Biryani"],
          avgRating: 4.3,
          veg: true,
          parentId: "249322",
          avgRatingString: "4.3",
          totalRatingsString: "1.2K+",
          promoted: true,
          adTrackingId:
            "cid=26572865~p=1~adgrpid=26572865#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=387552~eid=9d5cdd19-140a-43d6-aa43-74211f4db558~srvts=1742375622559~collid=83633",
          sla: {
            deliveryTime: 40,
            lastMileTravel: 10,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "10.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-19 23:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "26572865",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=387552&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "88127",
          name: "Hotel Virangna - The Virasat",
          cloudinaryImageId: "w1nthqllzujhpkc14ay2",
          locality: "Mala Road",
          areaName: "Nellore",
          costForTwo: "₹249 for two",
          cuisines: ["North Indian", "Thalis", "Chinese", "Tandoor", "Biryani"],
          avgRating: 4.3,
          veg: true,
          parentId: "103350",
          avgRatingString: "4.3",
          totalRatingsString: "15K+",
          sla: {
            deliveryTime: 22,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-19 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=88127&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "134839",
          name: "Kebabs & Curries Company",
          cloudinaryImageId: "jukw7ribptvi7ibrsyk9",
          locality: "Rajeev Gandhi Nagar",
          areaName: "Indraprastha Industrial Area",
          costForTwo: "₹400 for two",
          cuisines: [
            "North Indian",
            "Thalis",
            "Chinese",
            "Mughlai",
            "Chaat",
            "Punjabi",
            "Desserts",
            "Snacks",
            "Rajasthani",
            "Tandoor",
          ],
          avgRating: 4.4,
          parentId: "6302",
          avgRatingString: "4.4",
          totalRatingsString: "8.0K+",
          promoted: true,
          adTrackingId:
            "cid=26635746~p=2~adgrpid=26635746#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=134839~eid=f44878df-3027-4647-8df6-d7517e676970~srvts=1742375622559~collid=83633",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 8.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "8.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-20 04:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "26635746",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=134839&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "78934",
          name: "Soul- by Hotel Lilac",
          cloudinaryImageId: "zh9y27dmhbkruzg41mhy",
          locality: "Station Road",
          areaName: "Rajasthan 324002",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Chinese", "Continental"],
          avgRating: 4.3,
          veg: true,
          parentId: "453847",
          avgRatingString: "4.3",
          totalRatingsString: "6.0K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-19 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=78934&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "468903",
          name: "Amar Punjabi Express",
          cloudinaryImageId: "fgc6e6rqnvzmw2rntjz6",
          locality: "Landmark City Road",
          areaName: "Kunadi",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Thalis", "Chinese", "Pizzas"],
          avgRating: 4.4,
          veg: true,
          parentId: "281706",
          avgRatingString: "4.4",
          totalRatingsString: "13K+",
          promoted: true,
          adTrackingId:
            "cid=26081454~p=3~adgrpid=26081454#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=468903~eid=a2d5cc4f-6dd7-435c-9d99-d5fa34c203fa~srvts=1742375622559~collid=83633",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 6.1,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "6.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-03-19 23:35:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "26081454",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=468903&source=collection&query=North%20Indian",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const RestaurentCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, locality } =
    props.resData?.card?.card?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="res-name">{name}</h3>
      <p className="res-cuisine">{cuisines.join(", ")} </p>
      <p className="res-rating">{avgRating} star </p>
      <p className="res-area">{locality}</p>
      <p className="res-sla">{sla.slaString}</p>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Seacrh</div>
    <div className="res-container">
      {cardDataArr.map((restaurant,index) => (
        <RestaurentCard
          resData={restaurant}
          key={restaurant.card.card.info.id}
        />
      ))}

      {/* <RestaurentCard
        resName="Anand Shekhawati Dhaba"
        cuisine="North Indian, South Indian, Chinese"
        rating="4.2"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/ab3a05ff-bc93-4cc6-9f88-69200fa1589d_238134.jpg"
      />
      <RestaurentCard
        resName="Burger King"
        cuisine="Pizza, Burger, Chinese"
        rating="4.1"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/43435247-2a12-4c68-b1f1-d4b71b0aab49_101665.jpg"
      />
      <RestaurentCard
        resName="Lal Marwadi Food"
        cuisine="North Indian, South Indian"
        rating="4.8"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nonojkhwe8temsrpciwf"
      />
      <RestaurentCard
        resName="Mr Beans"
        cuisine="Pizza, Chinese"
        rating="3.9"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9ec9ffd900c24ef751e2f34ba3d2fd4b"
      />
      <RestaurentCard
        resName="Rajeshwari Rasoi"
        cuisine="North Indian, South Indian"
        rating="3.2"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ilgleywjpg5jfnqwcq06"
      />
      <RestaurentCard
        resName="Pizza hut"
        cuisine="Pizza, Burger"
        rating="4.0"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/080fcb8b-a903-4002-8e04-f1aea7f87b2b_671511.jpg"
      />
      <RestaurentCard
        resName="Amar Panjanbi Dhaba"
        cuisine="North Indian, South Indian"
        rating="4.1"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/10/0add77db-9eb3-4452-b4b7-00b8a15c9b51_971203.ss.jpg"
      /> */}
    </div>
  </div>
);
const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
