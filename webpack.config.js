import path from 'path';

module.exports = {
  entry: "./DayPicker.js",
  output: {
      path: path.join(__dirname, '/dist'),
      filename: 'DayPicker.js'
  },
  externals: {
    "react": "React"
  }
}
