import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInputValue} = props
  const {suggestion} = suggestionDetails
  const onClickSuggession = () => {
    updateSearchInputValue(suggestion)
  }

  return (
    <li className="suggestion-list">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-icon"
        alt="arrow"
        onClick={onClickSuggession}
      />
    </li>
  )
}

export default SuggestionItem
