import React from "react"
import MenuItem from "../menu-item/menu-item.component"

import "./directory.styles.scss"

class Directory extends React.Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: "Cardio",
          imageUrl:
            "https://i.ibb.co/ynhW2HY/undraw-finish-line-katerina-limpitsouni-xy20.png",
          id: 1,
          linkUrl: "shop",
        },
        {
          title: "Bike",
          imageUrl: "https://i.ibb.co/Lkm9btS/undraw-biking-kc4f.png",
          id: 2,
          linkUrl: "shop",
        },
        {
          title: "Stretch",
          imageUrl: "https://i.ibb.co/5v5NX14/undraw-pilates-gpdb.png",
          id: 3,
          linkUrl: "shop",
        },
        {
          title: "Weights",
          imageUrl: "https://i.ibb.co/HYdgWY0/undraw-working-out-6psf.png",
          size: "large",
          id: 4,
          linkUrl: "shop",
        },
        {
          title: "shop",
          imageUrl: "https://i.ibb.co/1Zw0g9z/undraw-add-to-cart-vkjp.png",
          size: "large",
          id: 5,
          linkUrl: "shop",
        },
      ],
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory
