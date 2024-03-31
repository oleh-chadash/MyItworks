document.addEventListener("DOMContentLoaded", function () {
  // Создаем панель инструментов
  const panel = document.createElement("div");
  panel.className = "panel";

  // Создаем список инструментов
  const toolList = document.createElement("ul");
  toolList.className = "tool-list"; // Класс для стилизации списка

  // Инструменты
  const tools = ["axe", "pickaxe", "shovel"];
  tools.forEach((tool) => {
    // Создаем элемент списка для каждого инструмента
    const toolItem = document.createElement("li");
    toolItem.className = "tool-item"; // Класс для стилизации элемента списка

    // Создаем и настраиваем изображение инструмента
    const img = document.createElement("img");
    img.src = `icons/${tool}.png`; // Путь к изображению инструмента

    // Добавляем изображение в элемент списка
    toolItem.appendChild(img);

    // Добавляем элемент списка в список инструментов
    toolList.appendChild(toolItem);
  });

  // Добавляем список инструментов в панель
  panel.appendChild(toolList);

  // Создаем и добавляем инвентарь в панель
  const inventory = document.createElement("div");
  inventory.className = "inventory";
  const inventoryTitle = document.createElement("h4");
  inventoryTitle.textContent = "Inventory:";
  inventory.appendChild(inventoryTitle);
  const lastBlock = document.createElement("div");
  lastBlock.setAttribute("data-inventory", "last_block");
  inventory.appendChild(lastBlock);
  panel.appendChild(inventory); // Добавляем инвентарь в панель

  // Создаем и добавляем кнопку сброса в панель
  const resetButton = document.createElement("button");
  resetButton.className = "reset-game";
  resetButton.textContent = "Reset Game";
  panel.appendChild(resetButton); // Добавляем кнопку сброса в панель

  // Создаем мир
  const world = document.createElement("div");
  world.className = "world";
  const gridSize = 10; // Размер сетки мира
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    world.appendChild(cell);
  }

  // Добавляем панель инструментов и мир в документ
  document.body.appendChild(panel);
  document.body.appendChild(world);
});
