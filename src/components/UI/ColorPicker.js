import "./ColorPicker.css"
const ColorPicker = () => {
  return (
    <div className="color-picker box">
      <label for="favcolor">Select Favorite Color:</label>
      <input type="color" id="favcolor" name="favcolor" value='blue' />
    </div>
  )

}

export default ColorPicker