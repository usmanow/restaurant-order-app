// import { useState } from 'react'
// import Button from '../../ui/Button/Button'
// import Card from '../../components/Card/Card'
// import Modal from '../../components/Modal/Modal'
// import styles from './MainPage.module.scss'

// const MainPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const handleOpenModal = () => setIsModalOpen(true)
//   const handleCloseModal = () => setIsModalOpen(false)

//   return (
//     <>
//       <div className={styles.header}>
//         <Button
//           title='Open Modal'
//           onClick={handleOpenModal}
//         />
//       </div>

//       <div className={styles['cards-container']}>
//         <Card
//           image='product-1.png'
//           title='Устрицы по рокфеллеровски'
//           description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'
//           price='2 700 ₽'
//         />
//         <Card
//           image='product-2.png'
//           title='Свиные ребрышки на гриле с зеленью'
//           description='Не следует, однако забывать, что реализация намеченных плановых'
//           price='1 600 ₽'
//         />
//       </div>

//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//       >
//         Модальное окно
//       </Modal>
//     </>
//   )
// }

// export default MainPage