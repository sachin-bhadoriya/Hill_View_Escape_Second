// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Anjali Mehra",
    position: "Travel Blogger",
    quote:
      "Hill View Escape is truly a hidden gem! The views are breathtaking and the staff made our stay unforgettable.",
    rating: 5,
    image: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    position: "Business Executive",
    quote:
      "Loved the peace and comfort. Ideal for a weekend escape from the city hustle.",
    rating: 4,
    image: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg",
  },
  {
    id: 3,
    name: "Priya Desai",
    position: "Photographer",
    quote:
      "The view from my room was straight out of a postcard. Perfect stay for nature lovers!",
    rating: 3,
    image: "https://images.unsplash.com/photo-1654723011681-98b30a0029ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVzdGltb25pYWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Karan Verma",
    position: "Entrepreneur",
    quote:
      "A wonderful experience from check-in to check-out. The hospitality is top-notch.",
    rating: 5,
    image: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg",
  },
  {
    id: 5,
    name: "Neha Kapoor",
    position: "Yoga Instructor",
    quote:
      "Peaceful, clean, and incredibly scenic. I’d recommend this to anyone seeking relaxation.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1654723011681-98b30a0029ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVzdGltb25pYWx8ZW58MHx8MHx8fDA%3D",
  },
];

//       how to show stars
// {[...Array(room.rating)].map((_, i) => (
//   <span key={i}>⭐</span>
// ))}


// offers
// data.js

export const offers = [
  {
    id: 1,
    discOff: "25% OFF",
    title: "Summer Escape Package",
    subtitle: "Enjoy a complimentary night and daily breakfast",
    expiry: "Expires Aug 31",
    link: "https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_1280.jpg"
  },
  {
    id: 2,
    discOff: "30% OFF",
    title: "Monsoon Madness Deal",
    subtitle: "Get spa credits and a free dinner for two",
    expiry: "Expires Sep 15",
    link: "https://media.istockphoto.com/id/489838744/photo/sunset-over-indian-ocean.webp?b=1&s=612x612&w=0&k=20&c=H7qCUCJm1UZcyTB94lvsdA3bLZm5W6HjE13OYXWkjxM="
  },
  {
    id: 3,
    discOff: "20% OFF",
    title: "Weekend Getaway Special",
    subtitle: "Book 2 nights and get 1 night free",
    expiry: "Expires Jul 20",
    link: "https://cdn.pixabay.com/photo/2019/10/18/05/04/tent-4558240_1280.jpg"
  }
];



// Rooms
export const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: "₹2,999",
    description:
      "Spacious room with valley view, king-size bed, and all modern amenities.",
    rating: 3.5,
    address: "123 Hilltop Road, Manali, Himachal Pradesh, India",
    image:
      "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Luxury Suite",
    price: "₹4,999",
    description:
      "Premium suite with private balcony, living space, and complimentary breakfast.",
    rating: 3.9,
    address: "45 Royal Avenue, Udaipur, Rajasthan, India",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Family Cottage",
    price: "₹6,999",
    description:
      "Perfect for families. Includes two bedrooms, kitchenette, and garden area.",
    rating: 4.9,
    address: "88 Green Meadow Lane, Ooty, Tamil Nadu, India",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Executive Room",
    price: "₹3,499",
    description:
      "Ideal for business travelers. Equipped with workspace, fast Wi-Fi, and modern interior.",
    rating: 4.4,
    address: "21 Corporate Street, Bengaluru, Karnataka, India",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Mountain View Suite",
    price: "₹5,999",
    description:
      "Enjoy breathtaking mountain views with top-class amenities and cozy comfort.",
    rating: 4.6,
    address: "5 Summit Drive, Shimla, Himachal Pradesh, India",
    image:
      "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
  },
];



