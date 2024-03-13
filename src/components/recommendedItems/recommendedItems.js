import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Image, ToggleButton } from "react-bootstrap";
import "./recommendedItems.css";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import ProductDetailsModal from "../productDetailsPage/productDetailsModal";
import CurrencyFormatter from "../commonComponents/currencyFormatter";

const RecommendedItems = () => {
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [checkedState, setCheckedState] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const data = {
    products: [
      {
        id: 26,
        title: "Table Lamp",
        description:
          "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        price: 41,
        discountPercentage: 17.86,
        rating: 4.08,
        stock: 131,
        brand: "Boho Decor",
        category: "home-decoration",
        thumbnail: "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
        images: [
          "images/Lamp_Mat01.png",
          "https://cdn.dummyjson.com/product-images/26/2.jpg",
          "https://cdn.dummyjson.com/product-images/26/3.jpg",
          "https://cdn.dummyjson.com/product-images/26/4.jpg",
          "https://cdn.dummyjson.com/product-images/26/5.jpg",
          "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
        ],
      },
      {
        id: 27,
        title: "Chair Motion Lounger",
        description:
          "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        price: 51,
        discountPercentage: 15.58,
        rating: 4.41,
        stock: 17,
        brand: "Flying Wooden",
        category: "home-decoration",
        thumbnail: "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
        images: [
          "images/ArmChair_Mat01.png",
          "https://cdn.dummyjson.com/product-images/27/2.jpg",
          "https://cdn.dummyjson.com/product-images/27/3.jpg",
          "https://cdn.dummyjson.com/product-images/27/4.jpg",
          "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
        ],
      },
      {
        id: 28,
        title: "Homesake Wooden Lamp",
        description:
          "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        price: 20,
        discountPercentage: 16.49,
        rating: 4.82,
        stock: 54,
        brand: "LED Lights",
        category: "home-decoration",
        thumbnail: "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
        images: [
          "images/Lamp_Mat03.png",
          "https://cdn.dummyjson.com/product-images/28/2.jpg",
          "https://cdn.dummyjson.com/product-images/28/3.png",
          "https://cdn.dummyjson.com/product-images/28/4.jpg",
          "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
        ],
      },
      {
        id: 29,
        title: "Table for Living",
        description:
          "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        price: 60,
        discountPercentage: 15.34,
        rating: 4.44,
        stock: 7,
        brand: "luxury palace",
        category: "home-decoration",
        thumbnail: "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
        images: [
          "images/Table_Mat02.png ",
          "https://cdn.dummyjson.com/product-images/29/2.jpg",
          "https://cdn.dummyjson.com/product-images/29/3.webp",
          "https://cdn.dummyjson.com/product-images/29/4.webp",
          "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
        ],
      },
      {
        id: 30,
        title: "Planter",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: "Golden",
        category: "home-decoration",
        thumbnail: "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
        images: [
          "images/Plant_Mat02.png",
          "https://cdn.dummyjson.com/product-images/30/2.jpg",
          "https://cdn.dummyjson.com/product-images/30/3.jpg",
          "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
        ],
      },
      {
        id: 31,
        title: "White Table",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: "Golden",
        category: "home-decoration",
        thumbnail: "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
        images: [
          "images/Table_Mat01.png",
          "https://cdn.dummyjson.com/product-images/30/2.jpg",
          "https://cdn.dummyjson.com/product-images/30/3.jpg",
          "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
        ],
      },
    ],
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    // const getData = await fetch(
    //   "https://dummyjson.com/products/category/home-decoration"
    // ).then((res) => res.json());
    // setRecommendedItems(getData?.products);
    // setCheckedState(Array(getData?.products.length).fill(false));
    setRecommendedItems(data?.products);
    setCheckedState(Array(data?.products.length).fill(false));
  };

  const sliderSetting = { infinite: false };
  const [total, setTotal] = useState(0);
  const [content, setContent] = useState({});
  const [id, setId] = useState([]);
  const sliderImageDataSettings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CgChevronLeft />,
    nextArrow: <CgChevronRight />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...sliderSetting,
  };

  const handleImageClick = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    let productId = [];
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          productId.push(recommendedItems[index].id);
          return sum + recommendedItems[index].price;
        }
        return sum;
      },
      0
    );
    setTotal(totalPrice);
    setId(productId);
  };

  const setModalContent = (imageItem) => {
    setContent(imageItem);
    setModalShow(true);
  };

  return (
    <div className="recommended-container">
      <div>
        <h3>Frequently Bought Together</h3>
      </div>
      <div className="inc_pdp_bundle_block">
        <div className="slider-wrapper">
          <Slider
            className="frequently-bought-design-slider"
            {...sliderImageDataSettings}
          >
            {recommendedItems?.map((imageItem, imageItemIndex) => {
              return (
                <>
                  <div key={imageItemIndex} className="slider-item">
                    <ToggleButton
                      id={`custom-checkbox-${imageItemIndex}`}
                      type="checkbox"
                      className="form-check-input"
                      bsPrefix="checkbox-input form-check-input"
                      value={checkedState[imageItemIndex]}
                      checked={checkedState[imageItemIndex]}
                      onChange={() => handleImageClick(imageItemIndex)}
                    />

                    <Image
                      src={imageItem?.images?.[0]}
                      className="w-100"
                      onClick={() => setModalContent(imageItem)}
                    />

                    <div>
                      <div className="product-title">{imageItem?.title}</div>
                      <div className="product-price">
                        {" "}
                        <CurrencyFormatter amount={imageItem?.price} />
                      </div>
                    </div>
                  </div>
                  <ProductDetailsModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    productDetails={content}
                  />
                </>
              );
            })}
          </Slider>
        </div>
        <div className="inc_pdp_simple_cart_block">
          <div>
            <div>{`${checkedState?.filter((e) => e === true).length} ${
              checkedState?.filter((e) => e === true).length > 1
                ? "Items"
                : "Item"
            }`}</div>
          </div>
          <div>
            <div>Total Bundle Price</div>
            <div>
              <CurrencyFormatter amount={total} />
            </div>
          </div>
          {/* <Button variant="secondary" href={`/view-in-room?id=${id.join(",")}`}>
            View In Room
          </Button> */}
          <Button
            variant="secondary"
            href="https://ripeconcepts.8thwall.app/ar-multi-items-v2"
            target="_blank"
          >
            View In Room
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendedItems;
