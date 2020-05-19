// // имитация нереляционной базы данных
// const userA = {
//     name: "user name",
//     phone: "xxx-xxx-xx-xx",
//     email: "email@gmail.com",
//     avatar:
//       "https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     address: {
//       country: "Country",
//       city: "City",
//     },
//   };
  
//   const userB = {
//     name: "user name",
//     phone: "xxx-xxx-xx-xx",
//     email: "email@gmail.com",
//     avatar:
//       "https://images.pexels.com/photos/2439563/pexels-photo-2439563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     address: {
//       country: "Country",
//       city: "City",
//     },
//   };
  
//   // ОБРАТИМСЯ К УЗЛУ-ЭЛЕМЕНТУ div, в который будут записываться профили наших юзеров
//   const profileContainer = document.querySelector(".profile-container");
//   console.log(profileContainer);
  
//   const profileA = createUserProfile(userA);
//   const profileB = createUserProfile(userB);
  
//   // запишем профили наших полученных из БД юзеров в узел-элемент
//   profileContainer.append(profileA, profileB);
  
//   // // СОЗДАДИМ ФУНКЦИЮ, ГЕНЕРИРУЮЩУЮ ПРОФИЛЬ ЮЗЕ
  

//   function createUserProfile([ avatar, name, phone, email, address]) {
//       const container = document.createElement("div");
//   container.classList.add("user-progile");
//   console.log("мы создали узел для добавления нового пользователя:", container); 
//     };
//     const profileImage = document.createElement("img");
//     profileImage.src = avatar;
//     profileImage.alt = "user image";
//     profileImage.classList.add("profile-image");
//     console.log(profileImage);



    