// Services
export const services = [
  {
    id: 1,
    title: "Free Wi-Fi",
    icon: "https://cdn.lordicon.com/jezazvlx.json",
    description: "Stay connected with high-speed internet across the property.",
  },
  {
    id: 2,
    title: "Restaurant & Cafe",
    icon: "https://cdn.lordicon.com/ldckycar.json",
    description:
      "Delight your taste buds with local and international cuisines.",
  },
  {
    id: 3,
    title: "Bonfire Evenings",
    icon: "https://cdn.lordicon.com/xxfniotk.json",
    description: "Unwind under the stars with warm bonfires and music.",
  },
  {
    id: 4,
    title: "24/7 Room Service",
    icon: "https://cdn.lordicon.com/aksvbzmu.json",
    description: "Our staff is always ready to assist you at any time.",
  },
];

// Gallery
export const gallery = [
  {
    id: 1,
    image: "https://source.unsplash.com/featured/600x400/?hotel,resort,1",
  },
  {
    id: 2,
    image: "https://source.unsplash.com/featured/600x400/?hotel,lounge,2",
  },
  {
    id: 3,
    image: "https://source.unsplash.com/featured/600x400/?hotel,room,3",
  },
  {
    id: 4,
    image: "https://source.unsplash.com/featured/600x400/?hotel,balcony,4",
  },
  {
    id: 5,
    image: "https://source.unsplash.com/featured/600x400/?hotel,restaurant,5",
  },
  {
    id: 6,
    image: "https://source.unsplash.com/featured/600x400/?hotel,view,6",
  },
];

// Contact Info
export const contactInfo = {
  address: "Hilltop Road, Near Sunrise Valley, Mussoorie, Uttarakhand",
  phone: "+91 98765 43210",
  email: "info@hillviewescape.com",
  mapLink: "https://maps.google.com/?q=hill+view+escape+mussoorie",
};

// About Section
export const about = {
  title: "Welcome to Hill View Escape",
  content:
    "Nestled in the serene hills of Mussoorie, Hill View Escape is your perfect getaway from the city's chaos. With panoramic views, modern amenities, and warm hospitality, we ensure an experience you'll cherish forever.",
  image1: "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  image2: "https://i.pinimg.com/736x/7e/5e/fa/7e5efad4362ad01ffb4252bb4929e891.jpg",
  image3: "https://i.pinimg.com/736x/aa/91/7d/aa917d97f18b7d0b9916293664d8da16.jpg",
  vision:
    "To become the most trusted and beloved nature-retreat destination in North India, where every guest leaves with unforgettable memories.",
  mission:
    "To provide exceptional hospitality through personalized service, sustainable practices, and a deep connection with nature, ensuring a rejuvenating experience for all our guests.",
};


// team
export const teamMembers = [
  {
    name: "Akash Thakur",
    designation: "General Manager",
    image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
    social: {
      linkedin: "https://linkedin.com/in/akashthakur",
      twitter: "https://twitter.com/sachinbhai",
      instagram: "https://instagram.com/sachinbhai",
      facebook: "https://facebook.com/sachinbhai",
    },
  },
  {
    name: "Anjali Sharma",
    designation: "Front Desk Manager",
    image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
    social: {
      linkedin: "https://linkedin.com/in/anjalisharma",
      twitter: "https://twitter.com/anjalimarkets",
      instagram: "https://instagram.com/anjali",
      facebook: "https://facebook.com/anjalisharma",
    },
  },
  {
    name: "Rohan Verma",
    designation: "Executive Chef",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww", 
    social: {
      linkedin: "https://linkedin.com/in/rohanverma",
      twitter: "https://twitter.com/devrohan",
      instagram: "https://instagram.com/rohan.codes",
      facebook: "https://facebook.com/rohanverma",
    },
  },
  {
    name: "Neha Patil",
    designation: "Housekeeping Supervisor",
    image: "https://plus.unsplash.com/premium_photo-1676106975756-178b02b65d4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbiUyMGluZGlhbiUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    social: {
      linkedin: "https://linkedin.com/in/nehapatil",
      twitter: "https://twitter.com/designeha",
      instagram: "https://instagram.com/nehapatil",
      facebook: "https://facebook.com/nehapatil",
    },
  },
];
