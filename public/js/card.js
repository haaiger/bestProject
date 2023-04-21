const buttonAddFavorite1 = document.querySelectorAll(".buttonAddFavorite");
const buttonRemoveFavorite1 = document.querySelectorAll(".buttonRemoveFavorite");
const wrapperButton1 = document.querySelector(".card-body");

buttonAddFavorite1.forEach((cardButton) => {
  cardButton?.addEventListener("click", async (event) => {
    event.preventDefault();
    const { userId } = event.target.dataset;
    try {
      const response = await fetch(`/favorites/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ houseId: cardButton.id, userId }),
      });

      if (response.ok) {
        console.log("Добавлено в избранное");
      } else {
        console.error("Ошибка добавления в избранное");
      }
    } catch (error) {
      console.log("Ошибка добавления недвижимости в избранное", error);
    }
  });
});

buttonRemoveFavorite1.forEach((cardButton) => {
  cardButton?.addEventListener("click", async (event) => {
    event.preventDefault();
    const { userId } = event.target.dataset;
    console.log(userId);
    try {
      const response = await fetch(`/favorites/remove`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ houseId: cardButton.id, userId }),
      });

      if (response.ok) {
        console.log("Удалено из избранного");
      } else {
        console.error("Ошибка удаления из избранного");
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  });
});
