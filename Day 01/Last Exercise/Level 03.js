class Statistics {
  constructor(data) {
    this.data = data.sort((a, b) => a - b);
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, val) => acc + val, 0);
  }

  min() {
    return this.data[0];
  }

  max() {
    return this.data[this.data.length - 1];
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const n = this.data.length;
    if (n % 2 === 0) {
      return (this.data[n / 2 - 1] + this.data[n / 2]) / 2;
    } else {
      return this.data[(n - 1) / 2];
    }
  }

  mode() {
    const counts = {};
    for (const value of this.data) {
      counts[value] = (counts[value] || 0) + 1;
    }

    const maxCount = Math.max(...Object.values(counts));
    const modes = Object.entries(counts)
      .filter(([key, value]) => value === maxCount)
      .map(([key]) => key);

    return { mode: modes[0], count: maxCount };
  }

  variance() {
    const mean = this.mean();
    return this.data.reduce((acc, val) => acc + (val - mean) ** 2, 0) / this.count();
  }

  std() {
    return Math.sqrt(this.variance());
  }

  freqDist() {
    const counts = {};
    for (const value of this.data) {
      counts[value] = (counts[value] || 0) + 1;
    }

    return Object.entries(counts).map(([value, count]) => ({ value, count }));
  }

  describe() {
    console.log("Count:", this.count());
    console.log("Sum: ", this.sum());
    console.log("Min: ", this.min());
    console.log("Max: ", this.max());
    console.log("Range: ", this.range());
    console.log("Mean: ", this.mean());
    console.log("Median: ", this.median());
    console.log("Mode: ", this.mode());
    console.log("Variance: ", this.variance());
    console.log("Standard Deviation: ", this.std());
    console.log("Frequency Distribution: ", this.freqDist());
  }
}

// Example usage
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
statistics.describe();
