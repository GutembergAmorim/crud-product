const tableData = document.getElementById('tableContent');
const modal = document.getElementById('modal');
const btnAddProduct = document.getElementById('addProduct');


function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

btnAddProduct.addEventListener('click', openModal)

const products = [
    {
        nome: 'Iphone X 64Gb Grey',
        preco: 999.0,
        quantidade: 5
    },
    {
        nome: 'Samsung S8 Black',
        preco: 756.0,
        quantidade: 1
    },

];

function renderDataTable() {
    products.map((product) => {
        const total = product.preco * product.quantidade;
        return (tableData.innerHTML += `
        <tr class="even:bg-[#f2f2f2] odd:bg-white">
            <td class="p-2">2017-09-29 01:22</td>
            <td class="text-center">200398</td>
            <td class="p-2">${product.nome}</td>
            <td class="text-center">${product.preco.toLocaleString('PT-BR', {
                style: 'currency',
                currency: 'BRL',
            })}</td>
            <td class="text-right">${product.quantidade}</td>
            <td class="text-center">${total.toLocaleString('PT-BR', {
                style: 'currency',
                currency: 'BRL',
            })}</td>
        </tr>  
        
        `)
    })
}

renderDataTable(products)

