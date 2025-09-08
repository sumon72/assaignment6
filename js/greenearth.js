
document.addEventListener("DOMContentLoaded", () => {
    getCatagoryData();
    getAllItemData();

});

const getCatagoryData = async () => {
    try {
        const response = await fetch("https://openapi.programming-hero.com/api/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const CatagolyList = data.categories;

        const catul = document.getElementById("catagory");
        let HtmlContent = "";

        for (let cat of CatagolyList) {

            HtmlContent += `<li class="cursor-pointer px-3 py-2 rounded-md hover:bg-[#166534] hover:text-[#FFFFFF]" 
           onclick="getItemDataByCatagory(${cat.id})" id="${cat.id}">${cat.category_name}</li>`;

        }

        catul.innerHTML = HtmlContent;

    } catch (error) {
        console.error("Fetch error:", error);
    }
};

const getAllItemData = async () => {
    try {
        const response = await fetch("https://openapi.programming-hero.com/api/plants", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const AllItemList = data.plants;

        const CardItem = document.getElementById("itemCard");
        let HtmlContent = "";

        for (let itm of AllItemList) {

            HtmlContent += `<div class="bg-white shadow-md rounded-xl p-4 flex flex-col">
                        <img src=${itm.image} alt=${itm.name} class="w-full h-40 object-cover rounded-lg mb-3">
                        <h3 class="text-lg font-semibold text-gray-800">${itm.name}</h3>
                        <p class="text-sm text-gray-600 mb-3">${itm.description}</p>
                        <div class="flex items-center justify-between mb-3">
                            <span class="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">${itm.category}</span>
                            <span class="text-lg font-bold text-gray-900">৳${itm.price}</span>
                        </div>
                        <button command="show-modal" commandfor="dialog"
                            class="mt-auto bg-[#166534] text-white py-2 px-4 rounded-lg hover:bg-green-700">
                            Add to Cart
                        </button>
                    </div>`;

        }

        CardItem.innerHTML = HtmlContent;

    } catch (error) {
        console.error("Fetch error:", error);
    }
};

const getItemDataByCatagory = async (id) => {

    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/category/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        const AllItemList = data.plants;

        const CardItem = document.getElementById("itemCard");
        let HtmlContent = "";

        for (let itm of AllItemList) {

            HtmlContent += `<div class="bg-white shadow-md rounded-xl p-4 flex flex-col">
                        <img src=${itm.image} alt=${itm.name} class="w-full h-40 object-cover rounded-lg mb-3">
                        <h3 class="text-lg font-semibold text-gray-800">${itm.name}</h3>
                        <p class="text-sm text-gray-600 mb-3">${itm.description}</p>
                        <div class="flex items-center justify-between mb-3">
                            <span class="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">${itm.category}</span>
                            <span class="text-lg font-bold text-gray-900">৳${itm.price}</span>
                        </div>
                        <button command="show-modal" commandfor="dialog"
                            class="mt-auto bg-[#166534] text-white py-2 px-4 rounded-lg hover:bg-green-700">
                            Add to Cart
                        </button>
                    </div>`;

        }

        CardItem.innerHTML = HtmlContent;

    } catch (error) {
        console.error("Fetch error:", error);
    }
};


