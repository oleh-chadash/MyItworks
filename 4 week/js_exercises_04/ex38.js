// You get an array of objects of users from your database:
// const users = [
// {
// id: 167464,
// firstName: "Jimmy",
// lastName: "Arnold",
// email: "jimmya@gmail.com",
// },
// {
// id: 578447,
// firstName: "Martha",
// lastName: "Goldman",
// email: "gold@hotmail.com",
// },
// {
// id: 864578,
// firstName: "Tim",
// lastName: "Burton",
// email: "timmy.hotmail.com",
// },
// ];
// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
// 2. Remove the bullet points of the ordered list with
// JavaScript.
// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.

// Получаем массив объектов пользователей
const users = [
    {
      id: 167464,
      firstName: "Jimmy",
      lastName: "Arnold",
      email: "jimmya@gmail.com",
    },
    {
      id: 578447,
      firstName: "Martha",
      lastName: "Goldman",
      email: "gold@hotmail.com",
    },
    {
      id: 864578,
      firstName: "Tim",
      lastName: "Burton",
      email: "timmy.hotmail.com",
    },
  ];
  
  // Создаем упорядоченный список
  const ol = document.createElement('ol');
  
  // Убираем стандартные маркеры списка
  ol.style.listStyleType = 'none';
  
  // Используем forEach для перебора массива users
  users.forEach(user => {
    // Создаем элемент списка для каждого пользователя
    const li = document.createElement('li');
    
    // Задаем текстовое содержимое элемента списка
    li.textContent = `${user.firstName} ${user.lastName}`;
  
    // Добавляем кастомный атрибут data-id
    li.setAttribute('data-id', user.id);
  
    // Добавляем элемент списка в упорядоченный список
    ol.appendChild(li);
  });
  
  // Добавляем упорядоченный список в body документа
  document.body.appendChild(ol);
  
