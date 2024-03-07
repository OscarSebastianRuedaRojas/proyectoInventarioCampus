const URL_API = "http://localhost:3000";
const myHeaders = new Headers({
    "Content-Type": "application/json"
});

async function getProduct(endpoint) {
    try {
        const response = await fetch(`${URL_API}${endpoint}`)
        if (!response.ok) {
            throw new Error("Error en la petición.")
        }
        return await response.json()
    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function postProduct(endpoint, data) {
    try {
        const response = await fetch(`${URL_API}${endpoint}`,
            {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(data)
            }
        )
        if (!response.ok) {
            throw new Error("Error en la petición.")
        }
        return await response.json()
    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function putProduct(endpoint, id, data) {
    try {
        const response = await fetch(`${URL_API}${endpoint}/${id}`,
            {
                method: "PUT",
                headers: myHeaders,
                body: JSON.stringify(data)
            }
        )
        if (!response.ok) {
            throw new Error("Error en la petición.")
        }
        return await response.json()
    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function delProduct(endpoint, id) {
    try {
        const response = await fetch(`${URL_API}${endpoint}/${id}`,
            {
                method: "DELETE",
                headers: myHeaders,
            }
        )
        if (!response.ok) {
            throw new Error("Error en la petición.")
        }
        return await response.json()
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {
    getProduct as getProducts,
    postProduct as postProducts,
    putProduct as putProducts,
    delProduct as delProducts
};