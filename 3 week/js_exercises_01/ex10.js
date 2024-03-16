function getGrade(score) {
    if (score >= 90 && score <= 100) {
         "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 65 && score < 70) {
        return "D";
    } else if (score >= 0 && score < 65) {
        return "F";
    } else {
        return "Invalid score";
    }
}
