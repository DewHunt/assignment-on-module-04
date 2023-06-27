export default class Product {
  constructor() {
    console.log("This is Product Class");
  }

  setProducts() {
    let prodcutLists = [
      {
        id: "p001",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "Product - 001",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p002",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "Product - 002",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p003",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "Product - 003",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p004",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "Product - 004",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p005",
        categoryId: "c001",
        categoryName: "Category 001",
        name: "Product - 005",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p006",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "Product - 006",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p007",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "Product - 007",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p008",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "Product - 008",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p009",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "Product - 009",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
      {
        id: "p0010",
        categoryId: "c002",
        categoryName: "Category 002",
        name: "Product - 0010",
        description:
          "Some example text some example text. John Doe is an architect and engineer",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaXpSWehi1EBLgvKQ_rZo0qbn_HgzQC0ElDVBZIUpr7A&s",
        quantity: 15,
        price: 1500,
        stock: 50,
        sold: 5,
      },
    ];
    return prodcutLists;
  }

  getProducts() {
    let productList = this.setProducts();
    return productList;
  }

  setCategories() {
    let categories = [
      {
        id: "c001",
        name: "Category 001",
      },
      {
        id: "c002",
        name: "Category 002",
      },
    ];
    return categories;
  }

  getCategories() {
    let categories = this.setCategories();
    return categories;
  }
}
