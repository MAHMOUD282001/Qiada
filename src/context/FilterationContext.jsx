import React, { createContext, useContext, useEffect, useState } from "react";
import { ModalContext } from "./ModalContext";

// Create context
export const FilterationContext = createContext();

export const FilterationProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  let [sortingDropdownValue, setSortingDropdownValue] =
    useState("Price: Low to High");
  let [categoriesDropdownValue, setCategoriesDropdownValue] = useState("All");

  let [isSortingDropDownOpen, setIsSortingDropDownOpen] = useState(false);
  let [isCategoriesDropDownOpen, setIsCategoriesDropDownOpen] = useState(false);
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  // Sorting Dropdown
  let sortingDropdownValues = [
    "A - Z",
    "Z - A",
    "Price: Low to High",
    "Price: High to Low",
  ];

  // Categories Dropdown
  let categoriesDropdownValues = [
    "All",
    "Electronics",
    "Clothing",
    "Mobile Phones",
    "Home appliances",
  ];
  
  // Handle All Dropdowns Change
  let handleDropdownChange = (type, value) => {
    if (type === "sorting") {
      setSortingDropdownValue(value);
      setIsSortingDropDownOpen(false);
    } else {
      setCategoriesDropdownValue(value);
      setIsCategoriesDropDownOpen(false);
    }
  };
  
  // Handle All Dropdowns State
  let handleDropdownState = (type) => {
    if (type === "sorting") {
      setIsSortingDropDownOpen(!isSortingDropDownOpen);
    } else {
      setIsCategoriesDropDownOpen(!isCategoriesDropDownOpen);
    }
  };

  // Get Products
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, [isModalOpen]);

  // Filter products based on search term
  let filteredProducts = [];
  if (sortingDropdownValue === "A - Z") {
    filteredProducts = products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      .filter((filteredProduct) =>
        categoriesDropdownValue.toLowerCase() !== "all"
          ? filteredProduct.category
              .toLowerCase()
              .includes(categoriesDropdownValue.toLowerCase())
          : filteredProduct
      );
  } else if (sortingDropdownValue === "Z - A") {
    filteredProducts = products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
      .filter((filteredProduct) =>
        categoriesDropdownValue.toLowerCase() !== "all"
          ? filteredProduct.category
              .toLowerCase()
              .includes(categoriesDropdownValue.toLowerCase())
          : filteredProduct
      );
  } else if (sortingDropdownValue === "Price: Low to High") {
    filteredProducts = products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.price - b.price)
      .filter((filteredProduct) =>
        categoriesDropdownValue.toLowerCase() !== "all"
          ? filteredProduct.category
              .toLowerCase()
              .includes(categoriesDropdownValue.toLowerCase())
          : filteredProduct
      );
  } else if (sortingDropdownValue === "Price: High to Low") {
    filteredProducts = products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => b.price - a.price)
      .filter((filteredProduct) =>
        categoriesDropdownValue.toLowerCase() !== "all"
          ? filteredProduct.category
              .toLowerCase()
              .includes(categoriesDropdownValue.toLowerCase())
          : filteredProduct
      );
  }

  return (
    <FilterationContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredProducts,
        isSortingDropDownOpen,
        setIsSortingDropDownOpen,
        isCategoriesDropDownOpen,
        setIsCategoriesDropDownOpen,
        sortingDropdownValue,
        setSortingDropdownValue,
        categoriesDropdownValue,
        setCategoriesDropdownValue,
        sortingDropdownValues,
        categoriesDropdownValues,
        handleDropdownChange,
        handleDropdownState,
      }}
    >
      {children}
    </FilterationContext.Provider>
  );
};
