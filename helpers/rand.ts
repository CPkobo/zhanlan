export function randInt(min: number, max: number): number {
  return randRange(min, max, 1)[0]
}

export function randRange(min: number, max: number, count: number): number[] {
  const nums: number[] = []
  if (max < count) {
    nums.push(...Array(max + 1).keys())
    return nums.slice(min).sort(() => Math.random() - 0.5)
  } else {
    while (nums.length < count) {
      const idx = Math.floor(Math.random() * (max - min + 1) + min);
      if (!nums.includes(idx)) {
        nums.push(idx)
      }
    }
    return nums
  }
}