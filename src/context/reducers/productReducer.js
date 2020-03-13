export const PRODUCT_INIIAL_SATE = {
  0: {
    id: 0,
    name: "Triple choc Cookie Pop",
    image: "/images/trip_choc.jpg",
    price: 2
  },
  1: {
    id: 1,
    name: "Red Velvet Cookie Pop",
    image: "/images/red_velv.jpg",
    price: 2
  },
  2: {
    id: 2,
    name: "Whiteburry Cookie Pop",
    image: "/images/whiteburry.jpg",
    price: 2
  },
  3: {
    id: 3,
    name: "Milkburry Cookie Pop",
    image: "/images/milkburry.jpg",
    price: 2
  },
  4: {
    id: 4,
    name: "Hot Choc Stirrers",
    image: "/images/hot_choc.jpg",
    price: 2
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
