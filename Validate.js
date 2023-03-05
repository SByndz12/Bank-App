class Validate {
    validate(percentage) {
      if (percentage < 10 || percentage > 90) {
        return false;
      }
      return true;
    }
  }