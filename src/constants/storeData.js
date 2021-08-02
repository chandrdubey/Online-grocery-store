const storeData = [
  {
    image:
      "https://rukminim1.flixcart.com/image/280/280/kjvrdzk0/flour/n/z/n/besan-besan-24-mantra-organic-original-imafzce3cghhtzhh.jpeg?q=70",
    company: "24 mantra",
    name: "ORGANIC Besan",
    product_type: 0,
    quantity: "500g",
    price: "85",
    id: 1,
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/280/280/kjvrdzk0/flour/a/h/n/whole-wheat-atta-whole-wheat-flour-24-mantra-organic-original-imafzce6gacmhu5a.jpeg?q=70",
      company: "24 mantra",
    name: "ORGANIC Whole Wheat Atta",
    product_type: 0,
    quantity: "1kg",
    price: "60",
    id: 2,
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/280/280/jxf05u80/flour/5/k/d/10-whole-wheat-chakki-atta-whole-wheat-flour-desi-choice-original-imafhunfjbgcanx8.jpeg?q=70",
      company: "Desi Choice",
      name: "Whole Wheat Chakki Atta",
      product_type: 0,
      quantity: "10kg",
      price: "350",
    id: 3,
  },
  {image:
    "https://rukminim1.flixcart.com/image/280/280/jxf05u80/flour/5/k/d/10-whole-wheat-chakki-atta-whole-wheat-flour-desi-choice-original-imafhunfjbgcanx8.jpeg?q=70",
    company: "AASHIRVAAD",
    name: "Shudh Chakki Atta",
    product_type: 0,
    quantity: "10kg",
    price: "375",
    id: 4,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/kohigsw0/flour/j/q/r/roasted-rava-sooji-soji-pillsbury-original-imag2xggeypj6zyv.jpeg?q=70",
    company: "Pillsbury",
    name: "Roasted Rava Sooji",
    product_type: 0,
    quantity: "500g",
    price: "36",
    id: 5,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/kqpj4i80/pulses/n/w/l/1-urad-white-urad-dal-natureland-organics-original-imag4nq7na3tfuw9.jpeg?q=70",
    company: "Natureland Organics",
    name: "Urad Dal",
    product_type: 1,
    quantity: "1kg",
    price: "259",
    id: 6,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/kixgtjk0/pulses/f/r/t/500-urad-dal-whole-white-urad-dal-organic-tattva-original-imafym8wq4kdh6hh.jpeg?q=70",
    company: "Organic Tattva",
    name: "White Urad Dal",
    product_type: 1,
    quantity: "500g",
    price: "115",
    id: 7,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/kngd0nk0/pulses/q/r/c/rajma-chitra-rajma-chithra-desi-choice-original-imag24myhpz4vge5.jpeg?q=70",
    company: "Desi Choice",
    name: "Rajma Chithra",
    product_type: 1,
    quantity: "1kg",
    price: "150",
    id: 8,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/knknc7k0/pulses/h/i/p/toor-dal-toor-dal-tata-sampann-original-imag27vfhhk3t9hh.jpeg?q=70",
    company: "Tata Sampann",
    name: "Toor Dal",
    product_type: 1,
    quantity: "1kg",
    price: "189",
    id: 9,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/kg15ocw0/pulses/q/v/q/1-raw-peanut-raw-peanut-desi-choice-original-imafwd6xgvadsvdy.jpeg?q=70",
    company: "Desi Choice",
    name: "Raw Peanut",
    product_type: 1,
    quantity: "1kg",
    price: "190",
    id: 10,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/280/280/jxf05u80/flour/5/k/d/10-whole-wheat-chakki-atta-whole-wheat-flour-desi-choice-original-imafhunfjbgcanx8.jpeg?q=70",
    company: "Catch",
    name: "Garam Masala",
    product_type: 2,
    quantity: "100g",
    price: "78",
    id: 11,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/k9vofbk0/spice-masala/p/c/m/500-turmeric-powder-pouch-aditya-powder-original-imafrkxj6zmwbmhf.jpeg?q=70",
    company: "AADITYA 501",
    name: "Turmeric Powder",
    product_type: 2,
    quantity: "500g",
    price: "150",
    id: 12,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/kgv5x8w0/spice-masala/h/j/n/100-chana-masala-box-catch-powder-original-imafxyf5dnvkh3zg.jpeg?q=70",
    company: "Catch",
    name: "Chana Masala",
    product_type: 2,
    quantity: "100g",
    price: "65",
    id: 13,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/jx0prbk0/spice-masala/s/g/j/100-deggi-mirch-box-mdh-powder-original-imafhhfxttf5ayzz.jpeg?q=70",
    company: "MDH",
    name: "Deggi Mirch Chilli Powder",
    product_type: 2,
    quantity: "100g",
    price: "78",
    id: 14,
  },
  {
    image:
    "https://rukminim1.flixcart.com/image/416/416/knknc7k0/spice-masala/l/g/f/kitchen-king-masala-box-tata-sampann-powder-original-imag27vhbexvyhxg.jpeg?q=70",
    company: "Tata Sampann",
    name: "Kitchen King Masala",
    product_type: 2,
    quantity: "45g",
    price: "35",
    id: 15,
  },
];
export default storeData;