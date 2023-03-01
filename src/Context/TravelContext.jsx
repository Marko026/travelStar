import { createContext } from "react"
import { useState } from "react";
const TravelContext = createContext();

export const TravelProvider = ({ children }) => {




    const [traveloffers, setTravelOffers] = useState([
        {

            destination: "Dominikana",
            title: "Escape to the Caribbean: Discover the Beauty of Dominikana",
            rating: 5,
            desc: "Dominikana is a vibrant Caribbean country with stunning beaches, lush rainforests, and vibrant culture. Enjoy a relaxing day at the beach, explore the mountains and rivers, or take part in the exciting nightlife. Whether it's a romantic getaway or a family vacation, Dominikana has something for everyone",
            img: "dominikana.jpg",
            date: "2023-11-11",
            price: 3000
        },
        {

            destination: "England",
            title: "Exploring the Unique Heritage of England",
            rating: 3,
            desc: "England is a beautiful, historic country with diverse cultures, world-class attractions, stunning countryside and lively cities. Its vibrant culture and distinctive heritage offer a unique experience for visitors from all over the world",
            img: "engleska.jpg",
            date: "2023-11-11",
            price: 3000
        },
        {

            destination: "Maldives",
            title: "Enjoying the Natural Splendor of the Maldives",
            rating: 5,
            desc: "The Maldives is an idyllic paradise of white sand beaches, turquoise waters, stunning coral reefs and rich marine life. It is an ideal getaway for those seeking seclusion, relaxation, and natural beauty",
            img: "maldivi.jpg",
            date: "2023-07-11",
            price: 5000
        }, {

            destination: "UAE",
            title: "Exploring the Highlights of the United Arab",
            rating: 4,
            desc: "The United Arab Emirates is a modern oasis, boasting futuristic cities, luxury shopping, world-class dining, and stunning beaches. From adventure activities to cultural attractions, the UAE has something for everyone",
            img: "uae.jpg",
            date: "2023-02-11",
            price: 4000
        },
        {

            destination: "Indonesian",
            title: "Discovering the Magic of Indonesia",
            rating: 4,
            desc: "Indonesia is a tropical paradise, boasting ancient temples, lush jungles, beautiful beaches, vibrant cities, and diverse cultures. From relaxing on stunning island paradises to exploring the rich history, Indonesia is an unforgettable destination",
            img: "indonezija.jpg",
            date: "2023-01-11",
            price: 2000
        },
        {

            destination: "Italy",
            title: "Exploring the Enchanting Country of Italy",
            rating: 2,
            desc: "Italy is a country full of history, culture, art, delicious food, and stunning scenery. From the majestic Alps to the Amalfi Coast, vibrant cities to quaint hilltop villages, Italy is a wonderful place to explore and experience",
            img: "italija.jpg",
            date: "2023-05-11",
            price: 800
        }


    ])


    return (
        <TravelContext.Provider value={{ traveloffers, setTravelOffers }}>
            {children}
        </TravelContext.Provider>
    )



}

export default TravelContext