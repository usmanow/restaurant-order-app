const watchedState = new Proxy({
  productList: [],
  currentProduct: null,
  searchValue: '',
  isModalOpen: false,
  isLoaderOpen: false
}, {
  set: (target, prop, value) => {
    target[prop] = value

    if (prop === 'productList') renderProducts(value)
    if (prop === 'currentProduct') updateModalContent(value)
    if (prop === 'searchValue') renderProducts()
    if (prop === 'isLoaderOpen') loaderRender(value)
    if (prop === 'isModalOpen') toggleModalVisibility(value)

    return true
  }
})

const fetchProducts = async () => {
  try {
    watchedState.isLoaderOpen = true
    const response = await fetch('https://fakestores.onrender.com/api/products')
    const products = await response.json()
    watchedState.productList = products.slice(0, 10)
  } catch (error) {
    console.error('Ошибка', error)
  } finally {
    watchedState.isLoaderOpen = false
  }
}

const renderProducts = () => {
  const productContainer = document.querySelector('.products-list')
  productContainer.innerHTML = ''

  watchedState.productList
    .filter(product => product.title.toLowerCase().includes(watchedState.searchValue))
    .forEach((product) => {
      const liElement = document.createElement('li')
      liElement.classList.add('products-list__item')
      liElement.id = product.id

      const title = document.createElement('h1')
      title.classList.add('products-list__title')
      title.textContent = product.title

      const img = document.createElement('img')
      img.classList.add('products-list__image')
      img.src = product.imageURL
      img.width = '170'
      img.height = '170'
      img.alt = product.title

      const descriptionContainer = document.createElement('div')
      descriptionContainer.classList.add('products-list__description-wrapper')

      const description = document.createElement('span')
      description.classList.add('products-list__description')
      description.textContent = product.description

      const openModalButton = document.createElement('button')
      openModalButton.classList.add('products-list__detail-button')
      openModalButton.setAttribute('data-id', product.id)
      openModalButton.textContent = 'подробнее'

      const price = document.createElement('span')
      price.classList.add('products-list__price')
      price.textContent = `$ ${product.price}`

      const button = document.createElement('button')
      button.classList.add('products-list__button')
      button.classList.add('button')
      button.textContent = 'Купить'

      descriptionContainer.append(description, openModalButton)
      liElement.append(title, img, descriptionContainer, price, button)
      productContainer.append(liElement)

      openModalButton.addEventListener('click', () => {
        watchedState.currentProduct = product
        watchedState.isModalOpen = true
      })
    })
}

const updateModalContent = (product) => {
  const title = document.querySelector('.modal__product-title')
  const image = document.querySelector('.modal__product-image')
  const description = document.querySelector('.modal__product-description')
  const price = document.querySelector('.modal__product-price')
  const button = document.querySelector('.modal__product-button')

  title.textContent = product.title
  image.src = product.imageURL
  image.alt = product.title
  description.textContent = product.description
  price.textContent = `$ ${product.price}`
  button.textContent = 'Купить'
}

const toggleModalVisibility = (isVisible) => {
  const modal = document.querySelector('.modal')
  if (isVisible) {
    modal.classList.add('show')
  } else {
    modal.classList.remove('show')
  }
}

const addModalCloseListeners = () => {
  const modal = document.querySelector('.modal__overlay')
  const closeModalButton = document.querySelector('.modal__close-button')

  modal.addEventListener('click', (e) => {
    if (e.target === modal) watchedState.isModalOpen = false
  })

  closeModalButton.addEventListener('click', () => {
    watchedState.isModalOpen = false
  })
}

const loaderRender = (isLoading) => {
  const loader = document.querySelector('.loader')
  if (!isLoading) {
    loader.classList.add('none')
  } else {
    loader.classList.remove('none')
  }
}

const handleSearch = (e) => {
  const inputValue = e.target.value.toLowerCase()
  watchedState.searchValue = inputValue
}

const inputSearch = document.querySelector('.header__search')
inputSearch.addEventListener('input', handleSearch)

addModalCloseListeners()
fetchProducts()