const INITIAL_STATE = {
  sections: [
    {
      title: "Circuit",
      imageUrl: "https://i.ibb.co/V3BktFc/undraw-personal-trainer-ote3.png",
      id: 1,
      linkUrl: "videos",
    },
    {
      title: "Bike",
      imageUrl: "https://i.ibb.co/9Gkp5cG/undraw-indoor-bike-pwa4.png",
      id: 2,
      linkUrl: "videos",
    },
    {
      title: "cardio",
      imageUrl: "https://i.ibb.co/pnVgFrW/undraw-fitness-stats-sht6.png",
      id: 3,
      linkUrl: "videos",
    },
    {
      title: "shop",
      imageUrl: "https://i.ibb.co/4tm7rbv/undraw-add-to-cart-vkjp-1.png",
      size: "large",
      id: 5,
      linkUrl: "shop",
    },
  ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
