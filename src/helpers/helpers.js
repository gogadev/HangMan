export const showNotification = (setter) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
};

export const checkWin = (correct, wrong, word) => {
  let status = "win";

  // Check For Win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  // Check For Lose
  if (wrong.length === 6) status = "lose";
  return status;
};
