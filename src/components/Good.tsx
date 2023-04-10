interface GoodProps {
  name: string;
  selectedGood: string;
  setSelectedGood: (value: string) => void;
}

export const Good: React.FC<GoodProps>
  = ({ selectedGood, setSelectedGood, name }) => (
    <tr
      data-cy="Good"
      className={selectedGood === name
        ? 'has-background-success-light'
        : ''}
    >
      <td>
        {selectedGood === name ? (
          <button
            aria-label="Remove"
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={() => setSelectedGood('')}
          >
            -
          </button>
        )
          : (
            <button
              aria-label="Add"
              data-cy="AddButton"
              type="button"
              className="button"
              onClick={() => setSelectedGood(name)}
            >
              +
            </button>
          )}
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {name}
      </td>
    </tr>
  );
