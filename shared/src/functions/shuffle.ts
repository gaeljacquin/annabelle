// Fisher-Yates shuffle
export default function shuffleList(list: unknown[]) {
  const shuffledList = [...list];

  for (let i = shuffledList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const shift = shuffledList[i];
    shuffledList[i] = shuffledList[j]!;
    shuffledList[j] = shift;
  }

  return shuffledList;
}
